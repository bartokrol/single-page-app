const StartingPage = ({
	change,
	city,
	inputError,
	inputErrorMessage,
	click,
	clickUnit,
	tempUnitChosen,
	clearUnit
}) => {
	const tempUnitBtns = tempUnitChosen ? <button onClick={clearUnit}>Choose other temperature unit</button> : (
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

	return (
		<div>
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
			{tempUnitBtns}
		</div>
	);
};

export default StartingPage;
