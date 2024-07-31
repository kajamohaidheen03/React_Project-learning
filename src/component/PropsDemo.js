const ParentComponent =(props) =>{
    return(

        <div>
            <h1>{props.greet}</h1>

            <ChildComponent name ="john "> hi </ChildComponent>
        </div>
    );
}
export default ParentComponent

const ChildComponent = (props) =>{
    return (
         
   <div>


     <h1> hi {props.name}</h1>
     <button> {props.children}</button>




   </div>
    );
}