import Physicalstats from "./Physicalstats";
import Summarybutton from "./Summarybutton";

const Summary = () => {
  return (
    <div className="font-hanken md:p-8 justify-center grid grid-rows-3 rounded-[32px] w-[375px] mt-[-30px] md:mt-0">
      <div className="text-2xl font-bold text-[#303B59]  flex">Summary</div>
      <div className="flex items-center md:mt-[-50px] mt-[-50px]">
        <Physicalstats />
      </div>
      <div className="flex items-start md:mb-5 mt-16">
        <Summarybutton />
      </div>
    </div>
  );
};

export default Summary;
