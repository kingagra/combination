# Система работы с изображениями

## 🔴 КРИТИЧЕСКАЯ ИНФОРМАЦИЯ

**figma:asset импорты НЕ МОГУТ быть реэкспортированы через константы!**

При попытке реэкспорта:
```tsx
// В компоненте
import img from "figma:asset/abc123.png";
export const myImg = img;

// В assets.ts
import { myImg } from './imports/Component';
console.log(myImg); // ❌ Вернёт "abc123.png" вместо "blob:https://..."
```

## ✅ Правильное решение

### Для обложек (COVERS)

Импортируйте figma:asset **напрямую** используя точные хэши из компонентов:

```ts
// В /assets.ts
import okogoraCover from "figma:asset/ec7677287f2853811a09f5356a715630ca9c2660.png";

export const COVERS = {
  okogora: normalizeAsset(okogoraCover, 'okogora')  // ✅ Работает!
};
```

**Где взять хэш:**
1. Откройте файл компонента (например `/imports/Окогора-153-15.tsx`)
2. Скопируйте хэш из строки `import img from "figma:asset/HASH.png"`
3. Используйте его в прямом импорте в `/assets.ts`

### Для массивов изображений (CASE_IMAGES)

Массивы можно импортировать из компонентов:

```ts
// В /imports/Okogora.tsx
import img1 from "figma:asset/...";
import img2 from "figma:asset/...";
export const okogoraImagesExport = [img1, img2, ...];

// В /assets.ts
import { okogoraImagesExport } from './imports/Okogora';
const okogoraImages = okogoraImagesExport;  // ✅ Работает для массивов
```

## Структура файлов

```
/assets.ts                         # ВСЕ импорты figma:asset здесь
  ├── Прямые импорты обложек
  └── Импорты массивов из компонентов

/imports/
  ├── Окогора-153-15.tsx          # Компонент с обложкой (не реэкспортируем!)
  ├── Okogora.tsx                 # Массив изображений (экспортируем массив)
  └── ...
```

## Функция normalizeAsset()

Проверяет валидность figma:asset импорта:

```ts
function normalizeAsset(asset: any, name?: string): string {
  // Проверяет что результат начинается с blob: или http:
  // Если нет - выводит ошибку и возвращает пустую строку
}
```

✅ **Применяется ко ВСЕМ** импортам в COVERS  
✅ **НЕ применяется** к массивам в CASE_IMAGES (они уже blob: URL)

## Пример: Добавление нового кейса

### Шаг 1: Найдите хэш обложки

```tsx
// Откройте /imports/НовыйКейс-123-45.tsx
import img from "figma:asset/abc123def456.png";  // ← Скопируйте этот хэш
```

### Шаг 2: Добавьте прямой импорт в /assets.ts

```ts
// В секции ОБЛОЖКИ КЕЙСОВ
import newCaseCover from "figma:asset/abc123def456.png";
```

### Шаг 3: Добавьте в COVERS

```ts
export const COVERS = {
  // ... остальные кейсы
  newcase: normalizeAsset(newCaseCover, 'newcase'),
};
```

### Шаг 4: (Опционально) Добавьте массив изображений

```ts
// Если есть компонент с массивом изображений
import { newCaseImagesExport } from './imports/NewCase';
const newCaseImages = newCaseImagesExport;

export const CASE_IMAGES = {
  // ... остальные кейсы
  newcase: newCaseImages,
};
```

## Отладка

### Ошибка: "figma:asset вернул только имя файла"

```
❌ [okogora] ОШИБКА: figma:asset вернул только имя файла без пути: abc123.png
```

**Решение:** Используйте прямой импорт вместо реэкспорта через константу:

```ts
// ❌ НЕ работает:
import { okogoraImg } from './imports/Окогора-153-15';

// ✅ Работает:
import okogoraCover from "figma:asset/ec7677287f2853811a09f5356a715630ca9c2660.png";
```

### Ошибка: "Все обложки битые"

```
❌❌❌ КРИТИЧЕСКАЯ ОШИБКА: Найдены битые обложки:
  - okogora: ec7677287f2853811a09f5356a715630ca9c2660.png
```

**Причина:** Используется реэкспорт через константу  
**Решение:** Замените на прямой figma:asset импорт

## Текущий статус

### ✅ Работающие импорты

| Кейс | Обложка | Массив изображений |
|------|---------|-------------------|
| Вторичкин | Прямой figma:asset | 7 изображений |
| Getlogist | Прямой figma:asset | 6 изображений |
| Goldmile | Прямой figma:asset | 17 изображений (массив) |
| Kombo499 | Прямой figma:asset | 6 изображений |
| Oko Gora | **Прямой figma:asset** | 14 изображений (массив) |
| Черёхин | **Прямой figma:asset** | 2 изображения |
| NextEvent | Прямой figma:asset | 1 изображение |
| Tectum | Прямой figma:asset | 1 изображение |
| Promart | Прямой figma:asset | 1 изображение |

### 🎯 Финальная проверка

В консоли браузера должны быть:

```
🔍 Проверка прямых figma:asset импортов:
  okogoraCover type: string
  okogoraCover: blob:https://figma-alpha-api.s3.us-west-2...
  cherekhinCover type: string
  cherekhinCover: blob:https://figma-alpha-api.s3.us-west-2...
  ...

✅✅✅ Все обложки валидны!
```

## ❌ Что НЕ делать

1. **НЕ реэкспортируйте** figma:asset через константы
2. **НЕ импортируйте** константы из компонентов для обложек
3. **НЕ используйте** промежуточные файлы
4. **НЕ используйте** Unsplash - только изображения из Figma

## ✅ Что делать

1. **Импортируйте** figma:asset напрямую по хэшам для обложек
2. **Импортируйте** массивы из компонентов для детальных страниц
3. **Проверяйте** консоль на ошибки после каждого изменения
4. **Используйте** normalizeAsset() для всех COVERS
