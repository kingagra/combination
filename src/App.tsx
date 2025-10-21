import svgPaths from "./imports/svg-6thd6kauch";
import { useState, useEffect, useLayoutEffect } from "react";
import { ArrowRight } from "lucide-react";
import { CasesPage } from "./components/CasesPage";
import { Navigation } from "./components/Navigation";
import NationalProjectsLogo from './imports/NationalProjectsLogo';
// КОМПОНЕНТЫ-ОБЛОЖКИ для кейсов (figma:asset работает только в компонентах!)
import { 
  VtorichkinCover,
  GetlogistCover,
  NexteventCover,
  OkogoraCover,
  CherekhinCover,
  TectumCover,
  GoldmileCover
} from './components/covers';

// Unified Typography System:
// Display XL: text-[clamp(4rem,8vw,10rem)] - Hero titles
// Display L: text-[clamp(3rem,6vw,5.375rem)] - Section big statements (86px)
// Display M: text-[clamp(2rem,4vw,3.375rem)] - Section headers (54px)
// Heading L: text-[clamp(1.75rem,3vw,2.625rem)] - Card titles (42px)
// Heading M: text-[clamp(1.5rem,2.5vw,2rem)] - Subheadings (32px)
// Body L: text-[clamp(1.125rem,1.5vw,1.5rem)] - Large body (24px)
// Body M: text-[clamp(1rem,1.25vw,1.125rem)] - Medium body (18px)
// Body S: text-[1rem] - Small body/tags (16px)

function HeadText() {
  return (
    <div className="relative w-full h-full flex items-end" data-name="Head Text">
      <svg 
        className="w-full h-auto" 
        viewBox="0 0 1500 750" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMax meet"
      >
        {/* "КОМ" - повёрнут на 10° */}
        <g transform="translate(-20, 256) rotate(10)">
          <text
            x="0"
            y="0"
            fill="#ededed"
            fontFamily="Inter, sans-serif"
            fontSize="320"
            fontWeight="400"
            letterSpacing="-19.2"
            textAnchor="start"
          >
            КОМ
          </text>
        </g>
        
        {/* "БИНАЦИЯ" - повёрнут на -9° */}
        <g transform="translate(40, 700) rotate(-9)">
          <text
            x="0"
            y="0"
            fill="#ededed"
            fontFamily="Inter, sans-serif"
            fontSize="320"
            fontWeight="400"
            letterSpacing="-19.2"
            textAnchor="start"
          >
            БИНАЦИЯ
          </text>
        </g>
      </svg>
    </div>
  );
}

