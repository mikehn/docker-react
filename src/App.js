import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mikes Page !
        </p>
        <Counter />
        <p>Works !</p>
      </header>
    </div>
  );
}

export default App;
