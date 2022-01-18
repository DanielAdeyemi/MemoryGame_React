import React, { useState, useEffect } from "react";

const Timer = ({ time, reset }) => {
	const [[mins, secs], setTime] = useState(time);
	const showTimer =
		mins >= 0
			? `${mins.toString().padStart(2, "0")}:${secs
					.toString()
					.padStart(2, "0")}`
			: "";
	useEffect(() => {
		setTime([time[0], time[1]]);
	}, [time]);

	useEffect(() => {
		const out = () => {
			reset();
		};
		const timer = () => {
			if (mins < 0 || (mins === 0 && secs === 0)) {
				out();
			} else if (secs === 0) {
				setTime([mins - 1, 59]);
			} else {
				setTime([mins, secs - 1]);
			}
		};
		const timerId = setInterval(() => timer(), 1000);
		return () => clearInterval(timerId);
	}, [mins, secs]);

	return (
		<>
			<p>{showTimer}</p>
		</>
	);
};

export default Timer;
