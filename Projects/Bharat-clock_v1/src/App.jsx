import ClockName from "./components/ClockName";
import BharatNote from "./components/BharatNote";
import BharatTime from "./components/BharatTime";
import "./App.css";

function App() {
  return (
    <div className="border border-info bg-black text-white center-clock">
      <ClockName />
      <BharatNote />
      <BharatTime />
    </div>
  );
}

export default App;
