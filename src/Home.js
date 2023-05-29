import { Header,Box } from '@revolut/ui-kit'
import {  Link } from "react-router-dom";

function Index() {
    
    return (
        <Box px="s-12"> 
            <Header variant='main'>
  <Header.Title>Home</Header.Title>
</Header>
<nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/generator">Generator</Link>
          </li>
          <li>
            <Link to="/translator">Translator</Link>
          </li>
         
        </ul>
      </nav>

   
        </Box>
        
    )}

export default Index