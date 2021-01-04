import React from "react";
import "./Loader.css";

const Loader = ({ message = false }) => {
	return (
		<div className="loader-container">
			<div className="loader" />
		</div>
	);
};

export default Loader;
