import './App.css';
import { DrumMachine } from './components/drumMachine';
import { sounds } from './sounds'


function App() {

  return (
    <div id='app'>
      <DrumMachine sounds={sounds} />
    </div>
  );
}

export default App;
