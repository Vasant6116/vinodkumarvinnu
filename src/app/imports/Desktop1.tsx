import svgPaths from "./svg-ksjfkk7d83";
import imgBackgroundImage from "figma:asset/6ff46c753e7bacb1a137d82de3a255e7e9109a74.png";
import imgBackgroundImage1 from "figma:asset/fd546fbcddd0977973bc7ee2360536f463c8f27e.png";
import imgBackgroundImage2 from "figma:asset/f62fb214da9b15130e12bec1a5ef73e68efebfe0.png";
import imgBackgroundImage3 from "figma:asset/ab614c69ba0c4c9b115c37d2ff73e5b2e3fd50d7.png";
import imgDesktop2 from "figma:asset/270081007b4a7eb4fe90f9584f2667d0a24e90f4.png";

function ArrowCircleRightUndefinedGlyphUndefined() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Arrow Circle Right / undefined / Glyph: undefined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Arrow Circle Right / undefined / Glyph: undefined">
          <path d={svgPaths.p24950000} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Explore() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[calc(50%-0.12px)] top-[177px] translate-x-[-50%]" data-name="Explore">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0.8] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">View Album</p>
      <ArrowCircleRightUndefinedGlyphUndefined />
    </div>
  );
}

function BackgroundImage() {
  return (
    <div className="absolute bottom-0 left-0 right-[0.08%] top-[32.61%]" data-name="Background Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgBackgroundImage} />
        <div className="absolute bg-[rgba(0,0,0,0.01)] inset-0" />
      </div>
      <Explore />
      <p className="absolute font-['Jaro:Regular',sans-serif] leading-[0.8] left-[calc(50%-60.12px)] text-[40px] text-nowrap text-white top-[-51px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 6" }}>
        MAAYA
      </p>
    </div>
  );
}

function Card() {
  return (
    <div className="basis-0 grow h-[230px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Card">
      <div className="h-[230px] overflow-clip relative rounded-[inherit] w-full">
        <BackgroundImage />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#3b3b3b] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function CardContainer() {
  return (
    <div className="absolute box-border content-stretch flex gap-[24px] items-center left-0 px-[35px] py-0 top-[871px] w-[1440px]" data-name="Card Container">
      {[...Array(4).keys()].map((_, i) => (
        <Card key={i} />
      ))}
    </div>
  );
}

function BackgroundImage1() {
  return (
    <div className="absolute bottom-0 left-0 right-[0.08%] top-0" data-name="Background Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgBackgroundImage} />
        <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgBackgroundImage1} />
      </div>
      <p className="absolute bottom-[106px] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] left-[26px] not-italic text-[16px] text-white translate-y-[100%] w-[263px]">Explore the new music single that embodies emotion and rhythm, resonating with every beat.</p>
      <p className="absolute bottom-[156px] font-['Jaro:Regular',sans-serif] leading-[0.8] left-[26px] text-[40px] text-nowrap text-white translate-y-[100%] whitespace-pre" style={{ fontVariationSettings: "'opsz' 6" }}>
        MAAYA
      </p>
    </div>
  );
}

function Card1() {
  return (
    <div className="h-[479px] relative rounded-[8px] shrink-0 w-[324.5px]" data-name="Card">
      <div className="h-[479px] overflow-clip relative rounded-[inherit] w-[324.5px]">
        <BackgroundImage1 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#3b3b3b] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function BackgroundImage2() {
  return (
    <div className="absolute bottom-0 left-0 right-[0.08%] top-0" data-name="Background Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgBackgroundImage} />
        <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgBackgroundImage2} />
      </div>
      <p className="absolute bottom-[106px] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] left-[26px] not-italic text-[16px] text-white translate-y-[100%] w-[263px]">Explore the new music single that embodies emotion and rhythm, resonating with every beat.</p>
      <p className="absolute bottom-[156px] font-['Jaro:Regular',sans-serif] leading-[0.8] left-[26px] text-[40px] text-nowrap text-white translate-y-[100%] whitespace-pre" style={{ fontVariationSettings: "'opsz' 6" }}>
        MAAYA
      </p>
    </div>
  );
}

function Card2() {
  return (
    <div className="basis-0 grow h-[479px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Card">
      <div className="h-[479px] overflow-clip relative rounded-[inherit] w-full">
        <BackgroundImage2 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#3b3b3b] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function BackgroundImage3() {
  return (
    <div className="absolute bottom-0 left-0 right-[0.08%] top-0" data-name="Background Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgBackgroundImage} />
        <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgBackgroundImage3} />
      </div>
      <p className="absolute bottom-[106px] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] left-[26px] not-italic text-[16px] text-white translate-y-[100%] w-[263px]">Explore the new music single that embodies emotion and rhythm, resonating with every beat.</p>
      <p className="absolute bottom-[156px] font-['Jaro:Regular',sans-serif] leading-[0.8] left-[26px] text-[40px] text-nowrap text-white translate-y-[100%] whitespace-pre" style={{ fontVariationSettings: "'opsz' 6" }}>
        MAAYA
      </p>
    </div>
  );
}

