import svgPaths from "./svg-d1ed2wtxhn";
import imgImageWithFallback from "./e0fd4211f28831f5564ae5eaa59c3c2b2558410d.png";

function ImageWithFallback() {
  return (
    <div className="relative rounded-[10px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 size-[144px]" data-name="ImageWithFallback">
      <div aria-hidden className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none rounded-[10px]">
        <div className="absolute bg-[rgba(255,255,255,0)] bg-clip-padding border-0 border-[transparent] border-solid inset-0 rounded-[10px]" />
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover rounded-[10px] size-full" src={imgImageWithFallback} />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col h-[17px] items-start opacity-70 relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-white tracking-[1.1px] uppercase whitespace-nowrap">Telugu Film</p>
    </div>
  );
}

function ParagraphMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <Paragraph />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col h-[31px] items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Inter:Black',sans-serif] font-black leading-[30.25px] not-italic relative shrink-0 text-[22px] text-white whitespace-nowrap">O Saathiya</p>
    </div>
  );
}

function Heading2Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative size-full">
        <Heading />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#a1a1a1] text-[0px] whitespace-nowrap">
          <span className="leading-[19.5px] text-[12px]">Javed Ali • Rahul Sipligunj • Yazin Nizar • Karthik • Pranathi</span>
          <span className="leading-[19.5px] text-[#737373] text-[12px]">{` • 2023`}</span>
          <span className="leading-[19.5px] text-[#737373] text-[12px]">{` • 5 songs`}</span>
        </p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-full relative shrink-0 w-[440px]" data-name="Container">
      <div className="flex flex-col justify-end size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-end pt-[8px] relative size-full">
          <ParagraphMargin />
          <Heading2Margin />
          <Paragraph1 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-gradient-to-b from-black h-[188px] relative shrink-0 to-[#0d0d0d] w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-start pb-[20px] pt-[24px] px-[24px] relative size-full">
        <ImageWithFallback />
        <Container1 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="col-1 h-[16px] justify-self-stretch relative row-1 self-center shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#737373] text-[12px] text-center whitespace-nowrap">#</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="col-2 h-[16.5px] justify-self-stretch relative row-1 self-center shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">Title</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="col-3 h-[16px] justify-self-stretch relative row-1 self-center shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">⏱</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[___28px_891.62px_9.38px] grid-rows-[_16.50px] pb-[4px] pt-[16px] px-[24px] relative size-full">
        <Text />
        <Text1 />
        <Text2 />
      </div>
    </div>
  );
}

