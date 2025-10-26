import imgFrame1321318864 from "figma:asset/3f9554394c261f3848852f2a72b8433154f79f02.png";
import imgFrame1321318844 from "figma:asset/304f3222ce5e728b15aa33abccbc6c83ce783875.png";
import imgFrame1321318811 from "figma:asset/02231c05c683d96b31d888c4fd770dc05a82f6a1.png";
import imgFrame1321318845 from "figma:asset/4f2408fbab918687b579d7c065051c619c4ff9c9.png";

export default function Component() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative size-full" data-name="вторичкин кейс картинки">
      <div className="h-[1200px] relative shrink-0 w-[1920px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame1321318864} />
      </div>
      <div className="h-[1416px] relative shrink-0 w-[1920px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame1321318844} />
      </div>
      <div className="h-[1704px] relative shrink-0 w-[1920px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame1321318811} />
      </div>
      <div className="h-[1215px] relative shrink-0 w-[1920px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame1321318845} />
      </div>
    </div>
  );
}