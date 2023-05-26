import { Header, Box, Item, Avatar, ActionButton, MoreBar, VStack } from '@revolut/ui-kit'
import * as Icons from '@revolut/icons'
import { useEffect } from 'react';
function Index() {

    const lintSelection = () => {
        window.parent.postMessage({ pluginMessage: { type: "lintSelection" }, pluginId: "1241379539591448233" }, "*");
    };

    let selection = []
    useEffect(() => {
        window.onmessage = (msg) => {
            let m = msg.data.pluginMessage
            if (m.type == "lintSelection") {

                selection = m.data
                console.log(selection)
            }
        }
    });

    return (
        <Box px="s-12">
            <Header variant='main'>

                <Header.Title>Linter</Header.Title>



            </Header>
            <MoreBar >
                <MoreBar.Action onClick={lintSelection} >Lint Selection </MoreBar.Action>
                <MoreBar.Action >Lint current Page</MoreBar.Action>
                <MoreBar.Action >Auto Linter</MoreBar.Action>

            </MoreBar>
            <VStack mt="s-24" space='s-16'>
                <Item  >

                    <Item.Avatar>
                        <Avatar useIcon={Icons.Pencil} />
                    </Item.Avatar>
                    <Item.Content>
                        <Item.Title  >Missing text style (25)</Item.Title>
                        <Item.Description>Roboto Regular / 8 (12 line-height)</Item.Description>
                    </Item.Content>
                    <Item.Side>
                        <ActionButton >Select</ActionButton>

                    </Item.Side>
                </Item>
                <Item >

                    <Item.Avatar>
                        <Avatar useIcon={Icons.Pencil} />
                    </Item.Avatar>
                    <Item.Content>
                        <Item.Title>Missing text style (25)</Item.Title>
                        <Item.Description>Roboto Regular / 8 (12 line-height)</Item.Description>
                    </Item.Content>
                    <Item.Side>
                        <ActionButton>Select</ActionButton>

                    </Item.Side>
                </Item>
            </VStack>
        </Box>

    )
}

export default Index