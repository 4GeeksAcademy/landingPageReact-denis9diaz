import React from "react";

//include images into your bundle
import Navbar from "./Navbar";
import Cards from "./Cards";
import Text from "./Text";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<Navbar />
			<Text />
			<Cards />
		</div>
	);
};

export default Home;
