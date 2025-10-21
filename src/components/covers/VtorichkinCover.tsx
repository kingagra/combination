import img from "figma:asset/5a078efff0031a2307c935e3d01bbf68ac7e14dd.png";

export function VtorichkinCover({ className = "", alt = "Вторичкин" }: { className?: string; alt?: string }) {
  return <img src={img} alt={alt} className={className} />;
}
