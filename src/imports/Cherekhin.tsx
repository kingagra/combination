import imgCherekhinCover from "figma:asset/5d08fe25699b425d4756dfdfc0c5c0e5f9c6cecc.png";
import imgCherekhinDetail2 from "figma:asset/bfd401c6e84caa1e33c0f0b00c313838c2c08e2f.png";

// Экспортируем массив изображений для использования в других файлах
// Этот подход работает, потому что figma:asset импорты остаются в том же модуле где объявлены
export const cherekhinImagesExport = [
  imgCherekhinCover,    // [0] - обложка
  imgCherekhinDetail2   // [1] - детальное изображение
];

export default function Component() {
  return (
    <div className="relative size-full" data-name="черёхин">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCherekhinCover} />
    </div>
  );
}
