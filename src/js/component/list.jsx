import React from "react";


const List = (props) => {  
    const borrarTarea = ()=> {
        props.borrar(props.id);
    };
    return (
        <div className="List">
       <span>{props.list.label}</span><button onClick={borrarTarea}>X</button>
      </div>
  );
};


export default List;