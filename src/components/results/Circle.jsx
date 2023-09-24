const Circle = () => {
  return (
    <div className="relative md:h-[200px] md:w-[200px] h-[140px] w-[140px]">
      <img src="/Oval.svg" alt="circle" className="w-full h-full" />
      <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center text-2xl">
        <div className="font-bold md:text-7xl text-[56px] text-white">76</div>
        <div className="text-base">of 100</div>
      </div>
    </div>
  );
};

export default Circle;
