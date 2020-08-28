import React ,{useState}from 'react';
import Produce from 'immer';
import {loadLists} from '../../services/api';
import BoardContext from './context';
import List from '../List';
import { Container } from './styles';

const data = loadLists();

function Board() {

  const [lists,setList] = useState(data);
  function move(fromList,toList,from,to){
    setList(Produce(lists,draf =>{
      const dragged = draf[fromList].cards[from];

      draf[fromList].cards.splice(from,1);
      draf[toList].cards.splice(to,0,dragged);
    }))
  }
  return (
    <BoardContext.Provider value={{lists,move}}> 
      <Container>
          {lists.map((list,index) => <List key={list.title} index={index} data={list}/>)}
      </Container>
    </BoardContext.Provider> 
  );
}

export default Board;