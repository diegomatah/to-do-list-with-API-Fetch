import React, { useState } from "react";
import Header from "./header.jsx";
import Form from "./form.jsx";
import List from "./list.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
function Home () {

	const [listaTareas, setlistaTareas] = useState ([]);

	const nuevaTarea = (actividad) => {
		setlistaTareas([actividad, ...listaTareas])
	}

	const borrar = (id) => {
		const listaFiltrada = listaTareas.filter((e,index) => index !== id);
		setlistaTareas(listaFiltrada);
	}

	return (
		<div className="Main container">
			<Header/>
			<Form
			nuevaTarea={nuevaTarea}
			/>
			<div className="Lista1">
			{
				listaTareas.map((e,index) => <List 
					                  list={e}
									  borrar={borrar}
									  id={index}
									  />)
			}
            </div>
			<div className="pendiente">
            <h6>Tareas pendientes: {listaTareas.length}</h6>
			</div>
		</div>
	);
};

export default Home;
