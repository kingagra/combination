import imgEgPhotoJpg from "figma:asset/b037e7eed6eef7992486bffefd90173d2266f227.png";
import imgEgLogoJpg from "figma:asset/ad8e602cd9f07d2c236f31c1e848646093d49d10.png";
import imgLogoAnimationMp4 from "figma:asset/893c555c65251bf56817c4076188d3975d58631b.png";
import imgLogoWinkMp4 from "figma:asset/4918607a391332ecbd0ec3454bd690dc73592d74.png";
import imgPhoto211536X760Jpg from "figma:asset/dba056b9d4f25efd1c5b423cc709caabd77f66e4.png";
import imgNote768X768Jpg from "figma:asset/2c682edfef968ce5b96f05a1f3bddce6a41066a4.png";
import imgNote2768X768Jpg from "figma:asset/882dbce91a351900242f44078e0677024b090bae.png";
import imgPin1536X898Jpg from "figma:asset/b676e820ff9699e4ee3ee6af70caf64d7602b231.png";
import imgBag1539X2048Jpg from "figma:asset/2616ba39082f4cc2855efaa8acf7cd43597183e6.png";
import imgEgIcons1536X698Jpg from "figma:asset/e30c73a9cfb5175eee13237f218317307f3bea14.png";
import imgEgD182D0BeD0B2D0B0D180D18B1536X898Jpg from "figma:asset/129b0a1ec716e91603b3c03ba667f8774b7f4d77.png";
import imgEgPost11536X760Jpg from "figma:asset/9f2ab87b3c544bd413350148385f89a9dcd881a9.png";
import imgEgPost321536X760Jpg from "figma:asset/c84c410e38345627b708b9e430e4e8158d10f5c4.png";
import imgPost2Mp4 from "figma:asset/d6828a08cd665efe62e9616c7a06619850e17591.png";

