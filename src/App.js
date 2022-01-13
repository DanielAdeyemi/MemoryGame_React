import "./App.css";

const cardImg = [
	{ src: "/img/helmet-1.png" },
	{ src: "/img/potion-1.png" },
	{ src: "/img/ring-1.png" },
	{ src: "/img/scroll-1.png" },
	{ src: "/img/shield-1.png" },
	{ src: "/img/sword-1.png" },
];

function App() {
	const shuffleCards = () => {
		const shuffleCards = [...cardImg, ...cardImg] // create an array with 2 cards of each type
			.sort(() => Math.random() - 0.5) // sort and randomize an order (shuffle)
			.map((card) => ({ ...card, id: Math.random() })); // assign an id to each card
	};

	return (
		<div className="App">
			<h1>Magic Match</h1>
			<button>New Game</button>
		</div>
	);
}

export default App;
