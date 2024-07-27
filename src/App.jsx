import {filterTodoSelector} from './atoms'
import {useRecoilValue} from 'recoil'
import TodoItem from './components/TodoItem';
import TodoCreator from './components/TodoCreator';
import TodoFilter from './components/TodoFilter';
import TododStats from './components/TodoStats';

function App() {
  const todos=useRecoilValue(filterTodoSelector);
  
  return (
    <>
      <TododStats/>
      <TodoFilter/>
      <TodoCreator/>
      {todos.map((todoItem)=><TodoItem key={todoItem.id} todoItem={todoItem}/>)}
    </>
  )
}



export default App
