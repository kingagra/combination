import img from "figma:asset/bfd401c6e84caa1e33c0f0b00c313838c2c08e2f.png";

// Экспортируем сам импорт для использования в других файлах
export const cherekhinDetail2Img = img;

export default function Component() {
  return (
    <div className="relative size-full" data-name="черёхин">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
    </div>
  );
}