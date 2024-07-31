import { useEffect, useState } from "react";
import axios from "axios";
export default function AxiosTest(){
 const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";


 useEffect(() => {
    const fetchData = async () => {
        const response = await axios.delete(apiUrl).then((response) => {
            console.log(response.data);
            //setPost(response.data);
            //alert("Data inserted successfully");
        }).catch((error) => 
            console.log(error))
        .finally(() => console.log("data delected success"));
    };
    fetchData();
},[]);


 return (

    <div>

        <h2> Axios Ilustration</h2>
        

            
        
    </div> 
 );

}

