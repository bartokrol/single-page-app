const ForecastNav = ({ click }) => {
	return (
		<ul classame="App__forecast__nav">
			<li classame="App__forecast__nav__navItem">Current Weather</li>
			<li classame="App__forecast__nav__navItem" onClick={click}>
				Hourly Forecast
			</li>
		</ul>
	);
};

export default ForecastNav;
