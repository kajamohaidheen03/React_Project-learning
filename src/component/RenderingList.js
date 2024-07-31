export default function RenderingList () {
    const fruit = [
        {name:"kaja",dept:"AIandDS"},
        {name:"raja",dept:"IT"}]

    
return (
    <div>
       
     <ul>
        {fruit.map((item,index) => (

            <li key = { index}> {item.name}</li>
        ))}

     </ul>

    </div>
);
    }
