import "./App.css";
import CallbackTutorial from "./UseCallback/CallbackTutorial";
import EffectTutorial from "./UseEffect/EffectTutorial";
import ContextTutorial from "./UseContext/ContextTutorial";
import ImperativeHandle from "./UseImperativeHandle/ImperativeHandle";

function App() {
  return (
    <div className="App">
    <CallbackTutorial />
    <EffectTutorial />
    <ContextTutorial />
    <ImperativeHandle />
    </div>
  );
}

export default App;
