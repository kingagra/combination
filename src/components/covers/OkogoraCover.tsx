import img from "figma:asset/b676e820ff9699e4ee3ee6af70caf64d7602b231.png";

export function OkogoraCover({ className = "", alt = "Око Гора" }: { className?: string; alt?: string }) {
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
