import { useLayoutEffect, type MouseEvent as ReactMouseEvent } from 'react';
import svgPaths from "../imports/svg-6thd6kauch";
import { CASE_STUDIES, type CaseMeta } from "../utils/cases";

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

function CaseCard({ caseStudy, onClick }: { caseStudy: CaseMeta; onClick?: (event: ReactMouseEvent<HTMLAnchorElement>) => void }) {
  const handleClick = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    console.log('CaseCard clicked on CasesPage:', caseStudy.title);

    if (caseStudy.externalLink) {
      return;
    }

    if (onClick) {
      event.preventDefault();
      onClick(event);
    }
  };

  const { CoverComponent } = caseStudy;
  const href = caseStudy.externalLink ?? `/cases/${caseStudy.slug}`;
  const target = caseStudy.externalLink ? '_blank' : undefined;
  const rel = caseStudy.externalLink ? 'noopener noreferrer' : undefined;

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="group relative cursor-pointer transition-transform duration-500 hover:-translate-y-2 select-none no-underline"
      onClick={handleClick}
    >
      <div className="h-[400px] lg:h-[500px] relative rounded-2xl lg:rounded-3xl shrink-0 w-full overflow-hidden bg-gray-100">
        <CoverComponent
          alt={caseStudy.title}
          className="absolute inset-0 max-w-none object-center object-cover pointer-events-none rounded-2xl lg:rounded-3xl size-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>
      <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 text-black w-full mt-4">
        <p className="font-['IBM_Plex_Serif',serif] italic text-[clamp(0.875rem,1vw,1.125rem)] leading-[1.4] text-[#666]">
          {caseStudy.category}
        </p>
        <p className="font-['Inter',sans-serif] font-bold text-[clamp(1.125rem,1.5vw,1.5rem)] tracking-[-0.01em] leading-[1.2] group-hover:text-[#FF5500] transition-colors">
          {caseStudy.description}
        </p>
      </div>
    </a>
  );
}



export function CasesPage({ onCaseClick }: { onCaseClick?: (caseId: string) => void }) {

  // useLayoutEffect для прокрутки ДО отрисовки
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Дополнительная прокрутка с небольшой задержкой для надёжности
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 0);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="bg-white w-full">
      {/* Hero Section */}
      <section className="bg-white relative w-full">
        <div className="box-border flex flex-col px-8 lg:px-16 pt-32 pb-16 lg:pt-40 lg:pb-24 relative w-full max-w-[1920px] mx-auto">
          <div className="w-full max-w-6xl">
            <h1 className="font-['Inter',sans-serif] font-bold text-[#0e0e0e] text-[clamp(4rem,8vw,10rem)] tracking-[-0.02em] leading-[1.1] mb-6">
              Кейсы
            </h1>
            <p className="font-['Inter',sans-serif] text-[#0e0e0e] text-[clamp(1.125rem,1.5vw,1.5rem)] leading-[1.3] tracking-[-0.02em] max-w-3xl">
              Мы создаём <span className="font-['IBM_Plex_Serif',serif] italic">решения, которые работают</span> — от концепции до запуска и масштабирования.
            </p>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="bg-white relative w-full">
        <div className="box-border flex flex-col items-center px-8 lg:px-16 pb-24 lg:pb-32 relative w-full max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
            {CASE_STUDIES.map((caseStudy) => (
              <CaseCard
                key={caseStudy.slug}
                caseStudy={caseStudy}
                onClick={(_event) => {
                  console.log('Clicked case:', caseStudy.title, 'ID:', caseStudy.id);
                  if (onCaseClick) {
                    onCaseClick(caseStudy.id);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
