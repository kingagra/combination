import img from "figma:asset/a08922954fb55abcd1cae7d71de2e275184b0c63.png";

export function NexteventCover({ className = "", alt = "NextEvent" }: { className?: string; alt?: string }) {
  return <img src={img} alt={alt} className={className} />;
}
