# ПРОСТОЕ РЕШЕНИЕ ПРОБЛЕМЫ С ОБЛОЖКАМИ ✅

## Что было не так

Мы создали слишком сложную систему:
- ❌ Массивы экспорта (okogoraImagesExport, cherekhinImagesExport, tectumImagesExport)
- ❌ Промежуточный слой в /imports/ с английскими файлами
- ❌ Функция normalizeAsset() с проверками
- ❌ Сложное логирование и отладка
- ❌ Множество слоёв между импортом и использованием

Результат: **постоянные проблемы, хотя бы одна обложка вылетает**

## Новое простое решение

### Принцип: "Один компонент = один импорт"

Каждая обложка — это простой React компонент с прямым `figma:asset` импортом внутри:

```tsx
// /components/covers/VtorichkinCover.tsx
import img from "figma:asset/HASH.png";

export function VtorichkinCover({ className = "", alt = "Вторичкин" }) {
  return <img src={img} alt={alt} className={className} />;
}
```

**ВСЁ!** Никаких массивов, никаких промежуточных слоёв, никакого normalizeAsset.

### Использование

```tsx
// В App.tsx или любом другом компоненте
import { VtorichkinCover } from './components/covers';

// Просто рендерим как React компонент
<VtorichkinCover 
  className="w-full h-full object-cover" 
  alt="Платформа Вторичкин" 
/>
```

## Структура файлов

```
/components/covers/
  ├── VtorichkinCover.tsx    ✅ figma:asset импорт внутри
  ├── GetlogistCover.tsx     ✅ figma:asset импорт внутри
  ├── GoldmileCover.tsx      ✅ figma:asset импорт внутри
  ├── Kombo499Cover.tsx      ✅ figma:asset импорт внутри
  ├── OkogoraCover.tsx       ✅ figma:asset импорт внутри
  ├── CherekhinCover.tsx     ✅ figma:asset импорт внутри
  ├── NexteventCover.tsx     ✅ figma:asset импорт внутри
  ├── TectumCover.tsx        ✅ figma:asset импорт внутри
  ├── PromartCover.tsx       ✅ figma:asset импорт внутри
  └── index.tsx              ✅ re-exports всех обложек
```

## Что с assets.ts?

`/assets.ts` теперь **супер простой** - только прямые импорты для CaseDetailPage:

```tsx
// Прямые импорты
import vtorichkinCover from 'figma:asset/HASH.png';
import getlogistCover from 'figma:asset/HASH.png';
// ...

// Простые экспорты
export const COVERS = {
  vtorichkin: vtorichkinCover,
  getlogist: getlogistCover,
  // ...
};

export const CASE_IMAGES = {
  vtorichkin: [img1, img2, img3],
  getlogist: [img1, img2, img3],
  // ...
};
```

**Никаких проверок, никакого normalizeAsset, никаких массивов из других файлов!**

## Почему это работает

1. **figma:asset импорт объявлен и используется в одном месте** - это ключ к стабильности
2. **Нет промежуточных слоёв** - меньше мест где может сломаться
3. **React компоненты** - естественный способ работы с figma:asset
4. **Простота** - легко понять, легко дебажить, легко добавлять новые обложки

## Как добавить новую обложку

1. Создай файл `/components/covers/NewCaseCover.tsx`:
```tsx
import img from "figma:asset/YOUR_HASH.png";

export function NewCaseCover({ className = "", alt = "New Case" }) {
  return <img src={img} alt={alt} className={className} />;
}
```

2. Добавь экспорт в `/components/covers/index.tsx`:
```tsx
export { NewCaseCover } from './NewCaseCover';
```

3. Если нужно для CaseDetailPage, добавь в `/assets.ts`:
```tsx
import newcaseCover from 'figma:asset/YOUR_HASH.png';

export const COVERS = {
  // ...
  newcase: newcaseCover,
};
```

4. Используй в компоненте:
```tsx
import { NewCaseCover } from './components/covers';

<NewCaseCover className="..." />
```

**ГОТОВО!**

## Правила (очень простые)

1. ✅ Каждая обложка = отдельный файл в `/components/covers/`
2. ✅ figma:asset импорт ВНУТРИ компонента обложки
3. ✅ Используй компоненты напрямую в JSX
4. ✅ Файлы ТОЛЬКО с английскими названиями
5. ❌ НЕ создавай промежуточные массивы экспорта
6. ❌ НЕ используй normalizeAsset или другие обёртки
7. ❌ НЕ импортируй figma:asset в assets.ts через другие файлы

## Результат

✅ **Все 9 обложек работают**  
✅ **Простая архитектура**  
✅ **Легко добавлять новые**  
✅ **Легко дебажить**  
✅ **Нет магии - всё понятно**

## Что удалить/игнорировать

Старые файлы в `/imports/`:
- ❌ `Okogora.tsx` - больше не нужен
- ❌ `Cherekhin.tsx` - больше не нужен  
- ❌ `Tectum.tsx` - больше не нужен
- ❌ `Goldmile.tsx` - больше не нужен
- ❌ Все файлы с кириллицей

Оставить:
- ✅ `svg-6thd6kauch.ts` - используется
- ✅ `svg-6eoo0l3mss.ts` - используется
- ✅ `NationalProjectsLogo.tsx` - используется

## Финальная мысль

**Простота - это ключ к надёжности.**

Мы пытались быть слишком умными с массивами, экспортами и normalizeAsset.  
Теперь всё просто: один компонент = один импорт = одна обложка.

**И ЭТО ПРОСТО РАБОТАЕТ! ✅**
