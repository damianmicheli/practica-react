import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Prácticas de React en Frontend III
        </h1>
        <a
          className="App-link"
          href="/semana1"
          rel="noopener noreferrer"
        >
          Actividad de repaso semana 1
        </a>
        <a
          className="App-link"
          href="https://reloj.dami.com.ar"
          rel="noopener noreferrer"
        >
          Reloj: un componente de React
        </a>
      </header>
    </div>
  );
}

export default App;
