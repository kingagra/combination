import imgHOy1Ox from "figma:asset/9e8d2e594c3fce66a08f58e5a15a4f237d26223a.png";
import imgImage565 from "figma:asset/692d922c97a000be18949ff4e81ce631629df06e.png";
import imgImage564 from "figma:asset/49d9e72b3b289608369f80bb62325f51e1683c82.png";

function HOy1Ox() {
  return (
    <div className="absolute contents inset-0" data-name="hOY1Ox">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgHOy1Ox} />
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute left-0 mix-blend-luminosity overflow-clip size-[1002.72px] top-[-83px]" data-name="_Слой_1">
      <HOy1Ox />
    </div>
  );
}

export default function Frame1321318794() {
  return (
    <div className="bg-black relative size-full">
      <Component1 />
      <div className="absolute h-[393.843px] left-[88.46px] top-[137.08px] w-[397.497px]" data-name="image 565">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage565} />
      </div>
      <div className="absolute left-[521.7px] size-[389.833px] top-[139.08px]" data-name="image 564">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage564} />
      </div>
    </div>
  );
}