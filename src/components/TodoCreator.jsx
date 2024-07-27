import { useSetRecoilState } from 'recoil';
import { todosAtom } from '../atoms';
import { useState } from 'react';

export default function TodoCreator(){
    const [inputValue,setInputValue]=useState('');
    const setTodos=useSetRecoilState(todosAtom);

    const addTodo=()=>{
      setTodos((todos)=>[...todos,{id:todos.length,task:inputValue,isComplete:false}]);
      setInputValue('');
    }
    
    return(
      <div>
        <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
        <button onClick={addTodo}>Add Todo</button>
      </div>
    )
  }