import imgTectumCover from "figma:asset/e14d47a04fcea21013a50e30c3303b5ab4562635.png";

// Экспортируем массив изображений для использования в других файлах
// Для Tectum у нас только одно изображение (обложка/баннер)
export const tectumImagesExport = [
  imgTectumCover,    // [0] - обложка и баннер (одно и то же изображение)
];

export default function Component() {
  return (
    <div className="relative size-full" data-name="тектум">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTectumCover} />
    </div>
  );
}
