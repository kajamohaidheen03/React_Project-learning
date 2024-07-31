import logo from "../logo.svg"
import "../App.css"

export default function CssDemo(){
    const mystyle = {
        color :"red",
        backgroundColor:"greenyellow",
    }

    return (

        <div>
            <h1> CssDemo</h1>
            <hr/>
            <p style = { { color : "red",backgroundColor:"greenyellow",}}> this is inline css style</p>
            <p style = {mystyle}>this internal css style</p>
            <p className = "App">this external css style</p>

            <img src = {logo} alt = " " height = "200px" width = "200px"  />
        </div>

    );
}