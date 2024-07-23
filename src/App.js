import "./App.css";
import ColorGane from "./color/ColorGane";
import LightDarkMode from "./light-dark-mode/LightDarkMode";
import TictacTo from "./tic-tac-to/Tictacto";

function App() {
  return (
    <div className="App">
      <ColorGane />
      <LightDarkMode />
      <TictacTo />
    </div>
  );
}

export default App;
