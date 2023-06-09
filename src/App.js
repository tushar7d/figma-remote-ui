
import { useState } from "react";
import { ThemeProvider, BottomNav, Fixed, Layout } from '@revolut/ui-kit'
import * as Icons from '@revolut/icons'
import Linter from './Linter'
import Resources from './Resources'
import Home from './Home'
import Generator from './SubApps/Generator'
import Translator from './SubApps/Translator'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [tab, setTab] = useState('home')
  const onCancel = () => {
    window.parent.postMessage({ pluginMessage: { type: "cancel" }, pluginId: "1241379539591448233" }, "*");
  };

  window.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
      // Close plugin when pressing Escape
      window.parent.postMessage({ pluginMessage: { type: "cancel" }, pluginId: "1241379539591448233" }, "*");
    }
  });

  const lintSelection = () => {
    window.parent.postMessage({ pluginMessage: { type: "lintSelection" }, pluginId: "1241379539591448233" }, "*");
};

  return (
    
      <ThemeProvider mode='light'  >
        <Layout   >
        <Layout.Main>
        {(() => {
        switch (tab) {
          case 'home':
            return (<BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="generator" element={<Generator />} />
                <Route path="translator" element={<Translator />} />
                  
               
              </Routes>
            </BrowserRouter>)
          case 'linter':
            return <Linter />
          case 'resources':
            return <Resources />
          default:
            throw new Error('Not reachable')
        }
      })()}
          <Fixed bottom={0} left={0} color='white' width={'100vw'}   >
            <BottomNav >
              <BottomNav.Item   role='tab' aria-selected={tab === 'home'} onClick={() => setTab('home')} useIcon={Icons.Revolut} aria-label='Home' >Home</BottomNav.Item>
              <BottomNav.Item   role='tab' aria-selected={tab === 'linter'} onClick={() => {setTab('linter'); lintSelection()}} useIcon={Icons.Compare} aria-label='Payments' > Linter</BottomNav.Item>
              <BottomNav.Item   role='tab' aria-selected={tab === 'resources'} onClick={() => setTab('resources')} useIcon={Icons.Apps} aria-label='Hub' hasDot >Resources</BottomNav.Item>
            </BottomNav>
          </Fixed>
          </Layout.Main>
        </Layout>
      </ThemeProvider>


    
  );
}

export default App;
