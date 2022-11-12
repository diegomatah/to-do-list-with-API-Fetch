import React, { useState, useEffect} from "react";
import Header from "./header.jsx";
import Form from "./form.jsx";
import List from "./list.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
function Home() {
  const [listaTareas, setlistaTareas] = useState([]);

useEffect(()=>{
	fetch("https://assets.breatheco.de/apis/fake/todos/user/diegomata")
  .then(response => response.json())
  .then(result => setlistaTareas(result))
  .catch(error => console.log('error', error));
},[]);

  var requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify([...listaTareas]),
    redirect: "follow"
  };

  fetch(
    "https://assets.breatheco.de/apis/fake/todos/user/diegomata",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  const nuevaTarea = (actividad) => {
    console.log(actividad);
    setlistaTareas([actividad, ...listaTareas]);
  };

  const borrar = (id) => {
    const listaFiltrada = listaTareas.filter((e, index) => index !== id);
    setlistaTareas(listaFiltrada);

	var requestOptions = {
		method: "PUT",
		headers: {
		  "Content-Type": "application/json"
		},
		body: JSON.stringify([...listaFiltrada]),
		redirect: "follow"
	  };
	
	  fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/diegomata",
		requestOptions
	  )
		.then((response) => response.json())
		.then((result) => console.log(result))
		.catch((error) => console.log("error", error));
  };

  

  return (
    <div className="Main container">
      <Header />
      <Form nuevaTarea={nuevaTarea} />
      <div className="Lista1">
        {listaTareas.map((e, index) => (
          <List key={index} list={e} borrar={borrar} id={index} />
        ))}
      </div>
      <div className="pendiente">
        <h6>Tareas pendientes: {listaTareas.length}</h6>
      </div>
    </div>
  );
}

export default Home;
