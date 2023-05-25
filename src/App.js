
import { useState } from "react";
import { ThemeProvider, BottomNav, Fixed, Layout } from '@revolut/ui-kit'
import * as Icons from '@revolut/icons'


function App() {
  const [tab, setTab] = useState('home')
  const onCancel = () => {
    window.parent.postMessage({ pluginMessage: { type: "cancel" }, pluginId: "1241379539591448233" }, "*");
  };
  return (
    
      <ThemeProvider mode='light'  >
        <Layout >
        {(() => {
        switch (tab) {
          case 'home':
            return <>Home</>
          case 'linter':
            return <>Linter</>
          case 'resources':
            return <>Resources</>
          default:
            throw new Error('Not reachable')
        }
      })()}
          <Fixed bottom={0} left={0} color='white' width={'100vw'}   >
            <BottomNav >
              <BottomNav.Item   role='tab' aria-selected={tab === 'home'} onClick={() => setTab('home')} useIcon={Icons.Revolut} aria-label='Home' >Home</BottomNav.Item>
              <BottomNav.Item   role='tab' aria-selected={tab === 'linter'} onClick={() => setTab('linter')} useIcon={Icons.ArrowRightLeft} aria-label='Payments' > Linter</BottomNav.Item>
              <BottomNav.Item   role='tab' aria-selected={tab === 'resources'} onClick={() => setTab('resources')} useIcon={Icons.Apps} aria-label='Hub' hasDot >Resources</BottomNav.Item>
            </BottomNav>
          </Fixed>
        </Layout>
      </ThemeProvider>


    
  );
}

export default App;