function Card3() {
  return (
    <div className="h-[479px] relative rounded-[8px] shrink-0 w-[324.5px]" data-name="Card">
      <div className="h-[479px] overflow-clip relative rounded-[inherit] w-[324.5px]">
        <BackgroundImage3 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#3b3b3b] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute box-border content-stretch flex gap-[23px] items-center left-0 px-[35px] py-0 top-[1125px] w-[1440px]" data-name="section">
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function BackgroundImage4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.4)] bottom-0 left-0 right-[0.08%] text-white top-0" data-name="Background Image">
      <p className="absolute bottom-[105.5px] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] left-[26px] not-italic text-[16px] translate-y-[100%] w-[263px]">Explore the new music single that embodies emotion and rhythm, resonating with every beat.</p>
      <p className="absolute bottom-[155.5px] font-['Jaro:Regular',sans-serif] leading-[0.8] left-[26px] text-[40px] text-nowrap translate-y-[100%] whitespace-pre" style={{ fontVariationSettings: "'opsz' 6" }}>
        MAAYA
      </p>
    </div>
  );
}

function Card4() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <BackgroundImage4 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#3b3b3b] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function BackgroundImage5() {
  return (
    <div className="absolute bg-white bottom-0 left-0 right-[0.08%] text-black top-0" data-name="Background Image">
      <p className="absolute bottom-[105.5px] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] left-[26px] not-italic text-[16px] translate-y-[100%] w-[263px]">Explore the new music single that embodies emotion and rhythm, resonating with every beat.</p>
      <p className="absolute bottom-[155.5px] font-['Jaro:Regular',sans-serif] leading-[0.8] left-[26px] text-[40px] text-nowrap translate-y-[100%] whitespace-pre" style={{ fontVariationSettings: "'opsz' 6" }}>
        MAAYA
      </p>
    </div>
  );
}

function Card5() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <BackgroundImage5 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#3b3b3b] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex gap-[23px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Card4 />
      <Card5 />
    </div>
  );
}

function BackgroundImage6() {
  return (
    <div className="absolute bottom-0 left-0 right-[0.08%] top-0" data-name="Background Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgBackgroundImage} />
        <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgBackgroundImage1} />
      </div>
      <p className="absolute bottom-[105.5px] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] left-[26px] not-italic text-[16px] text-white translate-y-[100%] w-[263px]">Explore the new music single that embodies emotion and rhythm, resonating with every beat.</p>
      <p className="absolute bottom-[155.5px] font-['Jaro:Regular',sans-serif] leading-[0.8] left-[26px] text-[40px] text-nowrap text-white translate-y-[100%] whitespace-pre" style={{ fontVariationSettings: "'opsz' 6" }}>
        MAAYA
      </p>
    </div>
  );
}

function Card6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <BackgroundImage6 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#3b3b3b] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[23px] grow h-full items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame2 />
      <Card6 />
    </div>
  );
}

function BackgroundImage7() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[8px] shrink-0 text-black" data-name="Background Image">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.5] left-[calc(50%+0.25px)] not-italic text-[16px] text-center top-[calc(50%-13px)] translate-x-[-50%] w-[263px]">Explore the new music single that embodies emotion and rhythm, resonating with every beat.</p>
      <p className="absolute font-['Jaro:Regular',sans-serif] leading-[0.8] left-[calc(50%-60.25px)] text-[40px] text-nowrap top-[calc(50%-59px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 6" }}>
        MAAYA
      </p>
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute box-border content-stretch flex gap-[23px] h-[582px] items-start left-0 px-[35px] py-0 top-[1628px] w-[1440px]" data-name="section">
      <Frame1 />
      <BackgroundImage7 />
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute h-[172.608px] left-[calc(50%-0.02px)] top-[calc(50%-96.54px)] translate-x-[-50%] translate-y-[-50%] w-[806.054px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 807 173">
        <g id="Logo">
          <path d={svgPaths.p145da980} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p34274800} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p23fcc000} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p24ecd900} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p2c78d80} fill="var(--fill-0, white)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Desktop1() {
  return (
    <div className="absolute h-[1024px] left-0 top-0 w-[1440px]" data-name="Desktop - 2">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full left-[-3.35%] max-w-none top-0 w-[106.7%]" src={imgDesktop2} />
        </div>
      </div>
      <CardContainer />
      <Section />
      <Section1 />
      <Logo />
    </div>
  );
}

function Frame() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[57px] items-center justify-center overflow-clip px-[49px] py-[12px] relative shrink-0">
      <div className="absolute flex h-[173.558px] items-center justify-center left-[calc(50%-2.81px)] top-[calc(50%+102.28px)] translate-x-[-50%] translate-y-[-50%] w-[194.84px]" style={{ "--transform-inner-width": "161.84375", "--transform-inner-height": "127.046875" } as React.CSSProperties}>
        <div className="flex-none rotate-[340.619deg]">
          <div className="h-[127.048px] relative w-[161.851px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 162 128">
              <path d={svgPaths.p300f6a00} fill="var(--fill-0, white)" id="Rectangle 2" stroke="var(--stroke-0, white)" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Jaro:Regular',sans-serif] leading-[0.8] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'opsz' 6" }}>
        CONTACT US
      </p>
      <div className="absolute h-[57px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[168px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 168 57">
          <path d={svgPaths.pa3d7500} id="Rectangle 1" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-between left-0 p-[35px] top-0 w-[1440px]" data-name="Header">
      <Frame />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-[#000407] relative size-full" data-name="Desktop - 1">
      <Desktop1 />
      <Header />
    </div>
  );
}