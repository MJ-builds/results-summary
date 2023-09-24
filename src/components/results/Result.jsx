import Circle from "./Circle";

const Result = () => {
  return (
    <div className="rounded-[32px] w-[375px] gradient-purple p-8 grid  justify-center text-[#CAC9FF]">
      <div className="text-2xl font-bold">Your Result</div>
      <div className="flex justify-center">
        <Circle />
      </div>
      <div className="font-bold text-xl text-white">Great</div>
      <div className="text-sm">
        Your performance exceed 65% of the people conducting the test here!
      </div>
    </div>
  );
};

export default Result;
