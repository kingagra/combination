import img from "figma:asset/3a7069d0f079364ceca3c29680d9b4cbe0a93f1e.png";

export function TectumCover({ className = "", alt = "Tectum" }: { className?: string; alt?: string }) {
  return <img src={img} alt={alt} className={className} />;
}
