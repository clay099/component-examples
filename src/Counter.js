import React, { useState } from "react";
import Button from "./Button";

const Counter = () => {
	const [count, setCount] = useState(0);
	const addCount = () => setCount((count) => count + 1);
	const addTwo = () => setCount((count) => count + 2);
	const removeOne = () => setCount((count) => count - 1);
	const removeTwo = () => setCount((count) => count - 2);

	return (
		<div>
			<p>Count is: {count}</p>
			<Button text="Add One" clickHandle={addCount} />
			<Button text="Add Two" clickHandle={addTwo} />
			<Button text="Remove One" clickHandle={removeOne} />
			<Button text="Remove Two" clickHandle={removeTwo} />
		</div>
	);
};

export default Counter;
