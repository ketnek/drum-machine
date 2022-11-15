import './App.css';
import { DrumMachine } from './components/drumMachine';
import { soundsBank1 } from './sounds';
import { soundsBank2 } from './sounds2';


function App() {

  return (
    <div id='app'>
      <DrumMachine
        soundsBank1={soundsBank1}
        soundsBank2={soundsBank2} />
    </div>
  );
}

export default App;
