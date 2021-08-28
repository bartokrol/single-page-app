const StartingPage = ({
	change,
	city,
	inputError,
	inputErrorMessage,
	click,
}) => {
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
		</div>
	);
};

export default StartingPage;
