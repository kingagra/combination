import img from "figma:asset/5d08fe25699b425d4756dfdfc0c5c0e5f9c6cecc.png";

export function CherekhinCover({ className = "", alt = "Черёхин парк" }: { className?: string; alt?: string }) {
  return <img src={img} alt={alt} className={className} />;
}
