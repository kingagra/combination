import img from "figma:asset/b037e7eed6eef7992486bffefd90173d2266f227.png";

export function OkogoraCover({ className = "", alt = "Око Гора" }: { className?: string; alt?: string }) {
  return <img src={img} alt={alt} className={className} />;
}