function Container() {
  return (
    <div className="box-border content-stretch flex flex-col items-center pb-[0.59px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['HelveticaNeueCyr:Roman',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#999999] text-[16px] text-center w-full">
        <p className="leading-[25.6px]">Экспресс-дизайн</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[106px] px-0 relative self-stretch shrink-0 w-[1520px]" data-name="Container">
      <Container />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute box-border content-stretch flex items-start justify-center left-[190px] max-w-[1540px] pb-0 pt-[10px] px-0 right-[190px] top-[87px]" data-name="Section">
      <Container1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['HelveticaNeueCyr:Roman',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[76px] text-center tracking-[-2px] w-full">
        <p className="leading-[91.2px]">Око Гора</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[1520px]" data-name="Container">
      <Heading1 />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute box-border content-stretch flex items-start justify-center left-[190px] max-w-[1540px] pb-[10px] pt-0 px-0 right-[190px] top-[232.59px]" data-name="Section">
      <Container2 />
    </div>
  );
}

function EgPhotoJpg() {
  return (
    <div className="h-[506.33px] max-w-[1520px] relative shrink-0 w-[1520px]" data-name="eg_photo.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgEgPhotoJpg} />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <EgPhotoJpg />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[1520px]" data-name="Container">
      <Container3 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute box-border content-stretch flex items-start justify-center left-[190px] max-w-[1540px] px-0 py-[10px] right-[190px] top-[470.78px]" data-name="Section">
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['HelveticaNeueCyr:Italic',_sans-serif] italic justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[36px] tracking-[-1px] w-full">
        <p className="leading-[39.6px]">(01)</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[371.16px]" data-name="Container">
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="box-border content-stretch flex items-start justify-center min-h-px mr-[-5.684e_-14px] pb-[297.97px] pt-[10px] px-0 relative self-stretch shrink-0 w-[391.16px]" data-name="Container">
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[0.585px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['HelveticaNeueCyr:Roman',_sans-serif] justify-center leading-[50.4px] not-italic relative shrink-0 text-[#1a1a1a] text-[36px] tracking-[-1px] w-full">
        <p className="mb-0">Око Гора — школа самообороны для женщин от Надежды</p>
        <p>Михайловой, телохранителя и спортсменки.</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[0.585px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['HelveticaNeueCyr:Roman',_sans-serif] justify-center leading-[50.4px] not-italic relative shrink-0 text-[#1a1a1a] text-[36px] w-full">
        <p className="mb-0">Задача — создать визуальную айдентику для школы</p>
        <p>самообороны, сохранив существующее название и символ.</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[62.195px] items-start relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[1128.83px]" data-name="Container">
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="box-border content-stretch flex items-start justify-center min-h-px mr-[-5.684e_-14px] pb-[10px] pt-[9.195px] px-0 relative self-stretch shrink-0 w-[1148.83px]" data-name="Container">
      <Container11 />
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute content-stretch flex items-start left-[190px] max-w-[1540px] right-[190px] top-[1101.11px]" data-name="Section">
      <Container7 />
      <Container12 />
    </div>
  );
}

function EgLogoJpg() {
  return (
    <div className="h-[888.3px] max-w-[1520px] relative shrink-0 w-[1520px]" data-name="eg_logo.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgEgLogoJpg} />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <EgLogoJpg />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[1520px]" data-name="Container">
      <Container13 />
    </div>
  );
}

function Section4() {
  return (
    <div className="absolute box-border content-stretch flex items-start justify-center left-[190px] max-w-[1540px] px-0 py-[10px] right-[190px] top-[1548.67px]" data-name="Section">
      <Container14 />
    </div>
  );
}

function LogoAnimationMp4() {
  return (
    <div className="h-[750px] max-w-[750px] relative shrink-0 w-full" data-name="logo_animation.mp4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLogoAnimationMp4} />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[750px]" data-name="Container">
      <LogoAnimationMp4 />
    </div>
  );
}

function Container16() {
  return (
    <div className="basis-0 box-border content-stretch flex grow items-start justify-center min-h-px min-w-px px-0 py-[10px] relative self-stretch shrink-0" data-name="Container">
      <Container15 />
    </div>
  );
}

function LogoWinkMp4() {
  return (
    <div className="h-[750px] max-w-[750px] relative shrink-0 w-full" data-name="logo_wink.mp4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLogoWinkMp4} />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[750px]" data-name="Container">
      <LogoWinkMp4 />
    </div>
  );
}

function Container18() {
  return (
    <div className="basis-0 box-border content-stretch flex grow items-start justify-center min-h-px min-w-px px-0 py-[10px] relative self-stretch shrink-0" data-name="Container">
      <Container17 />
    </div>
  );
}

function Section5() {
  return (
    <div className="absolute content-stretch flex items-start left-[190px] max-w-[1540px] right-[190px] top-[2456.97px]" data-name="Section">
      <Container16 />
      <Container18 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['HelveticaNeueCyr:Italic',_sans-serif] italic justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[36px] tracking-[-1px] w-full">
        <p className="leading-[39.6px]">(02)</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[371.16px]" data-name="Container">
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="box-border content-stretch flex items-start justify-center min-h-px pb-[559.5px] pt-[10px] px-0 relative self-stretch shrink-0 w-[391.16px]" data-name="Container">
      <Container20 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['HelveticaNeueCyr:Roman',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[76px] tracking-[-2px] w-full">
        <p className="leading-[91.2px]">Сила внутри</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col h-[111.19px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
    </div>
  );
}

function Margin() {
  return (
    <div className="box-border content-stretch flex flex-col h-[131.19px] items-start justify-center pb-[20px] pt-0 px-0 relative shrink-0 w-full" data-name="Margin">
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['HelveticaNeueCyr:Roman',_sans-serif] justify-center leading-[38.4px] not-italic relative shrink-0 text-[#1a1a1a] text-[24px] w-full">
        <p className="mb-0">В школе понимают: девушки боятся тех, кто их сильнее. Это естественная реакция,</p>
        <p className="mb-0">которая с детства заложена в любом человеке. Именно поэтому каждой</p>
        <p className="mb-0">представительнице хочется чувствовать себя в безопасности. Состояние</p>
        <p>безопасности, поддержка и защита — естественная потребность.</p>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute content-stretch flex items-start left-[456.65px] top-[153.06px]" data-name="Component 5">
      <a className="[white-space-collapse:collapse] flex flex-col font-['HelveticaNeueCyr:Roman',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white" href="https://www.high-endrolex.com/">
        <p className="cursor-pointer leading-[38.4px] whitespace-pre">partner-sponsored Glasses</p>
      </a>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[230.34px] relative shrink-0 w-full" data-name="Container">
      <div className="absolute flex flex-col font-['HelveticaNeueCyr:Roman',_sans-serif] h-[192px] justify-center leading-[38.4px] left-0 not-italic text-[#1a1a1a] text-[24px] top-[95.78px] translate-y-[-50%] w-[974.42px]">
        <p className="mb-0">Решение — сделать акцент на естественность и внутреннюю силу женщин. Женщины</p>
        <p className="mb-0">на фото и видео такие же как и клиентки компании — с виду хрупкие и беззащитные,</p>
        <p className="mb-0">но имеющие проницательный, уверенный взгляд. Мы объединяем образы</p>
        <p className="mb-0">женственности и внутренней силы, транслируя этим большую идею и показывая</p>
        <p>{`женщинам их самих.Просмотрите наши `}</p>
      </div>
      <Component5 />
      <div className="absolute flex flex-col font-['HelveticaNeueCyr:Roman',_sans-serif] h-[39px] justify-center leading-[0] left-[747.37px] not-italic text-[#1a1a1a] text-[24px] top-[172.56px] translate-y-[-50%] w-[174.605px]">
        <p className="leading-[38.4px]">, с множеством</p>
      </div>
      <div className="absolute flex flex-col font-['HelveticaNeueCyr:Roman',_sans-serif] h-[39px] justify-center leading-[0] left-0 not-italic text-[#1a1a1a] text-[24px] top-[210.95px] translate-y-[-50%] w-[819.75px]">
        <p className="leading-[38.4px]">вариантов на любой вкус и бюджет, которые можно купить в Интернете.</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[42px] items-start relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col h-[467.91px] items-start relative shrink-0 w-full" data-name="Container">
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[5.684e_-14px] items-start justify-center pb-[9.99px] pt-0 px-[10px] relative size-full">
          <Margin />
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex items-start justify-center min-h-px relative self-stretch shrink-0 w-[999.95px]" data-name="Container">
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex items-start justify-center min-h-px relative self-stretch shrink-0 w-[138.59px]" data-name="Container">
      <div className="basis-0 grow h-full min-h-px min-w-px shrink-0" data-name="Rectangle" />
    </div>
  );
}

function Section6() {
  return (
    <div className="absolute content-stretch flex items-start left-[190px] max-w-[1540px] right-[190px] top-[3359.97px]" data-name="Section">
      <Container21 />
      <Container28 />
      <Container29 />
    </div>
  );
}

function Photo211536X760Jpg() {
  return (
    <div className="h-[752.09px] max-w-[1520px] relative shrink-0 w-[1520px]" data-name="photo-2-1-1536x760.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgPhoto211536X760Jpg} />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Photo211536X760Jpg />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[1520px]" data-name="Container">
      <Container30 />
    </div>
  );
}

function Section7() {
  return (
    <div className="absolute box-border content-stretch flex items-start justify-center left-[190px] max-w-[1540px] px-0 py-[10px] right-[190px] top-[4005.06px]" data-name="Section">
      <Container31 />
    </div>
  );
}

function Container32() {
  return <div className="min-h-px self-stretch shrink-0 w-[391.16px]" data-name="Container" />;
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['HelveticaNeueCyr:Roman',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[76px] tracking-[-2px] w-full">
        <p className="leading-[91.2px]">Антихрупкость</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col h-[111.19px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading3 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="box-border content-stretch flex flex-col h-[131.19px] items-start justify-center mb-[-0.615px] pb-[20px] pt-0 px-0 relative shrink-0 w-full" data-name="Margin">
      <Container33 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['HelveticaNeueCyr:Roman',_sans-serif] justify-center leading-[38.4px] not-italic relative shrink-0 text-[#1a1a1a] text-[24px] w-full">
        <p className="mb-0">«Антихрупкость – совсем не то, что эластичность, гибкость или неуязвимость. Гибкое</p>
        <p className="mb-0">либо эластичное противостоит встряске и остается прежним; антихрупкое, пройдя</p>
        <p>сквозь испытания, становится лучше прежнего» — Нассим Николас Талеб.</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['HelveticaNeueCyr:Roman',_sans-serif] justify-center leading-[38.4px] not-italic relative shrink-0 text-[#1a1a1a] text-[24px] w-full">
        <p className="mb-0">Феномен антихрупкости отлично объясняет то почему девушки на самом деле</p>
        <p className="mb-0">сильные. Естество и среда обитания напрямую поспособствовали крепкости их духа</p>
        <p>{`гибкости ума. Они могут быть очень сильными — их сила внутри. `}</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[41.4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Container37() {
  return (
    <div className="box-border content-stretch flex flex-col h-[314.945px] items-start mb-[-0.615px] relative shrink-0 w-full" data-name="Container">
      <Container36 />
    </div>
  );
}

function Container38() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center pb-[10.625px] pt-0 px-[10px] relative size-full">
          <Margin1 />
          <Container37 />
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex items-start justify-center min-h-px relative self-stretch shrink-0 w-[999.95px]" data-name="Container">
      <Container38 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex items-start justify-center min-h-px relative self-stretch shrink-0 w-[138.59px]" data-name="Container">
      <div className="basis-0 grow h-full min-h-px min-w-px shrink-0" data-name="Rectangle" />
    </div>
  );
}

function Section8() {
  return (
    <div className="absolute content-stretch flex items-start left-[190px] max-w-[1540px] right-[190px] top-[4910.16px]" data-name="Section">
      <Container32 />
      <Container39 />
      <Container40 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['HelveticaNeueCyr:Italic',_sans-serif] italic justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[36px] tracking-[-1px] w-full">
        <p className="leading-[39.6px]">(03)</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[371.16px]" data-name="Container">
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="box-border content-stretch flex items-start justify-center min-h-px pb-[185.77px] pt-[10px] px-0 relative self-stretch shrink-0 w-[391.16px]" data-name="Container">
      <Container42 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['HelveticaNeueCyr:Roman',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[76px] tracking-[-2px] w-full">
        <p className="leading-[91.2px]">Визуальный стиль</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col h-[111.19px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading4 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="box-border content-stretch flex flex-col h-[131.19px] items-start justify-center mb-[-0.61px] pb-[20px] pt-0 px-0 relative shrink-0 w-full" data-name="Margin">
      <Container44 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['HelveticaNeueCyr:Roman',_sans-serif] justify-center leading-[38.4px] not-italic relative shrink-0 text-[#1a1a1a] text-[24px] w-full">
        <p className="mb-0">Визуальный стиль остраняется от конкурентов, использующих тяжелые, агрессивные</p>
        <p className="mb-0">цвета и воинствующий образ людей на фотографиях. Стиль современный, легкий,</p>
        <p>энергичный, вмеру яркий, хорошо ассоциируется с женской самообороной.</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="box-border content-stretch flex flex-col h-[157.78px] items-start mb-[-0.61px] relative shrink-0 w-full" data-name="Container">
      <Container45 />
    </div>
  );
}

function Container47() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center pb-[10.61px] pt-0 px-[10px] relative size-full">
          <Margin2 />
          <Container46 />
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex items-start justify-center min-h-px relative self-stretch shrink-0 w-[999.95px]" data-name="Container">
      <Container47 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex items-start justify-center min-h-px relative self-stretch shrink-0 w-[138.59px]" data-name="Container">
      <div className="basis-0 grow h-full min-h-px min-w-px shrink-0" data-name="Rectangle" />
    </div>
  );
}

function Section9() {
  return (
    <div className="absolute content-stretch flex items-start left-[190px] max-w-[1540px] right-[190px] top-[5498.69px]" data-name="Section">
      <Container43 />
      <Container48 />
      <Container49 />
    </div>
  );
}

function Note768X768Jpg() {
  return (
    <div className="max-w-[750px] relative shrink-0 size-[750px]" data-name="note-768x768.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgNote768X768Jpg} />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Note768X768Jpg />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[750px]" data-name="Container">
      <Container50 />
    </div>
  );
}

function Container52() {
  return (
    <div className="basis-0 box-border content-stretch flex grow items-start justify-center min-h-px min-w-px px-0 py-[10px] relative self-stretch shrink-0" data-name="Container">
      <Container51 />
    </div>
  );
}

function Note2768X768Jpg() {
  return (
    <div className="max-w-[750px] relative shrink-0 size-[750px]" data-name="note2-768x768.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgNote2768X768Jpg} />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Note2768X768Jpg />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[750px]" data-name="Container">
      <Container53 />
    </div>
  );
}

function Container55() {
  return (
    <div className="basis-0 box-border content-stretch flex grow items-start justify-center min-h-px min-w-px px-0 py-[10px] relative self-stretch shrink-0" data-name="Container">
      <Container54 />
    </div>
  );
}

function Section10() {
  return (
    <div className="absolute content-stretch flex items-start left-[190px] max-w-[1540px] right-[190px] top-[5833.05px]" data-name="Section">
      <Container52 />
      <Container55 />
    </div>
  );
}

function Pin1536X898Jpg() {
  return (
    <div className="h-[888.3px] max-w-[1520px] relative shrink-0 w-[1520px]" data-name="pin-1536x898.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.04%] left-0 max-w-none top-[-0.02%] w-full" src={imgPin1536X898Jpg} />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Pin1536X898Jpg />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col h-[888.3px] items-start relative shrink-0 w-full" data-name="Container">
      <Container56 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="box-border content-stretch flex flex-col h-[908.3px] items-start justify-center mb-[-0.01px] pb-[20px] pt-0 px-0 relative shrink-0 w-full" data-name="Margin">
      <Container57 />
    </div>
  );
}

function Bag1539X2048Jpg() {
  return (
    <div className="h-[2022.45px] max-w-[1520px] relative shrink-0 w-[1520px]" data-name="bag-1539x2048.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.01%] left-0 max-w-none top-[-0.01%] w-full" src={imgBag1539X2048Jpg} />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Bag1539X2048Jpg />
    </div>
  );
}

function Container59() {
  return (
    <div className="box-border content-stretch flex flex-col h-[2022.45px] items-start mb-[-0.01px] relative shrink-0 w-full" data-name="Container">
      <Container58 />
    </div>
  );
}

function Container60() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center pb-[10.01px] pt-[10px] px-[10px] relative size-full">
          <Margin3 />
          <Container59 />
        </div>
      </div>
    </div>
  );
}

function Section11() {
  return (
    <div className="absolute content-stretch flex items-start justify-center left-[190px] max-w-[1540px] right-[190px] top-[6603.05px]" data-name="Section">
      <Container60 />
    </div>
  );
}

function EgIcons1536X698Jpg() {
  return (
    <div className="h-[690.91px] max-w-[1520px] relative shrink-0 w-[1520px]" data-name="eg_icons-1536x698.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[99.97%] left-0 max-w-none top-[0.01%] w-full" src={imgEgIcons1536X698Jpg} />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <EgIcons1536X698Jpg />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col h-[690.91px] items-start relative shrink-0 w-full" data-name="Container">
      <Container61 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="box-border content-stretch flex flex-col h-[710.91px] items-start justify-center mb-[-0.01px] pb-[20px] pt-0 px-0 relative shrink-0 w-full" data-name="Margin">
      <Container62 />
    </div>
  );
}

function EgD182D0BeD0B2D0B0D180D18B1536X898Jpg() {
  return (
    <div className="h-[888.3px] max-w-[1520px] relative shrink-0 w-[1520px]" data-name="eg_%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D1%8B-1536x898.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.04%] left-0 max-w-none top-[-0.02%] w-full" src={imgEgD182D0BeD0B2D0B0D180D18B1536X898Jpg} />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <EgD182D0BeD0B2D0B0D180D18B1536X898Jpg />
    </div>
  );
}

function Container64() {
  return (
    <div className="box-border content-stretch flex flex-col h-[888.3px] items-start mb-[-0.01px] relative shrink-0 w-full" data-name="Container">
      <Container63 />
    </div>
  );
}

function Container65() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center pb-[10.01px] pt-[10px] px-[10px] relative size-full">
          <Margin4 />
          <Container64 />
        </div>
      </div>
    </div>
  );
}

function Section12() {
  return (
    <div className="absolute content-stretch flex items-start justify-center left-[190px] max-w-[1540px] right-[190px] top-[9583.8px]" data-name="Section">
      <Container65 />
    </div>
  );
}

function EgPost11536X760Jpg() {
  return (
    <div className="h-[752.09px] max-w-[1520px] relative shrink-0 w-[1520px]" data-name="eg_post-1-1536x760.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgEgPost11536X760Jpg} />
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <EgPost11536X760Jpg />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[1520px]" data-name="Container">
      <Container66 />
    </div>
  );
}

function Section13() {
  return (
    <div className="absolute box-border content-stretch flex items-start justify-center left-[190px] max-w-[1540px] px-0 py-[10px] right-[190px] top-[11203px]" data-name="Section">
      <Container67 />
    </div>
  );
}

function EgPost321536X760Jpg() {
  return (
    <div className="h-[752.09px] max-w-[1520px] relative shrink-0 w-[1520px]" data-name="eg_post-3_2-1536x760.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgEgPost321536X760Jpg} />
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <EgPost321536X760Jpg />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[1520px]" data-name="Container">
      <Container68 />
    </div>
  );
}

function Section14() {
  return (
    <div className="absolute box-border content-stretch flex items-start justify-center left-[190px] max-w-[1540px] px-0 py-[10px] right-[190px] top-[11975.1px]" data-name="Section">
      <Container69 />
    </div>
  );
}

function Post2Mp4() {
  return (
    <div className="h-[752.09px] max-w-[1520px] relative shrink-0 w-full" data-name="post_2.mp4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgPost2Mp4} />
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="box-border content-stretch flex flex-col h-[855px] items-start overflow-clip pb-[855px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Post2Mp4 />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[1520px]" data-name="Container">
      <Container70 />
    </div>
  );
}

function Section15() {
  return (
    <div className="absolute box-border content-stretch flex items-start justify-center left-[190px] max-w-[1540px] px-0 py-[10px] right-[190px] top-[12747.2px]" data-name="Section">
      <Container71 />
    </div>
  );
}

function Container72() {
  return (
    <div className="box-border content-stretch flex items-start justify-center px-0 py-[15px] relative shrink-0 w-full" data-name="Container">
      <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Horizontal Divider">
        <div aria-hidden="true" className="absolute border-[#dbdbdb] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[1520px]" data-name="Container">
      <Container72 />
    </div>
  );
}

function Section16() {
  return (
    <div className="absolute box-border content-stretch flex items-start justify-center left-[190px] max-w-[1540px] px-0 py-[10px] right-[190px] top-[13722.2px]" data-name="Section">
      <Container73 />
    </div>
  );
}

function Container74() {
  return (
    <div className="box-border content-stretch flex items-start justify-center px-0 py-[6px] relative shrink-0 w-full" data-name="Container">
      <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Horizontal Divider">
        <div aria-hidden="true" className="absolute border-[#dbdbdb] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[1520px]" data-name="Container">
      <Container74 />
    </div>
  );
}

function Section17() {
  return (
    <div className="absolute box-border content-stretch flex items-start justify-center left-[190px] max-w-[1540px] px-0 py-[10px] right-[190px] top-[14733.8px]" data-name="Section">
      <Container75 />
    </div>
  );
}

export default function Okogora() {
  return (
    <div className="bg-white relative size-full" data-name="okogora">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Section12 />
      <Section13 />
      <Section14 />
      <Section15 />
      <Section16 />
      <Section17 />
    </div>
  );
}