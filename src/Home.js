import { Header, Box, AppIcon, AppIconGrid, AppsWidget } from "@revolut/ui-kit";
import { Link } from "react-router-dom";

function Index() {
  return (
    <Box px="s-12">
      <Header variant="main">
        <Header.Title>Home</Header.Title>
      </Header>

      <AppsWidget
      
      >
        <Link to="/translator">
          <AppIcon
            key={1}
            image={{
              default: `https://assets.revolut.com/assets/hub-icons/Payday.png`,
              
            }}
            
          >
            <AppIcon.Title> Pseudo Translator</AppIcon.Title>
          </AppIcon>
        </Link>
        <Link to="/generator">
          <AppIcon
            key={2}
            image={{
              default: `https://assets.revolut.com/assets/hub-icons/Payday.png`,
             
            }}
            
          >
            <AppIcon.Title>Cover Generator</AppIcon.Title>
          </AppIcon>
        </Link>
      </AppsWidget>
    </Box>
  );
}

export default Index;
