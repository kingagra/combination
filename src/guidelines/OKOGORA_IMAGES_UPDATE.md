# Обновление изображений Окогора ✅

## Дата: 20 октября 2025

## Проблема
Детальные изображения кейса "Око Гора" использовали временные/неправильные хэши.

## Решение
Извлечены все правильные хэши из Figma импорта `/imports/Okogora-194-912.tsx` и обновлены в `/assets.ts`.

## Обновлённые хэши (14 изображений)

### Обложка (используется везде)
```typescript
okogora1: 'figma:asset/b037e7eed6eef7992486bffefd90173d2266f227.png' // eg_photo.jpg
```

### Детальные изображения
```typescript
okogora2:  'ad8e602cd9f07d2c236f31c1e848646093d49d10.png' // eg_logo.jpg
okogora3:  '893c555c65251bf56817c4076188d3975d58631b.png' // logo_animation.mp4
okogora4:  '4918607a391332ecbd0ec3454bd690dc73592d74.png' // logo_wink.mp4
okogora5:  'dba056b9d4f25efd1c5b423cc709caabd77f66e4.png' // photo-2-1-1536x760.jpg
okogora6:  '2c682edfef968ce5b96f05a1f3bddce6a41066a4.png' // note-768x768.jpg
okogora7:  '882dbce91a351900242f44078e0677024b090bae.png' // note2-768x768.jpg
okogora8:  'b676e820ff9699e4ee3ee6af70caf64d7602b231.png' // pin-1536x898.jpg
okogora9:  '2616ba39082f4cc2855efaa8acf7cd43597183e6.png' // bag-1539x2048.jpg
okogora10: 'e30c73a9cfb5175eee13237f218317307f3bea14.png' // eg_icons-1536x698.jpg
okogora11: '129b0a1ec716e91603b3c03ba667f8774b7f4d77.png' // eg_товары-1536x898.jpg
okogora12: '9f2ab87b3c544bd413350148385f89a9dcd881a9.png' // eg_post-1-1536x760.jpg
okogora13: 'c84c410e38345627b708b9e430e4e8158d10f5c4.png' // eg_post-3_2-1536x760.jpg
okogora14: 'd6828a08cd665efe62e9616c7a06619850e17591.png' // post_2.mp4
```

## Обновлённые файлы
- ✅ `/assets.ts` - обновлены все 14 импортов с комментариями
- ✅ `/components/covers/OkogoraCover.tsx` - уже использовал правильный хэш

## Статус всех обложек
1. ✅ Вторичкин - работает
2. ✅ Getlogist - работает
3. ✅ Золотая миля - работает
4. ✅ Комбо за 499 - работает
5. ✅ **Око Гора - ОБНОВЛЁН!** 🎉
6. ✅ Черёхин парк - работает
7. ✅ NextEvent - работает
8. ✅ Tectum - работает
9. ✅ ПромАрт - работает

## Важно
- Все хэши взяты НАПРЯМУЮ из Figma импорта
- Добавлены комментарии с оригинальными названиями файлов для отладки
- Обложка используется как `okogora1` и в CoverComponent
