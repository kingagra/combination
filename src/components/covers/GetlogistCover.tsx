import img from "figma:asset/a96f68f3e3253c35d3128c179d5d64993ea951d5.png";

export function GetlogistCover({ className = "", alt = "Getlogist" }: { className?: string; alt?: string }) {
  return <img src={img} alt={alt} className={className} />;
}
