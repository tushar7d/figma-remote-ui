import logo from './logo.svg';
import './App.css';
import { Provider, Button, Box, Image } from '@revolut/ui-kit'



function App() {

  const onCancel = () => {
    window.parent.postMessage({ pluginMessage: { type: "cancel" }, pluginId: "1241379539591448233" }, "*");
  };
  return (
    <div className="App">
      <header className="App-header">
        <Image
          src='https://assets.revolut.com/assets/3d-images/3D070.png'
          alt='Checklist'
          size={200}
        />
        <Provider mode='auto' highContrast='auto'>
          <Box p='s-16'>
            <Button onClick={onCancel} elevated>Close Window</Button>
          </Box>
        </Provider>
      </header>

    </div>
  );
}

export default App;
