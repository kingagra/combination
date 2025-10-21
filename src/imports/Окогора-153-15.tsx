import img from "figma:asset/ec7677287f2853811a09f5356a715630ca9c2660.png";

// Экспортируем сам импорт для использования в других файлах
export const okogoraImg = img;

export default function Component() {
  return (
    <div className="relative size-full" data-name="окогора">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
    </div>
  );
}