# ✅ ФИНАЛЬНОЕ РЕШЕНИЕ: Прямые figma:asset импорты

## Проблемы, которые были решены

### 1. ❌ react-dom/server недоступен
```
TypeError: Cannot destructure property 'renderToStaticMarkup' of 'window.__GLOBALS__.ReactDOMServer' as it is undefined.
```
**Решение:** Удалили `/utils/extractImageSrc.tsx`

### 2. ❌ Реэкспорт через константы не работает
```
❌❌❌ КРИТИЧЕСКАЯ ОШИБКА: Найдены битые обложки:
  - okogora: ec7677287f2853811a09f5356a715630ca9c2660.png
  - cherekhin: 5d08fe25699b425d4756dfdfc0c5c0e5f9c6cecc.png
```
**Проблема:** При импорте константы из компонента, figma:asset возвращает имя файла вместо blob: URL

**Решение:** Импортируем figma:asset **напрямую** используя точные хэши

## ✅ Финальное решение

### Не работает (❌):
```ts
// В компоненте
import img from "figma:asset/ec7677287f2853811a09f5356a715630ca9c2660.png";
export const okogoraImg = img;

// В assets.ts
import { okogoraImg } from './imports/Окогора-153-15';
const okogoraCover = okogoraImg;
// Результат: "ec7677287f2853811a09f5356a715630ca9c2660.png" ❌
```

### Работает (✅):
```ts
// В assets.ts - прямой импорт по хэшу из компонента
import okogoraCover from "figma:asset/ec7677287f2853811a09f5356a715630ca9c2660.png";

export const COVERS = {
  okogora: normalizeAsset(okogoraCover, 'okogora')
};
// Результат: "blob:https://figma-alpha-api.s3.us-west-2..." ✅
```

## Почему это работает

1. **figma:asset** импорт находится в том же модуле (`/assets.ts`) где используется
2. **Нет промежуточных** реэкспортов через компоненты или константы
3. **Прямой импорт** преобразуется в blob: URL немедленно

## Изменения в коде

### Было (❌):
```ts
// В /assets.ts
import { okogoraImg } from './imports/Окогора-153-15';
import { cherekhinImg } from './imports/Черёхин-152-91';
import { cherekhinDetail2Img } from './imports/Черёхин-146-174';

const okogoraCover = okogoraImg;
const cherekhinCover = cherekhinImg;
const cherekhinDetail2 = cherekhinDetail2Img;
```

### Стало (✅):
```ts
// В /assets.ts - прямые импорты по хэшам
import okogoraCover from "figma:asset/ec7677287f2853811a09f5356a715630ca9c2660.png";
import cherekhinCover from "figma:asset/5d08fe25699b425d4756dfdfc0c5c0e5f9c6cecc.png";
import cherekhinDetail2 from "figma:asset/bfd401c6e84caa1e33c0f0b00c313838c2c08e2f.png";
```

## Как найти правильный хэш

1. Откройте компонент обложки (например `/imports/Окогора-153-15.tsx`)
2. Найдите строку с `import img from "figma:asset/..."`
3. Скопируйте весь хэш: `ec7677287f2853811a09f5356a715630ca9c2660.png`
4. Используйте его в прямом импорте в `/assets.ts`

```tsx
// Пример из /imports/Окогора-153-15.tsx
import img from "figma:asset/ec7677287f2853811a09f5356a715630ca9c2660.png";
                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                        Копируйте этот хэш полностью
```

## Результат

✅ Все обложки корректно загружаются как blob: URL  
✅ Нет зависимости от react-dom/server  
✅ Нет реэкспортов через константы  
✅ Простая и надёжная система  

## Проверка

В консоли браузера должно быть:

```
🔍 Проверка прямых figma:asset импортов:
  okogoraCover type: string
  okogoraCover: blob:https://figma-alpha-api.s3.us-west-2...
  cherekhinCover type: string
  cherekhinCover: blob:https://figma-alpha-api.s3.us-west-2...
  ...

✅✅✅ Все обложки валидны!
```

## Важные примечания

1. **Обложки (COVERS):** Используют прямые figma:asset импорты
2. **Массивы (CASE_IMAGES):** Импортируются из компонентов (это работает для массивов!)
3. **Все COVERS:** Проходят через normalizeAsset() для валидации
4. **Хэши:** Берутся из соответствующих компонентов в `/imports/`
