import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import svgPaths from "../imports/svg-6thd6kauch";

function Group68() {
  return (
    <div className="h-5 lg:h-6 relative shrink-0 w-auto">
      <svg className="block h-full w-auto" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 258 44">
        <g id="Group 66">
          <path d={svgPaths.p1b5e8510} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p275cc500} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p2a6fd080} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p17421e00} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p18c48c00} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p3dcd7f00} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p3be6e900} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p2ac55a00} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p37ed2180} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p31618400} fill="var(--fill-0, white)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function NavButton({ onClick }: { onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="relative overflow-hidden rounded-full px-4 py-2 lg:px-5 lg:py-2.5 bg-white/10 hover:bg-white/15 transition-all duration-200 group"
    >
      {/* Glass effect layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
      <div className="absolute inset-0 border border-white/10 rounded-full" />
      
      {/* Text */}
      <p className="relative font-['Inter',sans-serif] text-[0.9375rem] lg:text-[1rem] text-white group-hover:text-[#FF5500] transition-colors">
        Новый проект
      </p>
    </button>
  );
}

interface NavigationProps {
  onCasesClick?: () => void;
  isDark?: boolean;
}

export function Navigation({ onCasesClick, isDark = true }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleNewProject = () => {
    console.log('Новый проект clicked');
  };

  const handleLogoClick = () => {
    if (onCasesClick) {
      onCasesClick();
    } else {
      scrollToSection('hero');
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: 'Услуги', onClick: () => scrollToSection('services') },
    { label: 'Кейсы', onClick: () => scrollToSection('cases') },
    { label: 'Контакты', onClick: () => {
      const footer = document.querySelector('footer') || document.getElementById('footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    }},
  ];

  return (
    <>
      {/* Навигационная панель - Apple Glass Effect */}
      <div className="fixed top-0 left-0 right-0 w-full z-50" data-name="Navigation">
        <div className="flex flex-col items-center px-8 lg:px-16 py-3 lg:py-4">
          <div className="relative w-full max-w-[1920px]">
            {/* Glass morphism слои */}
            <div className="relative overflow-hidden rounded-2xl">
              {/* Layer 1: Background blur */}
              <div className="absolute inset-0 bg-black/70 backdrop-blur-xl" />
              
              {/* Layer 2: Border */}
              <div className="absolute inset-0 rounded-2xl border border-white/10" />
              
              {/* Layer 3: Content */}
              <div className="relative flex items-center justify-between px-6 lg:px-8 py-2.5 lg:py-3">
                {/* Левая часть - Логотип */}
                <div className="flex items-center">
                  <button onClick={handleLogoClick} className="cursor-pointer hover:opacity-80 transition-opacity">
                    <Group68 />
                  </button>
                </div>

                {/* Правая часть - ТГ/BE/DP + Кнопка + Бургер */}
                <div className="flex items-center gap-3 lg:gap-6">
                  {/* ТГ BE DP */}
                  <div className="hidden lg:flex items-center gap-4">
                    <p className="font-['Inter',sans-serif] text-[0.9375rem] text-white/50 whitespace-nowrap cursor-pointer hover:text-white/80 transition-colors">ТГ</p>
                    <p className="font-['Inter',sans-serif] text-[0.9375rem] text-white/50 whitespace-nowrap cursor-pointer hover:text-white/80 transition-colors">BE</p>
                    <p className="font-['Inter',sans-serif] text-[0.9375rem] text-white/50 whitespace-nowrap cursor-pointer hover:text-white/80 transition-colors">DP</p>
                  </div>
                  
                  {/* Кнопка Новый проект */}
                  <div className="hidden lg:flex">
                    <NavButton onClick={handleNewProject} />
                  </div>

                  {/* Бургер */}
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 rounded-lg transition-colors text-white hover:bg-white/10"
                    aria-label="Menu"
                  >
                    {isMenuOpen ? (
                      <X className="w-5 h-5 lg:w-6 lg:h-6" />
                    ) : (
                      <Menu className="w-5 h-5 lg:w-6 lg:h-6" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Выдвижное меню - Apple Glass Effect */}
      <div 
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Оверлей */}
        <div 
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Меню панель - Apple Glass Effect */}
        <div 
          className={`absolute top-0 right-0 bottom-0 w-full sm:w-[380px] lg:w-[420px] transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Glass morphism слои */}
          <div className="relative h-full">
            {/* Layer 1: Background */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl" />
            
            {/* Layer 2: Border */}
            <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent" />
            
            {/* Layer 3: Content */}
            <div className="relative h-full">
              <div className="flex flex-col h-full pt-20 px-6 lg:px-8">
                {/* Меню элементы */}
                <nav className="flex flex-col space-y-0.5">
                  {menuItems.map((item, index) => (
                    <button
                      key={index}
                      onClick={item.onClick}
                      className="text-left px-4 py-3.5 rounded-xl transition-all font-['Inter',sans-serif] text-[1.5rem] lg:text-[1.75rem] text-white hover:bg-white/5 active:bg-white/10"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>

                {/* Соц сети в меню */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  <p className="font-['Inter',sans-serif] text-[0.875rem] mb-3 text-white/40">
                    Мы в соцсетях
                  </p>
                  <div className="flex gap-5">
                    <p className="font-['Inter',sans-serif] text-[1.125rem] text-white/70 cursor-pointer hover:text-white transition-colors">ТГ</p>
                    <p className="font-['Inter',sans-serif] text-[1.125rem] text-white/70 cursor-pointer hover:text-white transition-colors">BE</p>
                    <p className="font-['Inter',sans-serif] text-[1.125rem] text-white/70 cursor-pointer hover:text-white transition-colors">DP</p>
                  </div>
                </div>

                {/* Контактная информация внизу */}
                <div className="mt-auto pb-8 pt-6 border-t border-white/5">
                  <p className="font-['Inter',sans-serif] text-[0.875rem] mb-2 text-white/40">
                    Связаться с нами
                  </p>
                  <p className="font-['Inter',sans-serif] text-[1.125rem] text-white">
                    hello@kombinatios.ru
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
