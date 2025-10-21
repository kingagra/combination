import img from "figma:asset/6b5429d6f764c4a2fcef954c6de9aacddf78d477.png";

export function GoldmileCover({ className = "", alt = "Золотая миля" }: { className?: string; alt?: string }) {
  return <img src={img} alt={alt} className={className} />;
}
