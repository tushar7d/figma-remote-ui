
import { Provider, Button, Box, Image, Flex } from '@revolut/ui-kit'



function App() {

  const onCancel = () => {
    window.parent.postMessage({ pluginMessage: { type: "cancel" }, pluginId: "1241379539591448233" }, "*");
  };
  return (
    <div>
      <Provider mode='dark' highContrast='auto' >
        <Flex alignItems={"center"} flexDirection='column'  justifyContent={"center"} height={"100vh"} >
          <Image
            src='https://assets.revolut.com/assets/3d-images/3D070.png'
            alt='Checklist'
            size={200}
          />

          <Box p='s-16'>
            <Button onClick={onCancel} elevated>Close Window</Button>
          </Box>
        </Flex>
      </Provider>


    </div>
  );
}

export default App;
