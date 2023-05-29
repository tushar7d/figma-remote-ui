import { Box, ActionWidget, ActionButton, Avatar } from "@revolut/ui-kit";
import {  } from '@revolut/ui-kit'
import SubAppHeader from "../Components/SubAppHeader";

function Index() {
  return (
    <Box px="s-12">
      <SubAppHeader
        title="Pseudo translator"
        description="Extend text length to predict localisation issues"
        image="https://assets.revolut.com/assets/hub-icons/Vaults-60.png"
      />

<ActionWidget>
  <ActionWidget.Title>How to use</ActionWidget.Title>
  <ActionWidget.Avatar>
    <Icons.InfoOutline color='pink' />
  </ActionWidget.Avatar>
  <ActionWidget.Content>
  1. Select layers you want to extend the text
2. Click “Simulate translation“
3. See the results on the page:🇷🇺 🇧🇷 Pseudo Translations 🇨🇳 🇮🇳
  </ActionWidget.Content>
  <ActionWidget.Actions>
    <ActionButton>Extend Text</ActionButton>
  </ActionWidget.Actions>
</ActionWidget>
      
    </Box>
  );
}

export default Index;