function Head() {
  return (
    <div id="hero" className="bg-black min-h-screen relative shrink-0 w-full flex items-end border-b border-white/10" data-name="Head">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col lg:flex-row gap-8 lg:gap-12 items-end pb-16 pt-8 px-8 lg:px-16 relative w-full max-w-[1920px] min-h-screen">
          
          {/* Left: Rotated Title */}
          <div className="flex-1 flex flex-col items-center lg:items-start justify-end min-w-0 w-full lg:w-auto min-h-[500px] lg:min-h-0">
            <HeadText />
          </div>

          {/* Right: Description */}
          <div className="flex-1 flex flex-col items-start justify-end min-w-0 max-w-2xl w-full lg:w-auto pb-8">
            <div className="w-full space-y-4">
              <p className="font-['Inter',sans-serif] text-[#ededed] text-[clamp(1.125rem,1.5vw,1.5rem)] leading-[1.3] tracking-[-0.02em]">
                Мы создаём цифровые решения, которые соединяют стратегию, дизайн и технологии.
              </p>
              <p className="font-['IBM_Plex_Serif',serif] italic text-[#ededed] text-[clamp(1.125rem,1.5vw,1.5rem)] leading-[1.2] tracking-[-0.01em] text-right">
                Помогаем бизнесу расти, запускаться и быть современным.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ title, description, isLast, isOpen, onHover }: { title: string; description: string; isLast?: boolean; isOpen?: boolean; onHover?: () => void }) {
  return (
    <div onMouseEnter={onHover} className={`content-stretch flex flex-col gap-2 cursor-pointer group py-4 ${!isLast ? 'border-b border-black/10' : ''}`}>
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-['Inter',sans-serif] font-bold text-[#0e0e0e] text-[clamp(2rem,4vw,4.5rem)] tracking-[-0.02em] leading-none">
          {title}
        </h3>
        <ArrowRight 
          className={`text-[#808080] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
          size={32}
          strokeWidth={2}
        />
      </div>
      <p className={`font-['Inter',sans-serif] text-[#0e0e0e] text-[clamp(1rem,1.25vw,1.25rem)] leading-[1.4] tracking-[-0.01em] overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
        {description}
      </p>
    </div>
  );
}

function Services() {
  const [openService, setOpenService] = useState<string>("Разработка");
  
  const services = [
    {
      title: "Сайты",
      description: "Делаем лендинги, многостраничники и интернет-магазины. Создаём интерфейсы, которые вдохновляют и приносят результат."
    },
    {
      title: "Разработка",
      description: "Веб-приложения, TGMiniApp, мобильные решения и чат-боты с ИИ. Интегрируем базы данных и API, чтобы всё работало как единая система."
    },
    {
      title: "Дизайн",
      description: "Айдентика, брендинг, фирстиль, UI/UX. Визуальная логика, где каждая деталь усиливает смысл."
    },
    {
      title: "Маркетинг",
      description: "Реклама, SEO и контент-продакшн. Помогаем брендам находить клиентов и строить доверие."
    }
  ];

  return (
    <div id="services" className="bg-white relative shrink-0 w-full" data-name="Services">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col lg:flex-row gap-12 lg:gap-0 items-start px-8 lg:px-16 py-24 lg:py-32 relative w-full max-w-[1920px]">
          
          {/* Left: Title */}
          <div className="w-full lg:w-1/2 lg:pr-8">
            <h2 className="font-['IBM_Plex_Serif',serif] italic text-[#0e0e0e] text-[clamp(2.5rem,4.5vw,4.5rem)] tracking-[-0.02em] leading-[1.2]">
              Услуги
            </h2>
          </div>
          
          {/* Right: Service cards */}
          <div className="flex flex-col w-full lg:w-1/2 flex-1">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                isLast={index === services.length - 1}
                isOpen={openService === service.title}
                onHover={() => setOpenService(service.title)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Ideology() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-center justify-center px-8 lg:px-16 py-24 lg:py-32 relative w-full">
          <p className="font-['Inter',sans-serif] font-bold leading-none text-center text-[#0e0e0e] text-[clamp(2.5rem,5.5vw,4.5rem)] tracking-[-0.02em] max-w-5xl">
            Мы объединяем <span className="font-['IBM_Plex_Serif',serif] italic">стратегию, дизайн и технологии</span>, чтобы создавать продукты, которые решают задачи бизнеса.
          </p>
        </div>
      </div>
    </div>
  );
}

function CaseCard({ title, tags, description, CoverComponent, large = false, externalLink, onClick }: { 
  title: string; 
  tags: string; 
  description: string; 
  CoverComponent: React.ComponentType<{ className?: string; alt?: string }>;
  large?: boolean;
  externalLink?: string;
  onClick?: (e: React.MouseEvent) => void;
}) {
  const handleClick = (e: React.MouseEvent) => {
    console.log('CaseCard clicked:', title);
    
    // Если есть внешняя ссылка, открываем её
    if (externalLink) {
      window.open(externalLink, '_blank');
      return;
    }
    
    // Иначе вызываем переданный onClick
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <div 
      className={`${large ? 'col-span-1 lg:col-span-2' : ''} content-stretch flex flex-col gap-4 items-start relative shrink-0 group cursor-pointer transition-transform duration-300 hover:-translate-y-1`}
      onClick={handleClick}
    >
      <div className={`${large ? 'h-[400px] lg:h-[860px]' : 'h-[400px] lg:h-[500px]'} relative rounded-2xl lg:rounded-3xl shrink-0 w-full overflow-hidden`}>
        <CoverComponent 
          alt={title} 
          className="absolute inset-0 max-w-none object-center object-cover pointer-events-none rounded-2xl lg:rounded-3xl size-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>
      <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 text-black w-full mt-4">
        <p className="font-['IBM_Plex_Serif',serif] italic text-[clamp(0.875rem,1vw,1.125rem)] leading-[1.4] text-[#666]">
          {tags}
        </p>
        <p className="font-['Inter',sans-serif] font-bold text-[clamp(1.125rem,1.5vw,1.5rem)] tracking-[-0.01em] leading-[1.2] group-hover:text-[#FF5500] transition-colors">
          {description}
        </p>
      </div>
    </div>
  );
}

function Cases({ onViewAllClick, onCaseClick }: { onViewAllClick?: () => void; onCaseClick?: (caseId: string) => void }) {
  const cases = [
    {
      id: "1",
      slug: "vtorichkin",
      title: "Вторичкин",
      tags: "UX/UI design",
      description: "Платформа для поиска вторичной недвижимости",
      CoverComponent: VtorichkinCover,
      large: true
    },
    {
      id: "2",
      slug: "getlogist",
      title: "Getlogist",
      tags: "UX/UI design",
      description: "Рейтинг логистических компаний в России",
      CoverComponent: GetlogistCover,
      large: false
    },
    {
      id: "7",
      slug: "nextevent",
      title: "NextEvent",
      tags: "Веб-разработка",
      description: "Платформа для организации мероприятий",
      CoverComponent: NexteventCover,
      large: false,
      externalLink: "https://www.next-event.ru/"
    }
  ];

  return (
    <div id="cases" className="bg-white box-border content-stretch flex flex-col gap-16 lg:gap-20 items-start px-8 lg:px-16 py-24 lg:py-32 relative shrink-0 w-full" data-name="Cases">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full space-y-4">
        <h2 className="font-['IBM_Plex_Serif',serif] italic text-[#0e0e0e] text-[clamp(2.5rem,4.5vw,4.5rem)] tracking-[-0.02em] leading-[1.2]">
          Кейсы
        </h2>
        <p className="font-['Inter',sans-serif] font-bold text-[#0e0e0e] text-[clamp(1.5rem,2.5vw,2.5rem)] tracking-[-0.01em] leading-[1.3]">
          Проекты, которые вдохновляют и работают.
        </p>
        <p className="font-['IBM_Plex_Serif',serif] italic text-[#0e0e0e] text-[clamp(1.125rem,1.5vw,1.5rem)] tracking-[-0.01em] leading-[1.3]">
          Каждый кейс — комбинация смысла, визуала и технологий.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
        {cases.map((caseItem) => (
          <CaseCard 
            key={caseItem.slug}
            {...caseItem} 
            onClick={(e) => {
              console.log('Clicked case:', caseItem.title, 'ID:', caseItem.id);
              if (onCaseClick) {
                onCaseClick(caseItem.id);
              }
            }} 
          />
        ))}
      </div>

      {/* Кнопка "Смотреть все кейсы" */}
      <div className="w-full flex justify-center">
        <button 
          onClick={onViewAllClick}
          className="bg-[#0e0e0e] px-8 py-6 rounded-2xl cursor-pointer overflow-hidden group hover:bg-[#FF5500] transition-colors duration-300"
        >
          <p className="font-['Inter',sans-serif] font-bold text-[clamp(1rem,1.25vw,1.25rem)] text-center text-white tracking-[-0.02em]">
            Смотреть все кейсы
          </p>
        </button>
      </div>
    </div>
  );
}

function SpecialCases({ onCaseClick }: { onCaseClick?: (caseId: string) => void }) {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-16 lg:gap-20 items-start pb-24 lg:pb-32 pt-0 px-8 lg:px-16 relative w-full">
          
          {/* Заголовок секции */}
          <div className="content-stretch flex flex-col gap-6 items-start relative shrink-0 max-w-4xl">
            <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full">
              <p className="font-['IBM_Plex_Serif',serif] italic text-[#0e0e0e] text-[clamp(2rem,4vw,4.5rem)] tracking-[-0.02em] leading-[1.2]">
                более 500
              </p>
              <h2 className="font-['Inter',sans-serif] font-bold text-[#191919] text-[clamp(2.5rem,4.5vw,4.5rem)] tracking-[-0.02em] leading-none">
                Баннеров
              </h2>
            </div>
            <p className="font-['Inter',sans-serif] text-[#0e0e0e] text-[clamp(1.125rem,1.5vw,1.5rem)] tracking-[-0.02em] leading-[1.2]">
              для крипто компании Tectum SoftNote
            </p>
          </div>

          {/* Баннеры Tectum */}
          <div 
            className="w-full aspect-[1392/832] relative rounded-2xl lg:rounded-3xl overflow-hidden group cursor-pointer bg-gray-100"
            onClick={() => {
              console.log('Tectum баннеры clicked');
              window.open('https://tectum.io/tectum-blog/', '_blank');
            }}
          >
            <TectumCover 
              alt="Более 500 баннеров для Tectum SoftNote" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />
          </div>

          {/* Национальные проекты и 12 баров */}
          <div className="content-stretch flex flex-col lg:flex-row gap-8 lg:gap-12 items-start relative shrink-0 w-full">
            
            {/* Черёхин - Национальные проекты */}
            <div 
              className="content-stretch flex flex-col gap-4 items-start relative shrink-0 flex-1 group cursor-pointer"
              onClick={() => {
                console.log('Черёхин парк clicked - ID: 6');
                if (onCaseClick) {
                  onCaseClick('6');
                }
              }}
            >
              <div className="h-[400px] lg:h-[692px] relative rounded-2xl lg:rounded-3xl shrink-0 w-full overflow-hidden bg-gray-100">
                <CherekhinCover 
                  alt="Черёхин парк - Национальные проекты России" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Логотип Национальные проекты России */}
                <div className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8 w-32 lg:w-48 h-auto z-10 pointer-events-none">
                  <NationalProjectsLogo />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full">
                <h3 className="font-['Inter',sans-serif] font-bold text-[#191919] text-[clamp(1.5rem,2.5vw,2.5rem)] tracking-[-0.01em] leading-[1.2]">
                  Брендинг для проекта<br />
                  <span>из списка: </span>
                  <span className="font-['IBM_Plex_Serif',serif] italic">Национальные<br />проекты России</span>
                </h3>
              </div>
            </div>

            {/* Золотая миля - 12 Баров */}
            <div 
              className="content-stretch flex flex-col gap-4 items-start justify-center relative shrink-0 flex-1 group cursor-pointer"
              onClick={() => {
                console.log('12 баров (Золотая миля) clicked - ID: 3');
                if (onCaseClick) {
                  onCaseClick('3');
                }
              }}
            >
              <div className="h-[300px] lg:h-[442px] aspect-square relative rounded-full shrink-0 mx-auto overflow-hidden bg-gray-100">
                <GoldmileCover 
                  alt="12 Баров - Золотая миля" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full">
                <h3 className="font-['Inter',sans-serif] font-bold text-[#191919] text-[clamp(1.5rem,2.5vw,2.5rem)] tracking-[-0.01em] leading-[1.2]">
                  <span className="font-['IBM_Plex_Serif',serif] italic">12 </span>
                  <span className="font-['Inter',sans-serif] font-bold">Баров</span>
                </h3>
                <p className="font-['Inter',sans-serif] text-[#1a1a1a] text-[clamp(1rem,1.25vw,1.25rem)] leading-[1.4]">
                  Мы обошли и опросили чтобы создать дизайн игры «Золотая миля».
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function Transparency() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-center px-8 lg:px-16 py-24 lg:py-32 relative w-full">
          <div className="content-stretch flex flex-col lg:flex-row gap-4 lg:gap-4 items-start relative shrink-0 w-full max-w-6xl">
            <p className="font-['Inter',sans-serif] font-bold leading-none text-[#0e0e0e] text-[clamp(2.5rem,5.5vw,4.5rem)] tracking-[-0.02em]">
              Выстраиваем работу прозрачно — <span className="font-['IBM_Plex_Serif',serif] italic">открываем Figma, подключаемся к чатам</span>
            </p>
            <div className="content-stretch flex gap-4 items-start relative shrink-0 mt-6">
              <div className="h-14 lg:h-[70px] w-14 lg:w-[70px] relative shrink-0">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CTAButton({ onClick }: { onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-[#0e0e0e] px-8 py-6 relative rounded-2xl cursor-pointer w-full overflow-hidden group"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-[#FF5500]" />
      </div>
      <p className="font-['Inter',sans-serif] font-bold text-[clamp(1rem,1.25vw,1.25rem)] text-center text-white tracking-[-0.02em] relative z-10">
        Обсудить проект
      </p>
    </button>
  );
}

function CTASection() {
  const handleClick = () => {
    window.open('https://t.me/yourusername', '_blank');
  };

  return (
    <div className="bg-white box-border content-stretch flex flex-col lg:flex-row gap-8 lg:gap-0 items-center px-8 lg:px-16 py-16 lg:py-24 relative shrink-0 w-full max-w-[1920px] mx-auto">
      <div className="w-full lg:w-1/2 lg:pr-8">
        <p className="font-['Inter',sans-serif] font-bold leading-none text-[#0e0e0e] text-[clamp(2.5rem,5.5vw,4.5rem)] tracking-[-0.02em]">
          Сделаем это!
        </p>
      </div>
      <div className="w-full lg:w-1/2 flex-1">
        <CTAButton onClick={handleClick} />
      </div>
    </div>
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
    <footer id="footer" className="bg-black relative shrink-0 w-full">
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
    </footer>
  );
}







export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'cases' | 'case-detail'>('home');
  const [selectedCaseId, setSelectedCaseId] = useState<string>('1');
  const [caseDetailKey, setCaseDetailKey] = useState<number>(0);

  // АГРЕССИВНАЯ прокрутка - исправление проблемы с "Золотой милей"
  useLayoutEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' } as any);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    
    scrollToTop();
  }, [currentPage, selectedCaseId]);

  // Дополнительная агрессивная прокрутка ПОСЛЕ отрисовки
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' } as any);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    
    scrollToTop();
    
    // Множественные прокрутки с разными задержками
    const timeouts = [
      setTimeout(scrollToTop, 0),
      setTimeout(scrollToTop, 10),
      setTimeout(scrollToTop, 50),
      setTimeout(scrollToTop, 100),
      setTimeout(scrollToTop, 200),
      setTimeout(scrollToTop, 300),
      setTimeout(scrollToTop, 500),
      setTimeout(scrollToTop, 1000)
    ];
    
    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [currentPage, selectedCaseId]);

  const handleViewCase = (caseId: string) => {
    console.log('Opening case detail:', caseId);
    
    // НЕМЕДЛЕННАЯ прокрутка ПЕРЕД изменением стейта
    window.scrollTo(0, 0);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' } as any);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Обновление стейта + инкремент ключа для форсированного ремаунта
    setSelectedCaseId(caseId);
    setCaseDetailKey(prev => prev + 1);
    setCurrentPage('case-detail');
  };

  const handleBackFromDetail = () => {
    setCurrentPage('cases');
  };

  const handleViewAllCases = () => {
    console.log('handleViewAllCases called, setting page to cases');
    setCurrentPage('cases');
  };

  if (currentPage === 'case-detail') {
    const { CaseDetailPage, getCaseDetailById } = require('./components/CaseDetailPage');
    const caseData = getCaseDetailById(selectedCaseId);
    
    return (
      <div className="bg-black content-stretch flex flex-col items-center relative size-full overflow-x-hidden">
        <Navigation onCasesClick={() => setCurrentPage('home')} isDark={true} />
        <CaseDetailPage key={`case-${selectedCaseId}-${caseDetailKey}`} caseData={caseData} onBack={handleBackFromDetail} />
      </div>
    );
  }

  if (currentPage === 'cases') {
    return (
      <div className="bg-white content-stretch flex flex-col items-center relative size-full overflow-x-hidden">
        <Navigation onCasesClick={() => setCurrentPage('home')} isDark={false} />
        <CasesPage key="cases-page" onCaseClick={handleViewCase} />
      </div>
    );
  }

  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full overflow-x-hidden" data-name="kombinatios site">
      <Navigation onCasesClick={() => setCurrentPage('home')} isDark={false} />
      <Head />
      <Services />
      <Ideology />
      <Cases onViewAllClick={handleViewAllCases} onCaseClick={handleViewCase} />
      <SpecialCases onCaseClick={handleViewCase} />
      <Transparency />
      <CTASection />
      <Footer />
    </div>
  );
}
