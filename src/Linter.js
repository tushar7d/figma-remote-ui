import { Header, Box, Item, Avatar, ActionButton, Checkbox, MoreBar, VStack } from '@revolut/ui-kit'
import * as Icons from '@revolut/icons'
import { useEffect, useState } from 'react';
function Index() {

    const lintSelection = () => {
        window.parent.postMessage({ pluginMessage: { type: "lintSelection" }, pluginId: "1241379539591448233" }, "*");
    };
    const selectedNode = (id) => {
        
        window.parent.postMessage({ pluginMessage: { type: "selectedNode", selected: id }, pluginId: "1241379539591448233" }, "*");
    };


    const [hipp, setData] = useState({ data: null })
    useEffect(() => {
        window.onmessage = (msg) => {
            setData({ data: msg.data.pluginMessage.text })
        }
       
    });

    return (
        <Box px="s-12">
            <Header variant='main'>

                <Header.Title>Linter</Header.Title>



            </Header>
            <MoreBar >
                <MoreBar.Action onClick={lintSelection} >Refresh</MoreBar.Action>
            </MoreBar>
            <VStack space='s-16' mt="s-16">
            {hipp.data == null ? "no data" : hipp.data.map((node) => {
                return (<Item use='label' onClick={() => { selectedNode(node.id) }} >

                    <Item.Avatar>
                        <Avatar />
                    </Item.Avatar>
                    <Item.Content>
                        <Item.Title id='item-title-clickable'> Missing {node.type} Style</Item.Title>
                        <Item.Description id='item-description-clickable'>
                            {node.fontName.family} / {node.fontSize} / {node.fontWeight}
                        </Item.Description>

                    </Item.Content>
                </Item>)
            })}
            </VStack>
        </Box>

    )
}

export default Index