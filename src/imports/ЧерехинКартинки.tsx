import imgImage744 from "figma:asset/a132e2a634cfcbb80967f3e2ebe852ef884af10c.png";
import imgImage745 from "figma:asset/d1c3a87dd8451ed107af03ea72293fa4f7784e12.png";
import imgImage748 from "figma:asset/e31f874ee7d0da2766c7a19feeb6bae1c3b6e27f.png";
import imgImage747 from "figma:asset/b41a53dc70d21ae3cf6e253c7da502a447965145.png";
import imgImage746 from "figma:asset/783c17090eeafd988562c8d245105837b0863e72.png";

export default function Component() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full" data-name="черехин картинки">
      <div className="h-[676px] relative shrink-0 w-[1200px]" data-name="image 744">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage744} />
      </div>
      <div className="h-[672.879px] relative shrink-0 w-[1200px]" data-name="image 745">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage745} />
      </div>
      <div className="h-[672px] relative shrink-0 w-[742px]" data-name="image 748">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-61.46%] max-w-none top-0 w-[161.46%]" src={imgImage748} />
        </div>
      </div>
      <div className="h-[672px] relative shrink-0 w-[792px]" data-name="image 747">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage747} />
      </div>
      <div className="h-[674px] relative shrink-0 w-[1202px]" data-name="image 746">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage746} />
      </div>
    </div>
  );
}