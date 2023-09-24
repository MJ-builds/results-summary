import "./App.css";
import Result from "./components/results/Result";
import Summary from "./components/summary/Summary";

function App() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-2 md:grid-rows-1 md:h-[512px] md:w-[736px] w-[375px] h-[809px] text-[#303B59] bg-white rounded-[32px] cont-shadow">
      <Result />
      <Summary />
    </div>
  );
}

export default App;
