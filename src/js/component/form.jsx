import React from "react";
import { useState, useEffect } from "react";

function Form () {
  const [tarea, setTarea] = useState("");
  
  return (
    <div className="form-div">
      <form className="form">
        <input className="form-input"
          type="text"
          onChange={(e) => {
            setTarea(e.target.value);
          }}
          placeholder="¿Qué debo hacer?" value={tarea} name="text"
        />
        <button className="todo-button"> Agregar</button>
      </form>
    </div>
  );
}

export default Form;
