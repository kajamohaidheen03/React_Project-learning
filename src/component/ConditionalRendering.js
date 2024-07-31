

   
import { useState } from "react";

const Login = ({ setIsTrue }) => {
    return(
        <div>
            <h2>If False .!</h2>
            <button onClick={() => setIsTrue(true)}>Login</button>
        </div>
    );
}

const Second = () => {
    return(
        <div>
            <h2>If True .!</h2>
        </div>
    );
}

export default function ConditionalRendering () {
    const [isTrue, setIsTrue] = useState(false);

    if (isTrue) {
        return <Second />;
    } else {
        return <Login setIsTrue={setIsTrue} />;
    }
}