import React, { useState } from "react";
import Header from "./header.jsx";
import Form from "./form.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	return (
		<div className="Main">
			<Header/>
			<Form/>
		</div>
	);
};

export default Home;
