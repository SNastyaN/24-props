import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Button name={""} className="tast" id="buttonTest" title="button" aria-label="button"></Button>
    </div>
  );
}

export default App;
