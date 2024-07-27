import { useRecoilState} from 'recoil'
import { todosAtom } from '../atoms';
import { useMemo } from 'react';

export default function TodoItem({todoItem}){
    const [todos,setTodos]=useRecoilState(todosAtom);
    
    const itemId=useMemo(()=>todos.findIndex((todo)=>todo==todoItem));

    const editItemText=({target:{value}})=>{
        setTodos([...todos.slice(0,itemId),{...todoItem,task:value},...todos.slice(itemId+1)]);
    }

    const toggleItemCompletion=()=>{
        setTodos([...todos.slice(0,itemId),{...todoItem,isComplete:!todoItem.isComplete},...todos.slice(itemId+1)]);
    }

    const deleteItem=()=>{
        setTodos([...todos.slice(0,itemId),...todos.slice(itemId+1)]);
    }

    return(
        <div>
        <input type="text" value={todoItem.task} onChange={editItemText} />
        <input
            type="checkbox"
            checked={todoItem.isComplete}
            onChange={toggleItemCompletion}
        />
        <button onClick={deleteItem}>X</button>
        </div>
    )
}