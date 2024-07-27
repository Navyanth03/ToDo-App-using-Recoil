import { useRecoilState } from "recoil"
import { todoFilterAtom } from "../atoms"

export default function TodoFilter(){
    const [filter,setFilter]=useRecoilState(todoFilterAtom);
    
    const updateFilter=({target:{value}})=>{
        setFilter(value);
    }

    return(
        <>
          <select value={filter} onChange={updateFilter}>
          <option value="Show All">All</option>
          <option value="Show Completed">Completed</option>
          <option value="Show Incomplete">Incomplete</option>
          </select>
        </>
    )
}