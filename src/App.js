

import { ThemeProvider, BottomNav, Fixed, Layout } from '@revolut/ui-kit'
import * as Icons from '@revolut/icons'


function App() {

  const onCancel = () => {
    window.parent.postMessage({ pluginMessage: { type: "cancel" }, pluginId: "1241379539591448233" }, "*");
  };
  return (
    
      <ThemeProvider mode='light'  >
        <Layout >
          <Fixed bottom={0} left={0} color='white' width={'100vw'}   >
            <BottomNav >
              <BottomNav.Item useIcon={Icons.Revolut} aria-label='Home' aria-pressed >Home</BottomNav.Item>
              <BottomNav.Item useIcon={Icons.ArrowRightLeft} aria-label='Payments' > Linter</BottomNav.Item>
              <BottomNav.Item useIcon={Icons.Apps} aria-label='Hub' hasDot >Resources</BottomNav.Item>
            </BottomNav>
          </Fixed>
        </Layout>
      </ThemeProvider>


    
  );
}

export default App;
