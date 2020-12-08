import "./App.css";
import Counter from "./Counter";
import Logo from "./Logo";
import ContentLoading from "./ContentLoading";
import ParticlesBounce from "./ParticlesBounce";
import ParticlesRandom from "./ParticlesRandom";

function App() {
	return (
		<div className="App">
			<h1>Basic Components</h1>
			{/* <Logo /> */}
			{/* <Counter /> */}
			{/* <ContentLoading /> */}
			<h2>Particles Bounce</h2>
			<ParticlesBounce />
			<h2>Particles Random</h2>
			<ParticlesRandom />
		</div>
	);
}

export default App;