function Container3() {
  return <div className="bg-[rgba(255,255,255,0.08)] h-px relative shrink-0 w-full" data-name="Container" />;
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="col-1 h-[20px] justify-self-stretch relative row-1 self-center shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#888] text-[14px] text-center whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[19.25px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.25px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">O Saathiya</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">Javed Ali</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="col-2 h-[37.25px] justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">4:48</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text4 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-[953px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[12px] grid grid-cols-[___28px_850.38px_26.62px] grid-rows-[_37.25px] px-[12px] py-[10px] relative size-full">
        <Text3 />
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="col-1 h-[20px] justify-self-stretch relative row-1 self-center shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#e16f05] text-[14px] text-center whitespace-nowrap">▶</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[19.25px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.25px] not-italic relative shrink-0 text-[#e16f05] text-[14px] whitespace-nowrap">Vellipoye</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">Rahul Sipligunj</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="col-2 h-[37.25px] justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">3:54</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text6 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative rounded-[10px] shrink-0 w-[953px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[12px] grid grid-cols-[___28px_850.38px_26.62px] grid-rows-[_37.25px] px-[12px] py-[10px] relative size-full">
        <Text5 />
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="col-1 h-[20px] justify-self-stretch relative row-1 self-center shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#888] text-[14px] text-center whitespace-nowrap">3</p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[19.25px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.25px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Nela Meedha Lene</p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">Yazin Nizar</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="col-2 h-[37.25px] justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="bg-[#2a2a2a] relative rounded-[4px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[#555] text-[10px] whitespace-nowrap">soon</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">3:54</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text8 />
        <Text9 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-[953px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[12px] grid grid-cols-[___28px_807.36px_69.64px] grid-rows-[_37.25px] px-[12px] py-[10px] relative size-full">
        <Text7 />
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="col-1 h-[20px] justify-self-stretch relative row-1 self-center shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#888] text-[14px] text-center whitespace-nowrap">4</p>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[19.25px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.25px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">E Kshanam</p>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">Karthik</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="col-2 h-[37.25px] justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph8 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="bg-[#2a2a2a] relative rounded-[4px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[#555] text-[10px] whitespace-nowrap">soon</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">4:12</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text11 />
        <Text12 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-[953px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[12px] grid grid-cols-[___28px_807.36px_69.64px] grid-rows-[_37.25px] px-[12px] py-[10px] relative size-full">
        <Text10 />
        <Container11 />
        <Container12 />
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="col-1 h-[20px] justify-self-stretch relative row-1 self-center shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#888] text-[14px] text-center whitespace-nowrap">5</p>
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[19.25px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.25px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">E Kshanam (Female Version)</p>
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">Pranathi</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="col-2 h-[37.25px] justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph10 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="bg-[#2a2a2a] relative rounded-[4px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[#555] text-[10px] whitespace-nowrap">soon</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">3:38</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text14 />
        <Text15 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-[953px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[12px] grid grid-cols-[___28px_807.36px_69.64px] grid-rows-[_37.25px] px-[12px] py-[10px] relative size-full">
        <Text13 />
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[298.25px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] pt-[4px] px-[12px] relative size-full">
        <Button />
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
      </div>
    </div>
  );
}

function Speaker() {
  return (
    <div className="col-1 ml-[676.47px] mt-[15px] relative row-1 size-[30px]" data-name="speaker 1">
      <svg className="absolute block inset-0 size-full" fill="none" height="30" preserveAspectRatio="none" viewBox="0 0 30 30" width="30">
        <g id="speaker 1">
          <path d={svgPaths.p3d9f2600} fill="var(--fill-0, #838383)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Next() {
  return (
    <div className="col-1 flex items-center justify-center ml-[322.47px] mt-[14px] relative row-1 size-[32px]">
      <div className="flex-none rotate-180">
        <div className="relative size-[32px]" data-name="next 1">
          <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
            <g id="next 1">
              <path d={svgPaths.p177fd570} fill="var(--fill-0, white)" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Next1() {
  return (
    <div className="col-1 ml-[501.47px] mt-[14px] relative row-1 size-[32px]" data-name="next 2">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="next 2">
          <path d={svgPaths.p177fd570} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[19px] mt-[17px] place-items-start relative row-1">
      <div className="bg-black col-1 h-[26px] ml-0 mt-0 relative rounded-[5px] row-1 w-[7px]" />
      <div className="bg-black col-1 h-[26px] ml-[15px] mt-0 relative rounded-[5px] row-1 w-[7px]" />
    </div>
  );
}

function Group() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[403.47px] mt-0 place-items-start relative row-1">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[60px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="60" preserveAspectRatio="none" viewBox="0 0 60 60" width="60">
          <circle cx="30" cy="30" fill="var(--fill-0, #D9D9D9)" id="Ellipse 9" r="30" />
        </svg>
      </div>
      <Group1 />
    </div>
  );
}

function AudioSpecturem() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Audio Specturem">
      <div className="bg-[#4527a0] col-1 h-[32.938px] ml-0 mt-[15.94px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#4527a0] col-1 h-[32.938px] ml-[279.63px] mt-[15.94px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#4527a0] col-1 h-[37.187px] ml-[239.69px] mt-[13.81px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#c4c4c4] col-1 h-[26.563px] ml-[519.32px] mt-[19.13px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#4527a0] col-1 h-[32.938px] ml-[79.9px] mt-[15.94px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#c4c4c4] col-1 h-[32.938px] ml-[359.53px] mt-[15.94px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#4527a0] col-1 h-[28.688px] ml-[159.79px] mt-[18.06px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#c4c4c4] col-1 h-[20.188px] ml-[439.42px] mt-[22.31px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#4527a0] col-1 h-[32.938px] ml-[39.95px] mt-[15.94px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#c4c4c4] col-1 h-[32.938px] ml-[319.58px] mt-[15.94px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#4527a0] col-1 h-[11.688px] ml-[119.84px] mt-[26.56px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#c4c4c4] col-1 h-[7.438px] ml-[399.48px] mt-[28.69px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#4527a0] col-1 h-[41.438px] ml-[199.74px] mt-[11.69px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#c4c4c4] col-1 h-[28.688px] ml-[479.37px] mt-[18.06px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#4527a0] col-1 h-[56.313px] ml-[9.99px] mt-[4.25px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#c4c4c4] col-1 h-[56.313px] ml-[289.62px] mt-[4.25px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#4527a0] col-1 h-[28.688px] ml-[249.67px] mt-[18.06px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#c4c4c4] col-1 h-[20.188px] ml-[529.31px] mt-[22.31px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#4527a0] col-1 h-[32.938px] ml-[89.88px] mt-[15.94px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#c4c4c4] col-1 h-[32.938px] ml-[369.52px] mt-[15.94px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#4527a0] col-1 h-[18.063px] ml-[169.78px] mt-[23.38px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#c4c4c4] col-1 h-[11.688px] ml-[449.41px] mt-[26.56px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#4527a0] col-1 h-[26.563px] ml-[49.93px] mt-[19.13px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#c4c4c4] col-1 h-[41.438px] ml-[329.57px] mt-[11.69px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#4527a0] col-1 h-[28.688px] ml-[129.83px] mt-[18.06px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#c4c4c4] col-1 h-[20.188px] ml-[409.46px] mt-[22.31px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#4527a0] col-1 h-[41.438px] ml-[209.72px] mt-[11.69px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#c4c4c4] col-1 h-[28.688px] ml-[489.36px] mt-[18.06px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#4527a0] col-1 h-[47.812px] ml-[19.97px] mt-[8.5px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#c4c4c4] col-1 h-[47.812px] ml-[299.61px] mt-[8.5px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#4527a0] col-1 h-[41.438px] ml-[259.66px] mt-[11.69px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#c4c4c4] col-1 h-[28.688px] ml-[539.29px] mt-[18.06px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#4527a0] col-1 h-[22.313px] ml-[99.87px] mt-[21.25px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#c4c4c4] col-1 h-[15.938px] ml-[379.5px] mt-[24.44px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#4527a0] col-1 h-[41.438px] ml-[179.76px] mt-[11.69px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#c4c4c4] col-1 h-[28.688px] ml-[459.4px] mt-[18.06px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#4527a0] col-1 h-[64.813px] ml-[59.92px] mt-0 relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#c4c4c4] col-1 h-[64.813px] ml-[339.55px] mt-0 relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#4527a0] col-1 h-[60.563px] ml-[139.82px] mt-[2.13px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#c4c4c4] col-1 h-[41.438px] ml-[419.45px] mt-[11.69px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#4527a0] col-1 h-[47.812px] ml-[219.71px] mt-[8.5px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#c4c4c4] col-1 h-[32.938px] ml-[499.35px] mt-[15.94px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#4527a0] col-1 h-[24.438px] ml-[29.96px] mt-[20.19px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#c4c4c4] col-1 h-[37.187px] ml-[309.59px] mt-[13.81px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#4527a0] col-1 h-[41.438px] ml-[269.65px] mt-[11.69px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#c4c4c4] col-1 h-[28.688px] ml-[549.28px] mt-[18.06px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#4527a0] col-1 h-[28.688px] ml-[109.86px] mt-[18.06px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#c4c4c4] col-1 h-[20.188px] ml-[389.49px] mt-[22.31px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#4527a0] col-1 h-[60.563px] ml-[189.75px] mt-[2.13px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#c4c4c4] col-1 h-[41.438px] ml-[469.38px] mt-[11.69px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#4527a0] col-1 h-[32.938px] ml-[69.91px] mt-[15.94px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#c4c4c4] col-1 h-[32.938px] ml-[349.54px] mt-[15.94px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#4527a0] col-1 h-[41.438px] ml-[149.8px] mt-[11.69px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#c4c4c4] col-1 h-[28.688px] ml-[429.44px] mt-[18.06px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#4527a0] col-1 h-[60.563px] ml-[229.7px] mt-[2.13px] relative rounded-[17px] row-1 w-[6.658px]" />
      <div className="bg-[#c4c4c4] col-1 h-[41.438px] ml-[509.33px] mt-[11.69px] relative rounded-[17px] row-1 w-[6.658px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="col-1 content-stretch flex gap-[120px] items-center justify-center ml-0 mt-[74px] relative row-1">
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">0:51</p>
      <AudioSpecturem />
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#838383] text-[14px] tracking-[0.98px] whitespace-nowrap">1:41</p>
    </div>
  );
}

function MusicPaySystem() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="music pay system">
      <Speaker />
      <Next />
      <Next1 />
      <Group />
      <Frame />
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#0a0a0a] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[16px] pt-[13px] px-[20px] relative size-full">
          <MusicPaySystem />
        </div>
      </div>
    </div>
  );
}

export default function MusicPlayer() {
  return (
    <div className="bg-[#121212] relative rounded-[16px] size-full" data-name="MusicPlayer">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container />
        <Container2 />
        <ContainerMargin />
        <Container4 />
        <Container15 />
      </div>
      <div aria-hidden className="absolute border border-[#575757] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}