# ПОЛНОЕ РЕШЕНИЕ ПРОБЛЕМЫ С ОБЛОЖКАМИ КЕЙСОВ

## Проблема
Прямой импорт `figma:asset` в компонентах и `assets.ts` не работает стабильно:
- Может возвращать только имя файла вместо blob: URL
- Файлы с кириллическими именами не загружаются в браузере
- Приводит к белому экрану или битым изображениям

## Универсальное решение ✅

### Архитектура
```
/imports/CaseName.tsx (английское имя!)
  ↓ экспортирует массив caseNameImagesExport
  ↓
/components/covers/CaseNameCover.tsx
  ↓ использует caseNameImagesExport[0]
  ↓
/assets.ts
  ↓ импортирует caseNameImagesExport
  ↓ использует напрямую в COVERS и CASE_IMAGES
```

## Исправленные кейсы

### 1. ✅ Okogora (Око Гора)
**Файл:** `/imports/Okogora.tsx`
```tsx
export const okogoraImagesExport = [
  imgEgPhotoJpg,      // [0] - обложка
  imgEgLogoJpg,       // [1]
  imgLogoAnimationMp4, // [2] - видео
  // ... всего 17 изображений
];
```

### 2. ✅ Goldmile (Золотая миля)
**Файл:** `/imports/Goldmile.tsx`
```tsx
export const goldmileImagesExport = [
  imgGoldmileCover,  // [0] - обложка
  imgDetail1,        // [1]
  // ... всего 17 изображений
];
```

### 3. ✅ Cherekhin (Черёхин парк)
**Файл:** `/imports/Cherekhin.tsx`
```tsx
export const cherekhinImagesExport = [
  imgCherekhinCover,    // [0] - обложка
  imgCherekhinDetail2   // [1] - детальное изображение
];
```

### 4. ✅ Tectum (Тектум)
**Файл:** `/imports/Tectum.tsx`
```tsx
export const tectumImagesExport = [
  imgTectumCover,    // [0] - обложка и баннер
];
```

## Шаблон для новых кейсов

```tsx
// /imports/NewCase.tsx (АНГЛИЙСКОЕ ИМЯ!)
import img1 from "figma:asset/HASH1.png";
import img2 from "figma:asset/HASH2.png";

export const newcaseImagesExport = [
  img1,  // [0] - обложка
  img2,  // [1] - дополнительные изображения
  // ...
];

export default function Component() {
  return (
    <div className="relative size-full">
      <img src={img1} alt="" className="absolute inset-0 w-full h-full object-cover" />
    </div>
  );
}
```

```tsx
// /components/covers/NewCaseCover.tsx
import { newcaseImagesExport } from "../../imports/NewCase";

export function NewCaseCover({ className = "", alt = "New Case" }: { className?: string; alt?: string }) {
  return <img src={newcaseImagesExport[0]} alt={alt} className={className} />;
}
```

```tsx
// /assets.ts
import { newcaseImagesExport } from './imports/NewCase';

export const COVERS = {
  // ...
  newcase: newcaseImagesExport[0],  // БЕЗ normalizeAsset!
};

export const CASE_IMAGES = {
  // ...
  newcase: [
    newcaseImagesExport[0],  // обложка
    newcaseImagesExport[1],  // детальное изображение 1
    // ...
  ],
};
```

## Критически важные правила

### ❌ НЕ ДЕЛАЙТЕ:
1. **НЕ** создавайте файлы с кириллическими именами
2. **НЕ** импортируйте `figma:asset` напрямую в `assets.ts`
3. **НЕ** используйте `normalizeAsset()` для значений из массивов экспорта
4. **НЕ** пытайтесь извлечь URL из `figma:asset` импорта

### ✅ ДЕЛАЙТЕ:
1. **ВСЕГДА** создавайте файлы с английскими именами
2. **ВСЕГДА** объявляйте `figma:asset` импорты в том же модуле где экспортируете
3. **ВСЕГДА** экспортируйте массив с суффиксом `ImagesExport`
4. **ВСЕГДА** используйте значения из массива напрямую (они уже blob: URL)

## Почему это работает

**Магия Figma Make:**
- `figma:asset` импорты преобразуются в blob: URL на этапе сборки
- Это преобразование работает только ВНУТРИ модуля где импорт объявлен
- При реэкспорте через массив blob: URL сохраняется
- Массив можно безопасно импортировать в другие модули

## Проверка работоспособности

Откройте консоль браузера и проверьте:

```javascript
// Должно быть true для всех обложек
console.log(COVERS.okogora?.startsWith('blob:'));     // true
console.log(COVERS.goldmile?.startsWith('blob:'));    // true
console.log(COVERS.cherekhin?.startsWith('blob:'));   // true
console.log(COVERS.tectum?.startsWith('blob:'));      // true
```

Если видите `false` или только имя файла - проверьте:
1. Файл импорта имеет английское имя
2. `figma:asset` объявлен в том же файле что и экспорт массива
3. В `assets.ts` используется значение из массива БЕЗ `normalizeAsset()`

## Статус всех обложек

| Кейс | Файл импорта | Статус |
|------|-------------|--------|
| Вторичкин | Прямой импорт | ✅ Работает |
| Getlogist | Прямой импорт | ✅ Работает |
| Goldmile | `/imports/Goldmile.tsx` | ✅ Исправлено |
| Комбо 499 | Прямой импорт | ✅ Работает |
| Oko Gora | `/imports/Okogora.tsx` | ✅ Исправлено |
| Черёхин | `/imports/Cherekhin.tsx` | ✅ Исправлено |
| NextEvent | Прямой импорт | ✅ Работает |
| Tectum | `/imports/Tectum.tsx` | ✅ Исправлено |
| Промарт | Прямой импорт | ✅ Работает |

## Результат
✅ Все обложки отображаются корректно  
✅ Нет битых ссылок  
✅ Нет белого экрана  
✅ Единообразная архитектура  
✅ Легко добавлять новые кейсы
