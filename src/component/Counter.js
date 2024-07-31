import {useState} from "react";

export default function Counter(){

    const [count ,setCount]  = useState(0);

    const increment  =() =>{
        setCount(count + 1);
        // count++;
        // console.log(count);
        
    }
    const decrement  =() =>{

        if (count > 0 ){
        setCount(count - 1);
        // count++;
        // console.log(count);
        }
        
    }
    return (
        <div>

            <h1 className="text-primary">counter application</h1>


            <hr/>
            <h2 > count : {count}</h2>
            <button onClick= {increment}> Increment</button>
            <button onClick = {decrement}> Decrement</button>
        </div>


    );



}