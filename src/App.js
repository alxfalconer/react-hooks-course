import "./App.css";
import CallbackTutorial from "./UseCallback/CallbackTutorial";
import EffectTutorial from "./UseEffect/EffectTutorial";
import ContextTutorial from "./UseContext/ContextTutorial";

function App() {
  return (
    <div className="App">
    <CallbackTutorial />
    <EffectTutorial />
    <ContextTutorial />
    </div>
  );
}

export default App;
