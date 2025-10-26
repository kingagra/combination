import img from "figma:asset/a96f68f3e3253c35d3128c179d5d64993ea951d5.png";

export function GetlogistCover({ className = "", alt = "Getlogist" }: { className?: string; alt?: string }) {
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
