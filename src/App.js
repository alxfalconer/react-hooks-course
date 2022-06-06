import "./App.css";
import CallbackTutorial from "./UseCallback/CallbackTutorial";
import EffectTutorial from "./UseEffect/EffectTutorial";
import ContextTutorial from "./UseContext/ContextTutorial";
import ImperativeHandle from "./UseImperativeHandle/ImperativeHandle";
import MemoTutorial from "./UseMemo/MemoTutorial";
import ReducerTutorial from "./UseReducer/ReducerTutorial";

function App() {
  return (
    <div className="App">
    <CallbackTutorial />
    <EffectTutorial />
    <ContextTutorial />
    <ImperativeHandle />
    <MemoTutorial />
    <ReducerTutorial />
    </div>
  );
}

export default App;
