import React from 'react';
import {Container,Messages,InputWrapper,Input,InputIcon} from './styles';

import ChannelMessage from '../ChannelMessage';

const ChannelData = () => {
  return (
     <Container>
        <Messages>
            <ChannelMessage
              author="Derek"
              data="21/06/2020"
              content="Hoje é o meu aniversário!"
            />

            {/* <ChannelMessage
              author="Amanda bittencout"
              data="21/06/2020"
              content={
                <>
                  <Mention>@Derek</Mention>,me carrega por favor?
                </>
              }
            /> */}
        </Messages>


      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre"/>
        <InputIcon/>
      </InputWrapper>    
    </Container>
  );
} 

export default ChannelData;