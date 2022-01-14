import "../styles/SingleCard.scss";

const SingleCard = ({ card }) => {
	return (
		<>
			<div className="card">
				<div>
					<img className="front" src={card.src} alt="card front" />
					<img className="back" src="/img/cover.png" alt="card back" />
				</div>
			</div>
		</>
	);
};

export default SingleCard;
