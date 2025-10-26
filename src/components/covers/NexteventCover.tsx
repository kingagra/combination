import img from "figma:asset/a08922954fb55abcd1cae7d71de2e275184b0c63.png";

export function NexteventCover({ className = "", alt = "NextEvent" }: { className?: string; alt?: string }) {
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
