# ЧЕРЁХИН - РЕШЕНИЕ ПРОБЛЕМЫ С ОБЛОЖКОЙ

## Проблема
```
❌ [cherekhin] ОШИБКА: figma:asset вернул только имя файла без пути: 5d08fe25699b425d4756dfdfc0c5c0e5f9c6cecc.png
❌ [cherekhin] Это означает, что импорт не работает. Используйте extractImageSrc() для этого файла.
❌❌❌ КРИТИЧЕСКАЯ ОШИБКА: Найдены битые обложки:
  - cherekhin: 
```

## Причина
1. **Прямой импорт `figma:asset` в компонентах НЕ РАБОТАЕТ** - возвращает только имя файла
2. **Импорт из файлов с кириллицей НЕ РАБОТАЕТ в браузере** - файлы `/imports/Черёхин-*.tsx` не загружаются

## Решение ✅

### 1. Создан новый файл с английским именем: `/imports/Cherekhin.tsx`
```tsx
import imgCherekhinCover from "figma:asset/5d08fe25699b425d4756dfdfc0c5c0e5f9c6cecc.png";
import imgCherekhinDetail2 from "figma:asset/bfd401c6e84caa1e33c0f0b00c313838c2c08e2f.png";

export const cherekhinImagesExport = [
  imgCherekhinCover,    // [0] - обложка
  imgCherekhinDetail2   // [1] - детальное изображение
];
```

**КЛЮЧЕВОЙ МОМЕНТ**: figma:asset импорты работают только когда они объявлены в том же модуле, где используются.

### 2. Обновлён `/components/covers/CherekhinCover.tsx`
```tsx
import { cherekhinImagesExport } from "../../imports/Cherekhin";

export function CherekhinCover({ className = "", alt = "Черёхин парк" }: { className?: string; alt?: string }) {
  return <img src={cherekhinImagesExport[0]} alt={alt} className={className} />;
}
```

### 3. Обновлён `/assets.ts`
```tsx
// Импорт массива из английского файла
import { cherekhinImagesExport } from './imports/Cherekhin';

// Использование в COVERS
export const COVERS = {
  // ...
  cherekhin: cherekhinImagesExport[0],  // Прямо из массива, БЕЗ normalizeAsset
  // ...
};

// Использование в CASE_IMAGES
const cherekhin1 = cherekhinImagesExport[0]; // Обложка
const cherekhin2 = cherekhinImagesExport[1]; // Детальное изображение

export const CASE_IMAGES = {
  // ...
  cherekhin: [cherekhin1, cherekhin2],
  // ...
};
```

## Паттерн для всех проблемных обложек

Этот же паттерн используется для:
- ✅ **Okogora** - `/imports/Okogora.tsx` (английское имя)
- ✅ **Goldmile** - `/imports/Goldmile.tsx` (английское имя)
- ✅ **Cherekhin** - `/imports/Cherekhin.tsx` (английское имя)

## Правила
1. **ВСЕГДА** создавайте файлы с **английскими** именами для экспорта figma:asset
2. **НИКОГДА** не импортируйте figma:asset напрямую в assets.ts - используйте массивы из компонентов
3. **НЕ ИСПОЛЬЗУЙТЕ** normalizeAsset() для значений из массивов - они уже являются blob: URL
4. figma:asset **ДОЛЖЕН** оставаться в том же модуле, где объявлен

## Результат ✅
- Обложка Черёхина теперь отображается корректно
- Детальное изображение доступно для страницы кейса
- Все проверки в консоли проходят успешно
- Паттерн единообразен с другими проблемными кейсами (Okogora, Goldmile)
