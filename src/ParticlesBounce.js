import React, { useRef, useEffect } from "react";

const ParticlesBounce = () => {
	let el = useRef(null);

	useEffect(() => {
		let canvas = el.current;
		let context = canvas.getContext("2d");

		/* CIRCLE
		// After setting the fill style, draw an arc on the canvas
		context.beginPath();
		context.arc(500, 200, 10, 0, Math.PI * 2, true);
		context.closePath();
    context.fill();
    */
		//initial position
		let posX = 20;
		let posY = 150;

		//initial velocities
		let vx = 10;
		let vy = -10;
		let gravity = 0.5;

		context.fillStyle = "black";
		context.fillRect(0, 0, canvas.width, canvas.height);

		// Draw shapes on the canvas using an interval of 30ms
		setInterval(function () {
			// Erase canvas on each re-render
			context.fillStyle = "black";
			context.fillRect(0, 0, canvas.width, canvas.height);

			//move x & y for each re-render
			posX += vx;
			posY += vy;
			vy += gravity;

			//bounce off the left wall
			if (posX <= canvas.width * 0.05) {
				vx *= -1;
				posX = canvas.width * 0.05;
			}

			//bounce off right wall
			if (posX >= canvas.width * 0.95) {
				vx *= -1;
				posX = canvas.width * 0.95;
			}

			// cause bounce effect when 75% of the canvas height
			if (posY > canvas.height * 0.75) {
				vy *= -0.6;
				vx *= 0.75;
				posY = canvas.height * 0.75;
			}

			// Draw a circle particle on the canvas
			context.beginPath();
			context.fillStyle = "white";
			// After setting the fill style, draw an arc on the canvas
			context.arc(posX, posY, 10, 0, Math.PI * 2, true);
			context.closePath();
			context.fill();
		}, 30);
	}, []);

	return (
		<canvas id="particlesBounce" ref={el} width="400" height="200">
			Text displayed is non-supporting browser
		</canvas>
	);
};

export default ParticlesBounce;
