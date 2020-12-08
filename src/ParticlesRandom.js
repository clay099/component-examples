import React, { useRef, useEffect, useState } from "react";

const ParticlesRandom = () => {
	let el = useRef(null);

	useEffect(() => {
		let canvas = el.current;
		let context = canvas.getContext("2d");

		context.fillStyle = "black";
		context.fillRect(0, 0, canvas.width, canvas.height);

		let particles = {};
		let particleIndex = 0;
		let settings = {
			density: 25,
			particleSize: 10,
			startingX: canvas.width / 2,
			startingY: canvas.height / 4,
			gravity: 0.5,
			maxLife: 100,
			groundLevel: canvas.height * 0.75,
			leftWall: canvas.width * 0.05,
			rightWall: canvas.width * 0.95,
		};

		class Particle {
			constructor() {
				//establish starting position and velocities
				this.x = settings.startingX;
				this.y = settings.startingY;

				//Random X & Y Velocities
				this.vx = Math.random() * 20 - 10;
				this.vy = Math.random() * 20 - 5;
				console.log("new particle");

				//add new particles to the index
				particleIndex++;
				particles[particleIndex] = this;
				this.id = particleIndex;
				this.life = 0;
			}

			draw() {
				this.x += this.vx;
				this.y += this.vy;

				//bounce off the ground
				if (this.y + settings.particleSize > settings.groundLevel) {
					this.vy *= -0.6;
					this.vx *= 0.75;
					this.y = settings.groundLevel - settings.particleSize;
				}

				//bounce off the left wall
				if (this.x - settings.particleSize <= settings.leftWall) {
					this.vx *= -1;
					this.x = settings.leftWall + settings.particleSize;
				}

				//bounce off right wall
				if (this.x + settings.particleSize >= settings.rightWall) {
					this.vx *= -1;
					this.x = settings.rightWall - settings.particleSize;
				}

				//adjust for gravity
				this.vy += settings.gravity;

				//age the particle
				this.life++;

				//if particle is old, remove it
				if (this.life >= settings.maxLife) {
					delete particles[this.id];
				}

				//create the shapes
				context.beginPath();
				context.fillStyle = `#ffffff`;
				context.arc(
					this.x,
					this.y,
					settings.particleSize,
					0,
					Math.PI * 2,
					true
				);
				context.closePath();
				context.fill();
			}
		}

		// Draw shapes on the canvas using an interval of 30ms
		setInterval(function () {
			// Erase canvas on each re-render
			context.fillStyle = "black";
			context.fillRect(0, 0, canvas.width, canvas.height);
			//draw a left, right wall and floor
			context.fillStyle = "white";
			context.fillRect(0, 0, settings.leftWall, canvas.height);
			context.fillRect(
				settings.rightWall,
				0,
				canvas.width,
				canvas.height
			);
			context.fillRect(
				0,
				settings.groundLevel,
				canvas.width,
				canvas.height
			);

			// Draw the particles
			for (let i = 0; i < settings.density; i++) {
				if (Math.random() > 0.97) {
					// Introducing a random chance of creating a particle
					// corresponding to an chance of 1 per second,
					// per "density" value
					new Particle();
				}
			}

			for (let i in particles) {
				particles[i].draw();
			}
		}, 30);
	}, []);

	return (
		<canvas id="particlesRandom" ref={el} width="400" height="300">
			Text displayed is non-supporting browser
		</canvas>
	);
};

export default ParticlesRandom;
