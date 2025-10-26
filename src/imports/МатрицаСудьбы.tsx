import imgImage752 from "figma:asset/8d2dac98b2f864ba55867b22f8c1468c1d6bdcf1.png";
import imgImage from "figma:asset/4e1debde6e5498426e58c7ddb52b001baa19389c.png";

export default function Component() {
  return (
    <div className="content-stretch flex flex-col gap-[118px] items-center relative size-full" data-name="матрица судьбы">
      <div className="aspect-[2521/4096] relative shrink-0 w-full" data-name="image 752">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage752} />
      </div>
      <div className="h-[6484.3px] relative rounded-[10.497px] shrink-0 w-[943.517px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10.497px] size-full" src={imgImage} />
      </div>
    </div>
  );
}