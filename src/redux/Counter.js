import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/Action";

export default function Counter() {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
    return(
        <div>
            <h3>redux application illustration</h3>
            <h4>count:{count}</h4>
            <button onClick={() => dispatch( increment() )}>Increment</button>
            <button onClick={() => dispatch( decrement())}>Decrement</button>


        </div>
    );
}