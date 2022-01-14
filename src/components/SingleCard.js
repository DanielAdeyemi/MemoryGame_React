import "../styles/SingleCard.scss";

const SingleCard = ({ card, handleChoice, flipped }) => {
	console.log(card);
	const handleClick = () => {
		handleChoice(card);
	};

	return (
		<>
			<div className="card">
				<div className={flipped ? "flipped" : ""}>
					<img className="front" src={card.src} alt="card front" />
					<img
						className="back"
						src="/img/cover.png"
						onClick={handleClick}
						alt="card back"
					/>
				</div>
			</div>
		</>
	);
};

export default SingleCard;
