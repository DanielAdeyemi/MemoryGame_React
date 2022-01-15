import { useEffect, useState } from "react";
import SingleCard from "./components/SingleCard";
import "./styles/App.scss";

const cardImg = [
	{ src: "/img/helmet-1.png", matched: false },
	{ src: "/img/potion-1.png", matched: false },
	{ src: "/img/ring-1.png", matched: false },
	{ src: "/img/scroll-1.png", matched: false },
	{ src: "/img/shield-1.png", matched: false },
	{ src: "/img/sword-1.png", matched: false },
];

function App() {
	const [cards, setCards] = useState([]);
	const [turns, setTurns] = useState(0);
	const [choiceOne, setChoiceOne] = useState(null);
	const [choiceTwo, setChoiceTwo] = useState(null);
	const [disabled, setDisabled] = useState(false);

	useEffect(() => {
		shuffleCards();
	}, []);

	useEffect(() => {
		if (turns > 11) {
			// logic for pop-up message that all turns were used - you lost
		}
	}, [turns]);

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
			setDisabled(true);
			if (choiceOne.src === choiceTwo.src) {
				choiceOne.matched = true;
				choiceTwo.matched = true;
			}
			setTimeout(() => resetTurn(), 500);
		}
	};

	const resetTurn = () => {
		setChoiceOne(null);
		setChoiceTwo(null);
		setDisabled(false);
		setTurns((prevTurn) => prevTurn + 1);
	};

	return (
		<div className="App">
			<h1>Magic Match</h1>
			<button onClick={shuffleCards}>New Game</button>
			<div className="card-grid">
				{cards.map((card) => (
					<SingleCard
						key={card.id}
						card={card}
						handleChoice={handleChoice}
						flipped={card === choiceOne || card === choiceTwo || card.matched}
						disabled={disabled}
					/>
				))}
			</div>
			<div className="turns">
				# of turns: <span id="num">{turns}</span>
			</div>
		</div>
	);
}

export default App;
