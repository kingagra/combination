import img from "figma:asset/e14d47a04fcea21013a50e30c3303b5ab4562635.png";

export function TectumCover({ className = "", alt = "Tectum" }: { className?: string; alt?: string }) {
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
