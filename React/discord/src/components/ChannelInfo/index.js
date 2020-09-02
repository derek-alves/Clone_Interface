import React from 'react';
import {Container,Title,HashtagIcon,Separator,Description} from './styles';


const ChannelInfo = () => {
  return (
     <Container>
       <HashtagIcon/>
          <Title>chat-livre</Title>
        <Separator/>
        <Description>Canal aberto para conversas</Description>  
     </Container>
  );
} 

export default ChannelInfo;