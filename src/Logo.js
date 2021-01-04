import React from "react";
import logoSVG from "./Logo.svg";
import svg from "./hi.svg";

import ReactVivus from "react-vivus";

const Logo = () => {
	return (
		<div>
			<h2>Logo Component</h2>
			<ReactVivus
				id="foo"
				option={{
					file: logoSVG,
					animTimingFunction: "EASE",
					type: "delayed",
					onReady: console.log,
				}}
				style={{ height: "300px", width: "300px" }}
				callback={console.log}
			/>
			<ReactVivus
				id="foo"
				option={{
					file: svg,
					animTimingFunction: "EASE",
					type: "delayed",
				}}
				style={{ height: "300px", width: "300px" }}
			/>
		</div>
	);
};

export default Logo;
