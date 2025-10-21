import img from "figma:asset/5d08fe25699b425d4756dfdfc0c5c0e5f9c6cecc.png";

// Экспортируем сам импорт для использования в других файлах
export const cherekhinImg = img;

export default function Component() {
  return (
    <div className="relative size-full" data-name="черёхин">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
    </div>
  );
}