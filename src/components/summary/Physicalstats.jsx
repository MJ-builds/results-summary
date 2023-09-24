import data from "../../data.json";

const Physicalstats = () => {
  return (
    <div className="grid gap-4">
      {data.map((item) => (
        <div
          key={item.category}
          className="flex justify-between h-[56px] w-[288px] rounded-xl p-4"
          style={{ backgroundColor: item.bcolor }}
        >
          <div className="flex flex-row gap-3 font-bold">
            <img src={item.icon} alt={item.category} />
            <div className=" self-center" style={{ color: item.color }}>
              {item.category}
            </div>
          </div>
          <div className="flex flex-row">
            <div className="font-bold text-[#303B59]">{item.score} </div>
            <div className="ml-2 text-[#303b5980] font-bold"> / 100 </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Physicalstats;
