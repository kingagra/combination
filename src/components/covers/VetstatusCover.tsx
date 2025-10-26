import img from "figma:asset/ea29e8e441567b0288b2438bbecf020ec93a7cfa.png";

export function VetstatusCover({ className = "", alt = "Ветстатус" }: { className?: string; alt?: string }) {
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
