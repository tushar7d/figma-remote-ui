import logo from './logo.svg';
import './App.css';

function App() {

  const onCancel = () => {
    window.parent.postMessage({ pluginMessage: { type: "cancel" },pluginId:"1241379539591448233" }, "*");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={onCancel}>Cancel</button>
      </header>
      
    </div>
  );
}

export default App;
