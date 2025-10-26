import img from "figma:asset/5a078efff0031a2307c935e3d01bbf68ac7e14dd.png";

export function VtorichkinCover({ className = "", alt = "Вторичкин" }: { className?: string; alt?: string }) {
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
