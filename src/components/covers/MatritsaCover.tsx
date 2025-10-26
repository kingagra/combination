import img from "figma:asset/8d2dac98b2f864ba55867b22f8c1468c1d6bdcf1.png";

export function MatritsaCover({ className = "", alt = "Матрица Судьбы" }: { className?: string; alt?: string }) {
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
