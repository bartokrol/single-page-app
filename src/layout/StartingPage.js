import { Link } from "react-router-dom";

const StartingPage = ({
	change,
	city,
	inputError,
	inputErrorMessage,
	click,
	clickUnit,
	tempUnitForWeatherChosen,
	clearUnit,
}) => {
	const tempUnitBtns = tempUnitForWeatherChosen ? (
		<Link to="/">
			<button onClick={clearUnit}>Choose other temperature unit</button>
		</Link>
	) : (
		<div>
			<button
				onClick={clickUnit}
				data-unit="&units=metric"
				data-city={city}
			>
				Celsius
			</button>
			<button onClick={clickUnit} data-unit="" data-city={city}>
				Kelvin
			</button>
			<button
				onClick={clickUnit}
				data-unit="&units=imperial"
				data-city={city}
			>
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
