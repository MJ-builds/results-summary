import Physicalstats from "./Physicalstats";
import Summarybutton from "./Summarybutton";

const Summary = () => {
  return (
    <div className="font-hanken p-8 justify-center grid grid-rows-3 rounded-[32px] w-[375px]">
      <div className="text-2xl font-bold text-[#303B59] items-start flex">
        Summary
      </div>
      <div className="flex items-center mt-[-50px]">
        <Physicalstats />
      </div>
      <div className="flex items-end mb-5">
        <Summarybutton />
      </div>
    </div>
  );
};

export default Summary;
