import { useEffect, useState } from "react";
import SingleCard from "./components/SingleCard";
import "./styles/App.scss";

const cardImg = [
	{ src: "/img/helmet-1.png" },
	{ src: "/img/potion-1.png" },
	{ src: "/img/ring-1.png" },
	{ src: "/img/scroll-1.png" },
	{ src: "/img/shield-1.png" },
	{ src: "/img/sword-1.png" },
];

function App() {
	const [cards, setCards] = useState([]);
	const [turns, setTurns] = useState(0);
	const [choiceOne, setChoiceOne] = useState(null);
	const [choiceTwo, setChoiceTwo] = useState(null);

	useEffect(() => {
		compare();
	}, [choiceTwo, choiceOne]);

	const shuffleCards = () => {
		setChoiceOne(null);
		setChoiceTwo(null);
		const shuffleCards = [...cardImg, ...cardImg] // create an array with 2 cards of each type
			.sort(() => Math.random() - 0.5) // sort and randomize an order (shuffle)
			.map((card) => ({ ...card, id: Math.random() })); // assign an id to each card
		setCards(shuffleCards);
		setTurns(0);
	};

	const handleChoice = (card) => {
		choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
	};

	const compare = () => {
		if (choiceOne && choiceTwo) {
			choiceOne.src === choiceTwo.src
				? console.log("match")
				: console.log("not match");
			resetTurn();
		}
	};

	const resetTurn = () => {
		setChoiceOne(null);
		setChoiceTwo(null);
		setTurns((prevTurn) => prevTurn + 1);
	};

	return (
		<div className="App">
			<h1>Magic Match</h1>
			<button onClick={shuffleCards}>New Game</button>
			<div className="card-grid">
				{cards.map((card) => (
					<SingleCard key={card.id} card={card} handleChoice={handleChoice} />
				))}
			</div>
			<div># of turns: {turns}</div>
		</div>
	);
}

export default App;
