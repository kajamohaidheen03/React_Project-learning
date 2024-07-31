import { useState } from "react";
export default function Register(){
    const [formData,setFormData] =useState({
        name : "",
        email : "",
        phone : "",



});

    const handleChange = (event)=>{
        const {name ,value}  = event.target;
        setFormData({...formData,[name]:value})


    }

    const  handleSubmit = (event) => {

        event.preventDefault()
        console.log(formData)
    }

    return (

        <div>
            <h1> Registeration form</h1>
<form onSubmit={handleSubmit}>
    <label>Name : </label>
    <input type = "text" placeholder="enter name"  name = "name" value={formData.name} onChange = {handleChange}/>
    <input type = "email" placeholder="enter email"  name = "email" value={formData.email} onChange = {handleChange}/>
    <input type = "number" placeholder="enter phone"  name = "phone" value={formData.phone} onChange = {handleChange}/>
  <button>signup</button>
</form>
        </div>
    );
}