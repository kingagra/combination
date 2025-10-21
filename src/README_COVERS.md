# 🖼️ Система обложек кейсов

## Быстрый старт

### Использование существующей обложки

```tsx
import { VtorichkinCover } from './components/covers';

<VtorichkinCover 
  className="w-full h-full object-cover" 
  alt="Вторичкин"
/>
```

### Добавление новой обложки

**Шаг 1:** Создай файл `/components/covers/NewCaseCover.tsx`

```tsx
import img from "figma:asset/YOUR_HASH_HERE.png";

export function NewCaseCover({ 
  className = "", 
  alt = "New Case" 
}: { 
  className?: string; 
  alt?: string 
}) {
  return <img src={img} alt={alt} className={className} />;
}
```

**Шаг 2:** Добавь экспорт в `/components/covers/index.tsx`

```tsx
export { NewCaseCover } from './NewCaseCover';
```

**Шаг 3:** Если нужно для детальной страницы, добавь в `/assets.ts`

```tsx
// В секции импортов
import newcaseCover from 'figma:asset/YOUR_HASH_HERE.png';

// В COVERS
export const COVERS = {
  // ...
  newcase: newcaseCover,
};

// Если есть детальные изображения, добавь в CASE_IMAGES
export const CASE_IMAGES = {
  // ...
  newcase: [img1, img2, img3],
};
```

**Готово!** ✅

## Архитектура

```
╔════════════════════════════════════════════════╗
║  Cover Component (React)                       ║
║  ┌──────────────────────────────────────────┐  ║
║  │ import img from "figma:asset/HASH.png"   │  ║
║  │ export function Cover() {                │  ║
║  │   return <img src={img} />               │  ║
║  │ }                                        │  ║
║  └──────────────────────────────────────────┘  ║
╚════════════════════════════════════════════════╝
                     ↓
╔════════════════════════════════════════════════╗
║  Использование в UI                            ║
║  <VtorichkinCover className="..." />           ║
╚════════════════════════════════════════════════╝
```

## Все доступные обложки

| Компонент | Используется для | Статус |
|-----------|-----------------|--------|
| `VtorichkinCover` | Платформа Вторичкин | ✅ |
| `GetlogistCover` | Рейтинг Getlogist | ✅ |
| `GoldmileCover` | Золотая миля | ✅ |
| `Kombo499Cover` | Комбо за 499 | ✅ |
| `OkogoraCover` | Око Гора | ✅ |
| `CherekhinCover` | Черёхин парк | ✅ |
| `NexteventCover` | NextEvent | ✅ |
| `TectumCover` | Tectum баннеры | ✅ |
| `PromartCover` | ПромАрт | ✅ |

## Важные правила

### ✅ ДЕЛАЙ:

1. **Прямой импорт** `figma:asset` внутри Cover компонента
2. **Английские имена** файлов (CamelCase)
3. **TypeScript типы** для пропсов
4. **Используй как React компонент** в JSX

### ❌ НЕ ДЕЛАЙ:

1. **НЕ импортируй** `figma:asset` в других файлах и не экспортируй URL
2. **НЕ создавай** промежуточные массивы или обёртки
3. **НЕ используй** кириллические названия файлов
4. **НЕ пытайся** извлечь URL из `figma:asset` импорта

## Примеры использования

### В секции кейсов на главной

```tsx
function Cases() {
  return (
    <CaseCard 
      title="Вторичкин"
      CoverComponent={VtorichkinCover}
      onClick={() => {}}
    />
  );
}
```

### В странице всех кейсов

```tsx
const caseStudies = [
  {
    id: '1',
    title: 'Вторичкин',
    CoverComponent: VtorichkinCover,
  }
];

<CoverComponent className="..." alt="..." />
```

### В специальной секции

```tsx
<TectumCover 
  alt="Tectum баннеры" 
  className="w-full h-full object-cover"
/>
```

## Структура файлов

```
/components/covers/
  ├── VtorichkinCover.tsx    (figma:asset внутри)
  ├── GetlogistCover.tsx     (figma:asset внутри)
  ├── GoldmileCover.tsx      (figma:asset внутри)
  ├── Kombo499Cover.tsx      (figma:asset внутри)
  ├── OkogoraCover.tsx       (figma:asset внутри)
  ├── CherekhinCover.tsx     (figma:asset внутри)
  ├── NexteventCover.tsx     (figma:asset внутри)
  ├── TectumCover.tsx        (figma:asset внутри)
  ├── PromartCover.tsx       (figma:asset внутри)
  └── index.tsx              (re-exports)
```

## FAQ

**Q: Почему не использовать URL напрямую из assets.ts?**  
A: `figma:asset` импорты работают только внутри модуля где объявлены. При импорте в другой модуль получаем только имя файла, а не blob: URL.

**Q: Можно ли использовать обычные URL изображений?**  
A: Можно, но Figma Make использует `figma:asset` для оптимизации. Для других источников используй `ImageWithFallback`.

**Q: Как дебажить если обложка не показывается?**  
A: Проверь:
1. figma:asset импорт внутри Cover компонента? ✅
2. Файл имеет английское имя? ✅
3. Компонент экспортирован в index.tsx? ✅
4. Используешь как `<CoverComponent />`? ✅

**Q: Нужно ли добавлять обложку в assets.ts?**  
A: Только если нужна для CaseDetailPage (детальная страница кейса). Для использования в UI достаточно Cover компонента.

## Связанные файлы

- `/assets.ts` - экспорты для CaseDetailPage
- `/App.tsx` - главная страница (использует обложки)
- `/components/CasesPage.tsx` - страница всех кейсов
- `/components/CaseDetailPage.tsx` - детальные страницы

## Версия системы

**v2.0 - Простое решение (январь 2025)**

Предыдущая версия (v1.0) использовала сложную систему с массивами, normalizeAsset и промежуточными слоями. Она была нестабильна и сложна в поддержке.

Текущая версия максимально упрощена и **просто работает**. ✅
