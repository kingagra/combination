import imgAutoservis from 'figma:asset/140e3b024340ed4421cc7caae55c8f620df41c69.png';

export function AutoservisCover({ className = "", alt = "Автосервис" }: { className?: string; alt?: string }) {
  return (
    <div className={`bg-gradient-to-b from-[#fefefe] to-[#bbbbbb] relative w-full h-full ${className}`}>
      <img 
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover object-center"
        src={imgAutoservis}
      />
    </div>
  );
}
