import React from 'react';
import {Container,Role,User,Avatar} from './styles';

const UserRow = ({nickname,isBot}) => {
  return(
    <User>
        <Avatar className={isBot ? 'bot' : ''}/>
        <strong>{nickname}</strong>
        {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList = () => {
  return (
     <Container>
        <Role>Disponível - 1</Role>
        <UserRow nickname="Guilherme Rodz"/>

        <Role>Disponível - 18</Role>
        <UserRow nickname="Derek Enrique" isBot/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano"/>
        <UserRow nickname="Fulano"/>
     </Container>
  );
} 

export default UserList;