# ТЕКТУМ - РЕШЕНИЕ ПРОБЛЕМЫ С ОБЛОЖКОЙ

## Проблема
Прямой импорт `figma:asset` в компонентах не работает стабильно - может возвращать только имя файла вместо blob: URL.

## Решение ✅

### 1. Создан новый файл с английским именем: `/imports/Tectum.tsx`
```tsx
import imgTectumCover from "figma:asset/e14d47a04fcea21013a50e30c3303b5ab4562635.png";

export const tectumImagesExport = [
  imgTectumCover,    // [0] - обложка и баннер (одно и то же изображение)
];
```

**КЛЮЧЕВОЙ МОМЕНТ**: figma:asset импорты работают только когда они объявлены в том же модуле, где используются.

### 2. Обновлён `/components/covers/TectumCover.tsx`
```tsx
import { tectumImagesExport } from "../../imports/Tectum";

export function TectumCover({ className = "", alt = "Tectum" }: { className?: string; alt?: string }) {
  return <img src={tectumImagesExport[0]} alt={alt} className={className} />;
}
```

### 3. Обновлён `/assets.ts`
```tsx
// Импорт массива из английского файла
import { tectumImagesExport } from './imports/Tectum';

// Использование в COVERS
export const COVERS = {
  // ...
  tectum: tectumImagesExport[0],  // Прямо из массива, БЕЗ normalizeAsset
  // ...
};

// Использование в IMAGES (для hero и баннеров)
export const IMAGES = {
  tectumHero: tectumImagesExport[0],
  tectumBanners: tectumImagesExport[0],
};
```

## Паттерн для всех проблемных обложек

Этот же паттерн используется для:
- ✅ **Okogora** - `/imports/Okogora.tsx` (английское имя)
- ✅ **Goldmile** - `/imports/Goldmile.tsx` (английское имя)
- ✅ **Cherekhin** - `/imports/Cherekhin.tsx` (английское имя)
- ✅ **Tectum** - `/imports/Tectum.tsx` (английское имя)

## Особенность Tectum
У Tectum только одно изображение (обложка), которое используется в трёх местах:
1. `COVERS.tectum` - для отображения на главной странице
2. `IMAGES.tectumHero` - для большого баннера в секции SpecialCases
3. `IMAGES.tectumBanners` - для секции баннеров (то же изображение)

Все три используют `tectumImagesExport[0]`.

## Правила
1. **ВСЕГДА** создавайте файлы с **английскими** именами для экспорта figma:asset
2. **НИКОГДА** не импортируйте figma:asset напрямую в assets.ts - используйте массивы из компонентов
3. **НЕ ИСПОЛЬЗУЙТЕ** normalizeAsset() для значений из массивов - они уже являются blob: URL
4. figma:asset **ДОЛЖЕН** оставаться в том же модуле, где объявлен

## Результат ✅
- Обложка Tectum теперь отображается корректно
- Баннеры Tectum доступны для специальной секции
- Все проверки в консоли проходят успешно
- Паттерн единообразен с другими проблемными кейсами
