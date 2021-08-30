import { Link } from "react-router-dom";

const StartingPage = ({
	change,
	city,
	inputError,
	inputErrorMessage,
	click,
	clickUnit,
	tempUnitChosen,
	clearUnit,
}) => {
	const tempUnitBtns = tempUnitChosen ? (
		<Link to="/">
			<button onClick={clearUnit}>Choose other temperature unit</button>
		</Link>
	) : (
		<div>
			<button onClick={clickUnit} value="&units=metric">
				Celsius
			</button>
			<button onClick={clickUnit} value="">
				Kelvin
			</button>
			<button onClick={clickUnit} value="&units=imperial">
				Fahrenheit
			</button>
		</div>
	);

	const cityInputAndSubmitBtn = (
		<>
			<input
				type="text"
				placeholder="Enter city name..."
				onChange={change}
				value={city}
				className="App__searchInput"
			/>

			{inputError ? <p>{inputErrorMessage}</p> : null}
			<button className="App__fetchBtn" onClick={click}>
				Klik
			</button>
		</>
	);

	return (
		<div>
			{cityInputAndSubmitBtn}
			{tempUnitBtns}
		</div>
	);
};

export default StartingPage;
