import React from 'react';

import {Container, HashtagIcon, InviteIcon, SettingsIcon} from './styles';


const ChannelButton = ({channelName, selected = null}) => {
  return (
     <Container className={selected ? 'active' : ''}>
         <div>
            <HashtagIcon/>
            <span>{channelName}</span>
         </div>

         <div>
              <InviteIcon />
              <SettingsIcon />
         </div>
     </Container>
  );
} 

export default ChannelButton;