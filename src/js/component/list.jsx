import React from "react"


const List = (props) => {  
    const borrarTarea = ()=> {
        props.borrar(props.id);
    }
    return (
        <div class="List">
       <span>{props.list}</span><button onClick={borrarTarea}>X</button>
      </div>
  );
}


export default List;