const Circle = () => {
  return (
    <div className="relative h-[200px] w-[200px]">
      <img src="/Oval.svg" alt="circle" className="w-full h-full" />
      <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center text-2xl">
        <div className="font-bold text-7xl text-white">76</div>
        <div className="text-base">of 100</div>
      </div>
    </div>
  );
};

export default Circle;
