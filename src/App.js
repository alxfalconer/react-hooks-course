import "./App.css";
import CallbackTutorial from "./UseCallback/CallbackTutorial";
import EffectTutorial from "./UseEffect/EffectTutorial";
import ContextTutorial from "./UseContext/ContextTutorial";
import ImperativeHandle from "./UseImperativeHandle/ImperativeHandle";
import MemoTutorial from "./UseMemo/MemoTutorial";
import ReducerTutorial from "./UseReducer/ReducerTutorial";
import RefTutorial from "./UseRef/RefTutorial";
import StateTutorial from "./UseState/StateTutorial";

function App() {
  return (
    <div className="App">
    <CallbackTutorial />
    <EffectTutorial />
    <ContextTutorial />
    <ImperativeHandle />
    <MemoTutorial />
    <ReducerTutorial />
    <RefTutorial />
    <StateTutorial />
    </div>
  );
}

export default App;
