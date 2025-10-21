import img from "figma:asset/b0f47ba06f722de7adc5139d16ec4964385d8782.png";

export function PromartCover({ className = "", alt = "ПромАрт" }: { className?: string; alt?: string }) {
  return <img src={img} alt={alt} className={className} />;
}
