import img from "figma:asset/eaad70013789d702a75500c74324721fa7aa4b31.png";

export function GoldmileCover({ className = "", alt = "Золотая миля" }: { className?: string; alt?: string }) {
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
