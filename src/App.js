import logo from './logo.svg';
import './App.css';
import Halo from './components/Halo';
import Message from './components/Message';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Resume from './components/Resume';
import { FunctionEvent } from './components/FunctionEvent';
import ClassEvent from './components/ClassEvent';
import FunctionalCounter from './components/FunctionalCounter';

function App() {
  return (
    <div className="App">
      <FunctionalCounter/>
    </div>
  );
}

export default App;
