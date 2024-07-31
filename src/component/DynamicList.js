
import { useState } from "react";
export default function DynamicList(){
    const [toDo,settoDo] = useState(["sleep","eat"])

    const [formData,setFormData] = useState("");

    const handleChange =(event) =>{
        setFormData(event.target.value)


    }
    const handleSubmit = (event) => {

        event.preventDefault();
        settoDo([...toDo,formData])
        setFormData("");
    }
    return (
        <div>
            <h2>Dynamic List</h2>
            <form onSubmit={handleSubmit}>


                <input type = "text"
                placeholder="Enter Task"
                name ="Task" 
                value = {formData}
                onChange={handleChange}
                />

                <button type = "submit">Add</button>
           

            <ul>
                {

                toDo.map((item ,index) => (
                    <li key = {index} > {item}</li>

                ))}
                 
                
            </ul>
            </form>
        </div>
    );

}