import img from "figma:asset/b0f47ba06f722de7adc5139d16ec4964385d8782.png";

export function PromartCover({ className = "", alt = "ПромАрт" }: { className?: string; alt?: string }) {
  return (
    <div className={`relative size-full ${className}`}>
      <img 
        alt={alt} 
        className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" 
        src={img} 
      />
    </div>
  );
}
