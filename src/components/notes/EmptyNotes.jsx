import { LightbulbOutlined as LightBulb } from "@mui/icons-material";
import { Box,Typography,styled } from "@mui/material";

const Light =styled(LightBulb)`
    font-size: 120px;
    color: #F5F5F5;
`
const Text =styled(Typography)`
    font-size: 24px;
    color: #80868b;
`
const Container =styled(Box)`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:20vh;
`

const EmptyNotes = ()=> {
    return(
       <Container>
           <Light/>
           <Text>Notes you add appear here</Text>
       </Container>
    )
}

export default EmptyNotes;