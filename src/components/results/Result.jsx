import Circle from "./Circle";

const Result = () => {
  return (
    <div className="font-hanken md:rounded-[32px] rounded-b-[32px] w-[375px] h-[356px] md:h-full gradient-purple p-4 md:p-8 grid justify-center text-[#CAC9FF]">
      <div className="text-2xl font-bold">Your Result</div>
      <div className="flex justify-center">
        <Circle />
      </div>
      <div className="font-bold md:text-[32px] text-[24px] text-white">
        Great
      </div>
      <div className="text-sm">
        Your performance exceed 65% of the people conducting the test here!
      </div>
    </div>
  );
};

export default Result;
