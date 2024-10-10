import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from "../redux/slices/CounterSlice"; 
import { RootState } from "../redux/store";


const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state:RootState) => state.counter.value)
    console.log(count);

    const handleIncrement=()=>{
        dispatch(increment())
    }
    
    const handleDecrement=()=>{
        dispatch(decrement())
    }
  return (
    <div style={{width:"100%",  margin:"10px"}}>
    <div style={{ width:"100px",margin:"auto"}}>
      <button  style={{width:"100%", padding:"5px"}} onClick={handleIncrement}>increments</button>
      <p style={{textAlign:"center"}}>{count}</p>
      <button style={{width:"100%", padding:"5px"}} onClick={handleDecrement}>decrements</button>
    </div>
    </div>
  )
}

export default Counter
