import { atom, selector } from "recoil";

const todosAtom=atom({
    key:'todosAtom',
    default:[]
})

const todoFilterAtom=atom({
    key:'todoFilterAtom',
    default:'Show All'
})

const filterTodoSelector=selector({
    key:'filterTodoSelector',
    get:({get})=>{
        const todos=get(todosAtom);
        const filter=get(todoFilterAtom);
        switch(filter){
            case 'Show Completed':
                return todos.filter((todo)=>todo.isComplete);
            case 'Show Incomplete':
                return todos.filter((todo)=>!todo.isComplete);
            default:
                return todos;
        }
    }
})

const todoStatsSelector=selector({
    key:'todoStatsSelector',
    get:({get})=>{
        const todos=get(todosAtom);
        const totalNum=todos.length;
        const totalCompletedNum=todos.filter((item)=>item.isComplete).length;
        const totalUncompletedNum=totalNum-totalCompletedNum;
        const percentCompleted=totalNum===0?0:totalCompletedNum/totalNum*100;
    
        return {totalNum,totalCompletedNum,totalUncompletedNum,percentCompleted};
    }
})

export {todosAtom,todoFilterAtom,filterTodoSelector,todoStatsSelector};