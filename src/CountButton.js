import React from "react";

const CountButton = ({ text, clickHandle }) => {
	return (
		<div>
			<button style={{ fontSize: "1.5rem" }} onClick={clickHandle}>
				{text}
			</button>
		</div>
	);
};

export default CountButton;
