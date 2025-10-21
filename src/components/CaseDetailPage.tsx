import { useLayoutEffect } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import svgPaths from "../imports/svg-6thd6kauch";
import Slider from "react-slick";
// ЕДИНЫЙ ИСТОЧНИК ПРАВДЫ для картинок ✅✅✅
import { COVERS, CASE_IMAGES } from '../assets';

interface CaseDetail {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  imageUrl: string;
  year: string;
  images: string[];
}

interface CaseDetailPageProps {
  caseData: CaseDetail;
  onBack: () => void;
}

// Кастомные стрелки для react-slick (фильтруем служебные пропсы)
function CustomPrevArrow({ currentSlide, slideCount, ...props }: any) {
  return (
    <button {...props} type="button">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button>
  );
}

function CustomNextArrow({ currentSlide, slideCount, ...props }: any) {
  return (
    <button {...props} type="button">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
  );
}

function Group67() {
  return (
    <div className="h-11 relative shrink-0 w-[257px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 258 44">
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

function Footer() {
  return (
    <div className="bg-black relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-8 lg:gap-12 items-start pb-12 pt-12 lg:pt-16 px-8 lg:px-16 relative w-full">
          <div className="content-stretch flex flex-col lg:flex-row gap-8 lg:gap-12 items-start relative shrink-0 w-full">
            <div className="basis-0 content-stretch flex flex-col gap-4 grow items-start min-h-px min-w-px relative shrink-0">
              <Group67 />
            </div>
            <div className="basis-0 content-stretch flex flex-col lg:flex-row gap-8 lg:gap-12 grow items-start min-h-px min-w-px relative shrink-0">
              <div className="basis-0 font-['Inter',sans-serif] grow min-h-px min-w-px text-[clamp(1.125rem,1.5vw,1.5rem)] text-neutral-100 space-y-2">
                <p className="cursor-pointer hover:text-[#cccccc] transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Наверх</p>
                <p className="cursor-pointer hover:text-[#cccccc] transition-colors">Заполнить бриф</p>
                <p className="underline cursor-pointer hover:text-[#cccccc] transition-colors">Связаться с нами</p>
              </div>
              <div className="basis-0 font-['Inter',sans-serif] grow min-h-px min-w-px text-[clamp(1.125rem,1.5vw,1.5rem)] text-neutral-100 space-y-2">
                <p className="cursor-pointer hover:text-[#cccccc] transition-colors">Instagram</p>
                <p className="cursor-pointer hover:text-[#cccccc] transition-colors">Вконтакте</p>
                <p className="cursor-pointer hover:text-[#cccccc] transition-colors">Telegram</p>
              </div>
            </div>
          </div>
          <div className="bg-[#3d3d3d] h-[1px] shrink-0 w-full" data-name="Линия" />
          <div className="content-stretch flex flex-col lg:flex-row font-['Inter',sans-serif] gap-6 lg:gap-12 items-start text-[clamp(0.875rem,1vw,1.125rem)] text-neutral-100 w-full">
            <p className="basis-0 grow min-h-px min-w-px relative shrink-0">© Комбинация 2025</p>
            <p className="basis-0 grow min-h-px min-w-px relative shrink-0 cursor-pointer hover:text-[#cccccc] transition-colors">Политика конфиденциальности</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CaseDetailPage({ caseData, onBack }: CaseDetailPageProps) {
  // АГРЕССИВНАЯ прокрутка для исправления проблемы с "Золотой милей"
  useLayoutEffect(() => {
    // Немедленная прокрутка ПЕРЕД рендером
    const scrollToTop = () => {
      // Метод 1: прямая установка позиции
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Метод 2: scrollIntoView на верхний элемент
      const topElement = document.getElementById('case-detail-top');
      if (topElement) {
        topElement.scrollIntoView({ behavior: 'instant' as any, block: 'start' });
      }
      
      // Метод 3: scrollTo с instant behavior
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as any });
    };
    
    scrollToTop();
    
    // Агрессивная прокрутка несколько раз с разными интервалами
    const timeouts = [
      setTimeout(scrollToTop, 0),
      setTimeout(scrollToTop, 1),
      setTimeout(scrollToTop, 10),
      setTimeout(scrollToTop, 50),
      setTimeout(scrollToTop, 100),
      setTimeout(scrollToTop, 200),
      setTimeout(scrollToTop, 500),
      setTimeout(scrollToTop, 1000)
    ];
    
    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [caseData.id]); // Зависимость от ID кейса

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Специальная разметка для кейса "Комбо за 499"
  if (caseData.id === '4') {
    return (
      <div className="bg-black min-h-screen w-full" id="case-detail-top">
        {/* Hero Section */}
        <section className="bg-black relative w-full" id="hero-section">
          <div className="box-border flex flex-col px-8 lg:px-16 pt-32 pb-16 lg:pt-40 lg:pb-24 relative w-full max-w-[1920px] mx-auto">
            <button
              onClick={onBack}
              className="group flex items-center gap-3 mb-12 text-[#ededed] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              <span className="font-['Inter',sans-serif] text-[clamp(1.125rem,1.5vw,1.5rem)]">Назад к кейсам</span>
            </button>

            <div className="w-full">
              <p className="font-['IBM_Plex_Serif',serif] italic text-[#FF5500] text-[clamp(1.125rem,1.5vw,1.5rem)] mb-6">
                {caseData.category}
              </p>
              <h1 className="font-['Inter',sans-serif] font-bold text-[#ededed] text-[clamp(3rem,8vw,8rem)] tracking-[-0.02em] leading-[1.1] mb-12 uppercase">
                комбо за 499
              </h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="bg-black relative w-full">
          <div className="box-border flex flex-col px-8 lg:px-16 pb-24 lg:pb-32 relative w-full max-w-[1920px] mx-auto gap-12 lg:gap-16">
            
            {/* Intro text */}
            <div className="w-full lg:w-2/3">
              <p className="font-['Inter',sans-serif] text-[#ededed] text-[clamp(1.75rem,3vw,2.625rem)] leading-[1.3] tracking-[-0.01em] mb-8">
                Создали полноценную айдентику и коммуникационную стратегию для мероприятия — от визуальной концепции и фирменных элементов до digital-кампании.
              </p>
              <h2 className="font-['Inter',sans-serif] font-bold text-[#ededed] text-[clamp(1.5rem,2.5vw,2rem)] tracking-[-0.01em] leading-[1.3] mb-4">
                Задача
              </h2>
              <p className="font-['Inter',sans-serif] text-[#bbb] text-[clamp(1.125rem,1.5vw,1.5rem)] leading-[1.6] tracking-[-0.01em]">
                Разработали логотип, медиаматериалы, оформление площадки и digital-носители. Продумали контент-план, таргет и PR-механику, обеспечив устойчивый рост охватов и узнаваемости бренда.
              </p>
            </div>

            {/* Айдентика */}
            <div className="w-full lg:w-2/3">
              <h2 className="font-['Inter',sans-serif] font-bold text-[#ededed] text-[clamp(1.5rem,2.5vw,2rem)] tracking-[-0.01em] leading-[1.3] mb-6">
                Айдентика
              </h2>
              <p className="font-['Inter',sans-serif] text-[#bbb] text-[clamp(1.125rem,1.5vw,1.5rem)] leading-[1.6] tracking-[-0.01em] mb-6">
                Создали динамичный фирменный стиль с агрессивной типографикой и контрастными красно-чёрными полосами. Крупный жёлтый логотип «КОМБО за 499» стал центральным элементом всех носителей — от браслетов до digital-баннеров.
              </p>
              <p className="font-['Inter',sans-serif] text-[#bbb] text-[clamp(1.125rem,1.5vw,1.5rem)] leading-[1.6] tracking-[-0.01em]">
                Визуальная система работает в любом формате: постеры, мерч, digital-носители. Единая логика элементов создаёт мгновенную узнаваемость.
              </p>
            </div>

            {/* Изображения проекта */}
            <div className="rounded-xl lg:rounded-2xl overflow-hidden">
              <img 
                key={`case-detail-${caseData.id}-img-1`}
                src={caseData.images[1]} 
                alt="Материалы КОМБО за 499" 
                className="w-full h-auto object-cover" 
              />
            </div>

            <div className="rounded-xl lg:rounded-2xl overflow-hidden">
              <img 
                key={`case-detail-${caseData.id}-img-2`}
                src={caseData.images[2]} 
                alt="Материалы КОМБО за 499" 
                className="w-full h-auto object-cover" 
              />
            </div>

            <div className="rounded-xl lg:rounded-2xl overflow-hidden">
              <img 
                key={`case-detail-${caseData.id}-img-3`}
                src={caseData.images[3]} 
                alt="Материалы КОМБО за 499" 
                className="w-full h-auto object-cover" 
              />
            </div>

            {/* Результат */}
            <div className="w-full lg:w-2/3">
              <h2 className="font-['Inter',sans-serif] font-bold text-[#ededed] text-[clamp(1.5rem,2.5vw,2rem)] tracking-[-0.01em] leading-[1.3] mb-6">
                Результат
              </h2>
              <p className="font-['Inter',sans-serif] text-[#bbb] text-[clamp(1.125rem,1.5vw,1.5rem)] leading-[1.6] tracking-[-0.01em] mb-8">
                Мероприятие получило активный отклик: полная посадка зала, высокая вовлечённость в социальных сетях и запросы на проведение следующих событий. Визуальная идентичность работает на всех носителях — от мерча до экранов.
              </p>
            </div>

            <div className="rounded-xl lg:rounded-2xl overflow-hidden">
              <img src={caseData.images[4]} alt="Материалы КОМБО за 499" className="w-full h-auto object-cover" />
            </div>

            <div className="rounded-xl lg:rounded-2xl overflow-hidden">
              <img src={caseData.images[5]} alt="Материалы КОМБО за 499" className="w-full h-auto object-cover" />
            </div>

            <div className="rounded-xl lg:rounded-2xl overflow-hidden">
              <img src={caseData.images[6]} alt="Материалы КОМБО за 499" className="w-full h-auto object-cover" />
            </div>

            {/* Заключение */}
            <div className="w-full lg:w-2/3 py-8">
              <p className="font-['IBM_Plex_Serif',serif] italic text-[#ededed] text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.4] tracking-[-0.01em]">
                Полностью упакованное событие с единой визуальной логикой и ярким позиционированием в медиа-среде. От концепции до реализации — всё работает как система.
              </p>
            </div>

          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // Специальная разметка для кейса "Черёхин парк"
  if (caseData.id === '6') {
    return (
      <div className="bg-white min-h-screen w-full" id="case-detail-top">
        {/* Hero Section */}
        <section className="bg-white relative w-full" id="hero-section">
          <div className="box-border flex flex-col px-8 lg:px-16 pt-32 pb-16 lg:pt-40 lg:pb-24 relative w-full max-w-[1920px] mx-auto">
            <button
              onClick={onBack}
              className="group flex items-center gap-3 mb-12 text-[#0e0e0e] hover:text-black transition-colors"
            >
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              <span className="font-['Inter',sans-serif] text-[clamp(1.125rem,1.5vw,1.5rem)]">Назад к кейсам</span>
            </button>

            <div className="w-full">
              <p className="font-['IBM_Plex_Serif',serif] italic text-[#808080] text-[clamp(1.125rem,1.5vw,1.5rem)] mb-6">
                {caseData.category}
              </p>
              <h1 className="font-['Inter',sans-serif] font-bold text-[#0e0e0e] text-[clamp(3rem,8vw,8rem)] tracking-[-0.02em] leading-[1.1] mb-12 uppercase">
                ЧЕРЁХИН ПАРК
              </h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white relative w-full">
          <div className="box-border flex flex-col px-8 lg:px-16 pb-24 lg:pb-32 relative w-full max-w-[1920px] mx-auto gap-12 lg:gap-16">
            
            {/* Intro text */}
            <div className="w-full lg:w-2/3">
              <p className="font-['Inter',sans-serif] text-[#0e0e0e] text-[clamp(1.75rem,3vw,2.625rem)] leading-[1.3] tracking-[-0.01em] mb-8">
                Айдентика загородного отеля среди соснового леса. Проект основан на ощущении простоты, искренности и возвращения к себе.
              </p>
              <h2 className="font-['Inter',sans-serif] font-bold text-[#0e0e0e] text-[clamp(1.5rem,2.5vw,2rem)] tracking-[-0.01em] leading-[1.3] mb-4">
                О проекте
              </h2>
              <p className="font-['Inter',sans-serif] text-[#666] text-[clamp(1.125rem,1.5vw,1.5rem)] leading-[1.6] tracking-[-0.01em]">
                В мире, где нас окружают экраны и машины, Черёхин парк становится местом, где можно по-настоящему выдохнуть, услышать тишину и почувствовать природу.
              </p>
            </div>

            {/* Big Idea */}
            <div className="w-full lg:w-2/3">
              <h2 className="font-['Inter',sans-serif] font-bold text-[#0e0e0e] text-[clamp(1.5rem,2.5vw,2rem)] tracking-[-0.01em] leading-[1.3] mb-6">
                Big Idea — «Здесь хорошо»
              </h2>
              <p className="font-['Inter',sans-serif] text-[#666] text-[clamp(1.125rem,1.5vw,1.5rem)] leading-[1.6] tracking-[-0.01em] mb-6">
                Вся визуальная и вербальная система строится вокруг эмоционального погружения: чистые формы, естественные цвета, мягкие тексты-наблюдения вроде «Здесь хочется глубже дышать» или «Здесь можно всю ночь смотреть на звёзды».
              </p>
              <p className="font-['Inter',sans-serif] text-[#666] text-[clamp(1.125rem,1.5vw,1.5rem)] leading-[1.6] tracking-[-0.01em]">
                Это язык спокойствия и искреннего наслаждения простыми моментами.
              </p>
            </div>

            {/* Вербальная система */}
            <div className="w-full lg:w-2/3">
              <h2 className="font-['Inter',sans-serif] font-bold text-[#0e0e0e] text-[clamp(1.5rem,2.5vw,2rem)] tracking-[-0.01em] leading-[1.3] mb-6">
                Вербальная система
              </h2>
              <div className="space-y-4">
                <p className="font-['IBM_Plex_Serif',serif] italic text-[#0e0e0e] text-[clamp(1.125rem,1.5vw,1.5rem)] leading-[1.6] tracking-[-0.01em]">
                  «Здесь хочется глубже дышать»
                </p>
                <p className="font-['IBM_Plex_Serif',serif] italic text-[#0e0e0e] text-[clamp(1.125rem,1.5vw,1.5rem)] leading-[1.6] tracking-[-0.01em]">
                  «Здесь можно всю ночь смотреть на звёзды»
                </p>
                <p className="font-['IBM_Plex_Serif',serif] italic text-[#0e0e0e] text-[clamp(1.125rem,1.5vw,1.5rem)] leading-[1.6] tracking-[-0.01em]">
                  «Здесь хорошо»
                </p>
              </div>
            </div>

            {/* Изображения проекта */}
            {CASE_IMAGES.cherekhin && CASE_IMAGES.cherekhin.map((image, index) => (
              <div key={`cherekhin-image-${index}`} className="w-full">
                <img 
                  src={image} 
                  alt={`Черёхин парк визуал ${index + 1}`}
                  className="w-full h-auto rounded-2xl lg:rounded-3xl"
                />
              </div>
            ))}

            {/* Результат */}
            <div className="w-full lg:w-2/3">
              <h2 className="font-['Inter',sans-serif] font-bold text-[#0e0e0e] text-[clamp(1.5rem,2.5vw,2rem)] tracking-[-0.01em] leading-[1.3] mb-6">
                Результат
              </h2>
              <p className="font-['Inter',sans-serif] text-[#666] text-[clamp(1.125rem,1.5vw,1.5rem)] leading-[1.6] tracking-[-0.01em]">
                Создали айдентику, которая передаёт атмосферу спокойствия и единения с природой. Визуальная система работает на всех точках контакта — от фирменного стиля до digital-присутствия.
              </p>
            </div>

            {/* Заключение */}
            <div className="w-full lg:w-2/3 py-8">
              <p className="font-['IBM_Plex_Serif',serif] italic text-[#0e0e0e] text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.4] tracking-[-0.01em]">
                Место, где можно вернуться к себе и почувствовать простоту настоящего момента.
              </p>
            </div>

          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    );
  }

  // Специальная разметка для кейса "Око Гора"
  if (caseData.id === '5') {
    return (
      <div className="bg-white min-h-screen w-full" id="case-detail-top">
        {/* Hero Section */}
        <section className="bg-white relative w-full" id="hero-section">
          <div className="box-border flex flex-col px-8 lg:px-16 pt-32 pb-16 lg:pt-40 lg:pb-24 relative w-full max-w-[1920px] mx-auto">
            <button
              onClick={onBack}
              className="group flex items-center gap-3 mb-12 text-[#0e0e0e] hover:text-black transition-colors"
            >
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              <span className="font-['Inter',sans-serif] text-[clamp(1.125rem,1.5vw,1.5rem)]">Назад к кейсам</span>
            </button>

            <div className="w-full">
              <p className="font-['IBM_Plex_Serif',serif] italic text-[#808080] text-[clamp(1.125rem,1.5vw,1.5rem)] mb-6">
                {caseData.category}
              </p>
              <h1 className="font-['Inter',sans-serif] font-bold text-[#0e0e0e] text-[clamp(3rem,8vw,8rem)] tracking-[-0.02em] leading-[1.1] mb-12 uppercase">
                ОКО ГОРА
              </h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white relative w-full">
          <div className="box-border flex flex-col px-8 lg:px-16 pb-24 lg:pb-32 relative w-full max-w-[1920px] mx-auto gap-12 lg:gap-16">
            
            {/* Intro text */}
            <div className="w-full lg:w-2/3">
              <p className="font-['Inter',sans-serif] text-[#0e0e0e] text-[clamp(1.75rem,3vw,2.625rem)] leading-[1.3] tracking-[-0.01em] mb-8">
                Визуальная айдентика для школы самообороны для женщин. Сохранили существующее название и символ, создав современный стиль, который отличается от конкурентов.
              </p>
              <h2 className="font-['Inter',sans-serif] font-bold text-[#0e0e0e] text-[clamp(1.5rem,2.5vw,2rem)] tracking-[-0.01em] leading-[1.3] mb-4">
                О проекте
              </h2>
              <p className="font-['Inter',sans-serif] text-[#666] text-[clamp(1.125rem,1.5vw,1.5rem)] leading-[1.6] tracking-[-0.01em]">
                Око Гора — школа самообороны для женщин от Надежды Михайловой, телохранителя и спортсменки. Задача — создать визуальную айдентику, сохранив существующее название и символ.
              </p>
            </div>

            {/* Концепция */}
            <div className="w-full lg:w-2/3">
              <h2 className="font-['Inter',sans-serif] font-bold text-[#0e0e0e] text-[clamp(1.5rem,2.5vw,2rem)] tracking-[-0.01em] leading-[1.3] mb-6">
                Сила внутри
              </h2>
              <p className="font-['Inter',sans-serif] text-[#666] text-[clamp(1.125rem,1.5vw,1.5rem)] leading-[1.6] tracking-[-0.01em] mb-6">
                В школе понимают: д��вушки боятся тех, кто их сильнее. Это естественная реакция, которая с детства заложена в любом человеке. Именно поэтому каждой представительнице хочется чувствовать себя в безопасности.
              </p>
              <p className="font-['Inter',sans-serif] text-[#666] text-[clamp(1.125rem,1.5vw,1.5rem)] leading-[1.6] tracking-[-0.01em]">
                Решение — сделать акцент на естественность и внутреннюю силу женщин. Женщины на фото такие же как и клиентки — с виду хрупкие, но имеющие проницательный, уверенный взгляд.
              </p>
            </div>

            {/* Logo */}
            <div className="rounded-2xl lg:rounded-3xl overflow-hidden">
              <img src={caseData.images[1]} alt="Логотип Око Гора" className="w-full h-auto object-cover" />
            </div>

            {/* Антихрупкость */}
            <div className="w-full lg:w-2/3">
              <h2 className="font-['Inter',sans-serif] font-bold text-[#0e0e0e] text-[clamp(1.5rem,2.5vw,2rem)] tracking-[-0.01em] leading-[1.3] mb-6">
                Антихрупкость
              </h2>
              <p className="font-['Inter',sans-serif] text-[#666] text-[clamp(1.125rem,1.5vw,1.5rem)] leading-[1.6] tracking-[-0.01em] mb-6">
                «Антихрупкость – совсем не то, что эластичность, гибкость или неуязвимость. Гибкое либо эластичное противостоит встряске и остается прежним; антихрупкое, пройдя сквозь испытания, становится лучше прежнего» — Нассим Николас Талеб.
              </p>
              <p className="font-['Inter',sans-serif] text-[#666] text-[clamp(1.125rem,1.5vw,1.5rem)] leading-[1.6] tracking-[-0.01em]">
                Феномен антихрупкости отлично объясняет то почему девушки на самом деле сильные. Естество и среда обитания напрямую поспособствовали крепкости их духа и гибкости ума. Их сила внутри.
              </p>
            </div>

            {/* Photo */}
            <div className="rounded-2xl lg:rounded-3xl overflow-hidden">
              <img src={caseData.images[4]} alt="Фотография" className="w-full h-auto object-cover" />
            </div>

            {/* Визуальный стиль */}
            <div className="w-full lg:w-2/3">
              <h2 className="font-['Inter',sans-serif] font-bold text-[#0e0e0e] text-[clamp(1.5rem,2.5vw,2rem)] tracking-[-0.01em] leading-[1.3] mb-6">
                Визуальный стиль
              </h2>
              <p className="font-['Inter',sans-serif] text-[#666] text-[clamp(1.125rem,1.5vw,1.5rem)] leading-[1.6] tracking-[-0.01em]">
                Визуальный стиль отстраняется от конкурентов, использующих тяжелые, агрессивные цвета и воинствующий образ людей на фотографиях. Стиль современный, легкий, энергичный, в меру яркий, хорошо ассоциируется с женской самообороной.
              </p>
            </div>

            {/* Notes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="rounded-2xl lg:rounded-3xl overflow-hidden">
                <img src={caseData.images[5]} alt="Блокнот" className="w-full h-auto object-cover" />
              </div>
              <div className="rounded-2xl lg:rounded-3xl overflow-hidden">
                <img src={caseData.images[6]} alt="Блокнот 2" className="w-full h-auto object-cover" />
              </div>
            </div>

            {/* Pin */}
            <div className="rounded-2xl lg:rounded-3xl overflow-hidden">
              <img src={caseData.images[7]} alt="Значок" className="w-full h-auto object-cover" />
            </div>

            {/* Bag */}
            <div className="rounded-2xl lg:rounded-3xl overflow-hidden">
              <img src={caseData.images[8]} alt="Сумка" className="w-full h-auto object-cover" />
            </div>

            {/* Products */}
            <div className="rounded-2xl lg:rounded-3xl overflow-hidden">
              <img src={caseData.images[10]} alt="Товары" className="w-full h-auto object-cover" />
            </div>

            {/* Результат */}
            <div className="w-full lg:w-2/3">
              <h2 className="font-['Inter',sans-serif] font-bold text-[#0e0e0e] text-[clamp(1.5rem,2.5vw,2rem)] tracking-[-0.01em] leading-[1.3] mb-6">
                Результат
              </h2>
              <p className="font-['Inter',sans-serif] text-[#666] text-[clamp(1.125rem,1.5vw,1.5rem)] leading-[1.6] tracking-[-0.01em]">
                Создали современную визуальную айд��нтику, которая отражает философию школы и выделяет её на фоне конкурентов. Визуальная система работает во всех форматах — от фирменных носителей до digital-контента.
              </p>
            </div>

            {/* Social Media Posts */}
            <div className="rounded-2xl lg:rounded-3xl overflow-hidden">
              <img src={caseData.images[11]} alt="Пост в соцсетях" className="w-full h-auto object-cover" />
            </div>

            <div className="rounded-2xl lg:rounded-3xl overflow-hidden">
              <img src={caseData.images[12]} alt="Пост в соцсетях" className="w-full h-auto object-cover" />
            </div>

            <div className="rounded-2xl lg:rounded-3xl overflow-hidden">
              <img src={caseData.images[13]} alt="Видео пост" className="w-full h-auto object-cover" />
            </div>

            {/* Заключение */}
            <div className="w-full lg:w-2/3 py-8">
              <p className="font-['IBM_Plex_Serif',serif] italic text-[#0e0e0e] text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.4] tracking-[-0.01em]">
                Полноценная визуальная айдентика с философией, концепцией и реализацией на всех носителях — от фирменного стиля до digital-присутствия.
              </p>
            </div>

          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // Специальная разметка для кейса "Золотая миля"
  if (caseData.id === '3') {
    return (
      <div className="bg-black min-h-screen w-full" id="case-detail-top">
        {/* Hero Section */}
        <section className="bg-black relative w-full" id="hero-section">
          <div className="box-border flex flex-col px-8 lg:px-16 pt-32 pb-16 lg:pt-40 lg:pb-24 relative w-full max-w-[1920px] mx-auto">
            <button
              onClick={onBack}
              className="group flex items-center gap-3 mb-12 text-[#ededed] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              <span className="font-['Inter',sans-serif] text-[clamp(1.125rem,1.5vw,1.5rem)]">Назад к кейсам</span>
            </button>

            <div className="w-full">
              <p className="font-['IBM_Plex_Serif',serif] italic text-[#D4AF37] text-[clamp(1.125rem,1.5vw,1.5rem)] mb-6">
                {caseData.category}
              </p>
              <h1 className="font-['Inter',sans-serif] font-bold text-[#ededed] text-[clamp(3rem,8vw,8rem)] tracking-[-0.02em] leading-[1.1] mb-12 capitalize">
                {caseData.title.toLowerCase()}
              </h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="bg-black relative w-full">
          <div className="box-border flex flex-col px-8 lg:px-16 pb-24 lg:pb-32 relative w-full max-w-[1920px] mx-auto gap-12 lg:gap-16">
            
            {/* Intro text - левая колонка */}
            <div className="w-full lg:w-1/2">
              <p className="font-['Inter',sans-serif] text-[#ededed] text-[clamp(1.75rem,3vw,2.625rem)] leading-[1.3] tracking-[-0.01em] mb-8">
                Золотая миля — специальный проект трубного завода Икапласт для гостей и партнеров. В неформальной обстановке, в формате игры, участникам предстоит пройти 12 баров Санкт-Петербурга.
              </p>
              <h2 className="font-['Inter',sans-serif] font-bold text-[#ededed] text-[clamp(1.5rem,2.5vw,2rem)] tracking-[-0.01em] leading-[1.3] mb-4">
                Задача
              </h2>
              <p className="font-['Inter',sans-serif] text-[#bbb] text-[clamp(1.125rem,1.5vw,1.5rem)] leading-[1.6] tracking-[-0.01em]">
                Разработать концепцию и материалы игры для гостей и партнеров завода Икапласт.
              </p>
            </div>

            {/* Решение - левая колонка */}
            <div className="w-full lg:w-1/2">
              <h2 className="font-['Inter',sans-serif] font-bold text-[#ededed] text-[clamp(1.5rem,2.5vw,2rem)] tracking-[-0.01em] leading-[1.3] mb-6">
                Решение
              </h2>
              <p className="font-['Inter',sans-serif] text-[#bbb] text-[clamp(1.125rem,1.5vw,1.5rem)] leading-[1.6] tracking-[-0.01em] mb-6">
                Провели небольшое исследование баров: их особенности, интерьер, напитки. Выбрали 12 лучших баров, из которых получился маршрут игры.
              </p>
              <p className="font-['Inter',sans-serif] text-[#bbb] text-[clamp(1.125rem,1.5vw,1.5rem)] leading-[1.6] tracking-[-0.01em]">
                Проработали концепцию: получилась игра про тайное общество <span className="font-['IBM_Plex_Serif',serif] italic text-[#ededed]">Алкаббала</span>.
              </p>
            </div>

            {/* Дизайны карточек - 3 горизонтальные в ряд */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
              <div className="rounded-xl lg:rounded-2xl overflow-hidden border border-white/10">
                <img src={caseData.images[0]} alt="Карточка с узором" className="w-full h-auto object-contain" />
              </div>
              <div className="rounded-xl lg:rounded-2xl overflow-hidden border border-white/10">
                <img src={caseData.images[1]} alt="Карточки" className="w-full h-auto object-contain" />
              </div>
              <div className="rounded-xl lg:rounded-2xl overflow-hidden border border-white/10">
                <img src={caseData.images[2]} alt="Деталь" className="w-full h-auto object-contain" />
              </div>
            </div>

            {/* Дизайны концепция + карта - 2 в ряд */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="rounded-xl lg:rounded-2xl overflow-hidden border border-white/10">
                <img src={caseData.images[3]} alt="Концепция" className="w-full h-auto object-contain" />
              </div>
              <div className="rounded-xl lg:rounded-2xl overflow-hidden border border-white/10">
                <img src={caseData.images[4]} alt="Карта маршрута" className="w-full h-auto object-contain" />
              </div>
            </div>

            {/* Quote block - левая колонка */}
            <div className="w-full lg:w-1/2 py-12 lg:py-16">
              <p className="font-['IBM_Plex_Serif',serif] italic text-[#ededed] text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.4] tracking-[-0.01em] mb-8">
                «Ходя�� легенды, что есть тайное общество Алкаббалистов, и у тех есть Святой Грааль. Тот, кто выпьет из Грааля, обретёт силу, мудрость, просветление и почёт»
              </p>
              <p className="font-['Inter',sans-serif] text-[#bbb] text-[clamp(1.125rem,1.5vw,1.5rem)] leading-[1.6] tracking-[-0.01em]">
                У тайного общества есть 12 тайн. Одна тайна — один бар. Для успешного прохождения игры требуется пройти весь маршрут, выпить по одному напитку в каждом баре.
              </p>
            </div>

            {/* Дизайны карточек - сетка 2 колонки */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="rounded-xl lg:rounded-2xl overflow-hidden border border-white/10">
                <img src={caseData.images[10]} alt="Дизайн макет" className="w-full h-auto object-contain" />
              </div>
              <div className="rounded-xl lg:rounded-2xl overflow-hidden border border-white/10">
                <img src={caseData.images[11]} alt="Книжка с картой" className="w-full h-auto object-contain" />
              </div>
            </div>

            {/* Текст про карточки - левая колонка */}
            <div className="w-full lg:w-1/2">
              <p className="font-['Inter',sans-serif] text-[#bbb] text-[clamp(1.125rem,1.5vw,1.5rem)] leading-[1.6] tracking-[-0.01em] mb-6">
                В начале игры каждому участнику выдается запечатанный конверт. Внутри него карта маршрута, на которой выделены нужные здания.
              </p>
              <p className="font-['Inter',sans-serif] text-[#bbb] text-[clamp(1.125rem,1.5vw,1.5rem)] leading-[1.6] tracking-[-0.01em]">
                Для каждого бара созданы индивидуальные карточки. В карточках интересная информация о баре, ��екомендованные напитки по степени сложности (от адепта до мастера), и, конечно, тайны Алкаббалы.
              </p>
            </div>

            {/* Дизайны - 2 вертикальные высокие */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="rounded-xl lg:rounded-2xl overflow-hidden border border-white/10">
                <img src={caseData.images[3]} alt="Книжка с глазом" className="w-full h-auto object-contain" />
              </div>
              <div className="rounded-xl lg:rounded-2xl overflow-hidden border border-white/10">
                <img src={caseData.images[4]} alt="Детали" className="w-full h-auto object-contain" />
              </div>
            </div>

            {/* Награда - во всю ширину */}
            <div className="rounded-xl lg:rounded-2xl overflow-hidden border border-white/10">
              <img src={caseData.images[7]} alt="Награда" className="w-full h-auto object-contain" />
            </div>

            {/* Материалы игры - карусель */}
            <h3 className="font-['Inter',sans-serif] font-bold text-[#ededed] text-[clamp(1.5rem,2.5vw,2rem)] tracking-[-0.01em] leading-[1.3] mb-8">
              Материалы игры
            </h3>

            <div className="w-full relative pb-16">
              <style>{`
                .materials-carousel .slick-slide {
                  padding: 0 12px;
                }
                .materials-carousel .slick-list {
                  margin: 0 -12px;
                  overflow: visible;
                }
                .materials-carousel .slick-track {
                  display: flex;
                  align-items: center;
                }
                .materials-carousel .slick-arrow {
                  position: absolute;
                  top: 50%;
                  width: 48px;
                  height: 48px;
                  z-index: 10;
                  background: transparent;
                  border: none;
                  cursor: pointer;
                  display: flex !important;
                  align-items: center;
                  justify-content: center;
                  transition: all 0.3s ease;
                  color: rgba(237, 237, 237, 0.6);
                  opacity: 0;
                  padding: 0;
                  margin: 0;
                }
                .materials-carousel .slick-arrow svg {
                  display: block;
                }
                .materials-carousel:hover .slick-arrow {
                  opacity: 1;
                }
                .materials-carousel .slick-arrow:hover {
                  color: #ededed;
                  transform: scale(1.15);
                }
                .materials-carousel .slick-arrow.slick-disabled {
                  opacity: 0.2 !important;
                  cursor: not-allowed;
                }
                .materials-carousel .slick-arrow.slick-disabled:hover {
                  transform: scale(1);
                  color: rgba(237, 237, 237, 0.6);
                }
                .materials-carousel .slick-prev {
                  left: 32px;
                  transform: translateY(-50%);
                }
                .materials-carousel .slick-next {
                  right: 32px;
                  transform: translateY(-50%);
                }
                .materials-carousel .slick-dots {
                  position: absolute;
                  bottom: -40px;
                  left: 50%;
                  transform: translateX(-50%);
                  display: flex !important;
                  gap: 8px;
                  list-style: none;
                  padding: 0;
                  margin: 0;
                }
                .materials-carousel .slick-dots li {
                  width: 8px;
                  height: 8px;
                  margin: 0;
                }
                .materials-carousel .slick-dots li button {
                  width: 8px;
                  height: 8px;
                  padding: 0;
                  border: none;
                  border-radius: 50%;
                  background: rgba(237, 237, 237, 0.3);
                  cursor: pointer;
                  font-size: 0;
                  transition: all 0.3s;
                }
                .materials-carousel .slick-dots li.slick-active button {
                  background: #ededed;
                  width: 24px;
                  border-radius: 4px;
                }
              `}</style>
              <Slider
                className="materials-carousel"
                dots={true}
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                arrows={true}
                lazyLoad="ondemand"
                initialSlide={0}
                prevArrow={
                  <CustomPrevArrow />
                }
                nextArrow={
                  <CustomNextArrow />
                }
              >
                {[
                  { src: caseData.images[8], alt: "Грамота" },
                  { src: caseData.images[9], alt: "Свиток" },
                  { src: caseData.images[12], alt: "Карточка ALCABBALA" },
                  { src: caseData.images[13], alt: "Папка с карточками" },
                  { src: caseData.images[14], alt: "Обложка" },
                  { src: caseData.images[15], alt: "Карточка обложка" }
                ].map((image, index) => (
                  <div key={index} className="outline-none">
                    <div className="rounded-xl lg:rounded-2xl overflow-hidden h-[500px] lg:h-[700px] border border-white/10">
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // Обычная разметка для остальных кейсов
  return (
    <div className="bg-black w-full" id="case-detail-top">
      {/* Hero Section */}
      <section className="bg-[#0e0e0e] relative w-full" id="hero-section">
        <div className="box-border flex flex-col px-8 lg:px-16 pt-32 pb-16 lg:pt-40 lg:pb-24 relative w-full max-w-[1920px] mx-auto">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#ededed] hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span className="font-['Inter',sans-serif] text-[clamp(1.125rem,1.5vw,1.5rem)]">Назад к кейсам</span>
          </button>

          <div className="w-full max-w-6xl">
            {/* Category & Year */}
            <div className="flex items-center gap-4 mb-6">
              <p className="font-['IBM_Plex_Serif',serif] italic text-[#999] text-[clamp(1.125rem,1.5vw,1.5rem)]">
                {caseData.category}
              </p>
              <span className="text-[#666]">•</span>
              <p className="font-['Inter',sans-serif] text-[#999] text-[clamp(1.125rem,1.5vw,1.5rem)]">
                {caseData.year}
              </p>
            </div>

            {/* Title */}
            <h1 className="font-['Inter',sans-serif] font-bold text-[#ededed] text-[clamp(3rem,8vw,8rem)] tracking-[-0.02em] leading-[1.1] mb-8 capitalize">
              {caseData.title.toLowerCase()}
            </h1>

            {/* Description */}
            <p className="font-['Inter',sans-serif] text-[#ededed] text-[clamp(1.125rem,1.5vw,1.5rem)] leading-[1.6] tracking-[-0.01em] max-w-4xl mb-8">
              {caseData.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {caseData.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full font-['Inter',sans-serif] text-[clamp(1rem,1.25vw,1.125rem)] text-[#ededed]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Images without spacing */}
      <section className="bg-white relative w-full">
        {caseData.images.map((image, index) => (
          <div key={index} className="w-full">
            <img
              src={image}
              alt={`${caseData.title} ${index + 1}`}
              className="w-full h-auto block"
            />
          </div>
        ))}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Функция для получения данных кейса по ID
export function getCaseDetailById(id: string): CaseDetail {
  // Кейс Вторичкин
  if (id === '1') {
    return {
      id: '1',
      title: 'ВТОРИЧКИН',
      category: 'UX/UI design',
      description: 'Платформа для поиска вторичной недвижимости в Москве',
      tags: ['Web Design', 'UI/UX', 'Development'],
      imageUrl: COVERS.vtorichkin,
      year: '2025',
      images: CASE_IMAGES.vtorichkin
    };
  }
  
  // Кейс Getlogist
  if (id === '2') {
    return {
      id: '2',
      title: 'GETLOGIST',
      category: 'UX/UI design',
      description: 'Рейтинг логистических компаний в России',
      tags: ['Web Design', 'UI/UX', 'Development'],
      imageUrl: COVERS.getlogist,
      year: '2025',
      images: CASE_IMAGES.getlogist
    };
  }

  // Кейс Золотая миля
  if (id === '3') {
    return {
      id: '3',
      title: 'ЗОЛОТАЯ МИЛЯ',
      category: 'Брендинг / Игровая механика',
      description: 'Специальный проект для трубного завода Икапласт',
      tags: ['Branding', 'Game Design', 'Print'],
      imageUrl: COVERS.goldmile,
      year: '2025',
      images: CASE_IMAGES.goldmile
    };
  }

  // Кейс Комбо за 499
  if (id === '4') {
    return {
      id: '4',
      title: 'КОМБО ЗА 499',
      category: 'Брендинг / Продвижение',
      description: 'Создали полноценную айдентику и коммуникационную стратегию для мероприятия — от визуальной концепции и фирменных элементов до digital-кампании. Разработали логотип, медиаматериалы, оформление площадки и digital-носители. Продумали контент-план, таргет и PR-механику, обеспечив устойчивый рост охватов и узнаваемости бренда. Результат — полностью упакованное событие с единой визуальной логикой и ярким позиционированием в медиа-среде.',
      tags: ['Branding', 'Social Media', 'Event'],
      imageUrl: COVERS.kombo499,
      year: '2024',
      images: CASE_IMAGES.kombo499
    };
  }

  // Кейс Око Гора
  if (id === '5') {
    return {
      id: '5',
      title: 'ОКО ГОРА',
      category: 'Экспресс-дизайн',
      description: 'Визуальная айдентика для школы самообороны. Сохранили существующее название и символ, создав современный стиль, который отличается от конкурентов.',
      tags: ['Branding', 'Identity', 'Print'],
      imageUrl: COVERS.okogora,
      year: '2024',
      images: CASE_IMAGES.okogora
    };
  }

  // Кейс Черёхин парк
  if (id === '6') {
    return {
      id: '6',
      title: 'ЧЕРЁХИН ПАРК',
      category: 'Брендинг / Айдентика',
      description: 'Айдентика загородного отеля среди соснового леса. Проект основан на ощущении простоты, искренности и возвращения к себе.',
      tags: ['Branding', 'Identity', 'Visual System'],
      imageUrl: COVERS.cherekhin,
      year: '2024',
      images: CASE_IMAGES.cherekhin
    };
  }

  // Кейс ПромАрт
  if (id === '9') {
    return {
      id: '9',
      title: 'ПРОМАРТ',
      category: 'Веб-разработка / Дизайн',
      description: 'Дизайн и разработка сайта для компании по металлообработке, проектированию и монтажу "под ключ".',
      tags: ['Web Design', 'Development', 'Corporate'],
      imageUrl: COVERS.promart,
      year: '2024',
      images: [COVERS.promart]
    };
  }

  // По умолчанию возвращаем первый кейс
  return {
    id: '1',
    title: 'ВТОРИЧКИН',
    category: 'UX/UI design',
    description: 'Платформа для поиска вторичной недвижимости в Москве',
    tags: ['Web Design', 'UI/UX', 'Development'],
    imageUrl: COVERS.vtorichkin,
    year: '2025',
    images: CASE_IMAGES.vtorichkin
  };
}
