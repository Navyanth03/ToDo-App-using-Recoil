import { useRecoilValue } from "recoil";
import { todoStatsSelector } from "../atoms";

export default function TododStats(){
    const {totalNum,totalCompletedNum,totalUncompletedNum,percentCompleted}=useRecoilValue(todoStatsSelector);
    
    const formattedPercentCompleted=Math.round(percentCompleted);

    return(
        <ul>
        <li>Total items: {totalNum}</li>
        <li>Items completed: {totalCompletedNum}</li>
        <li>Items not completed: {totalUncompletedNum}</li>
        <li>Percent completed: {formattedPercentCompleted}</li>
      </ul>
    )
}