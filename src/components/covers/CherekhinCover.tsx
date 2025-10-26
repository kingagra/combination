import img from "figma:asset/a132e2a634cfcbb80967f3e2ebe852ef884af10c.png";

export function CherekhinCover({ className = "", alt = "Черёхин парк" }: { className?: string; alt?: string }) {
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
