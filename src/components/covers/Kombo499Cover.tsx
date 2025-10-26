import img from "figma:asset/0ee26efd596827852523af76d126523b304e80c4.png";

export function Kombo499Cover({ className = "", alt = "Комбо за 499" }: { className?: string; alt?: string }) {
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
