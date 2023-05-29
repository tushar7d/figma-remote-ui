import { Header, Box,AppIcon } from "@revolut/ui-kit";

import { useNavigate } from "react-router-dom";

function Index(props) {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/");
      }
  return (
    <Box px="s-12">
      <Header variant="item">
      <Header.BackButton onClick={handleClick} aria-label='Back' />
      <Header.Avatar>
        <AppIcon
          use='span'
          size={60}
          bg='terracotta'
          image={{
            default: props.image
           
          }}
        />
      </Header.Avatar>
        <Header.Title>{props.title}</Header.Title>
        <Header.Description>{props.description}</Header.Description>
      </Header>

     {props.Children}
    </Box>
  );
}

export default Index;
