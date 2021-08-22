const ForecastNav = ({click}) => {
	return (
		<ul>
			<li>Current Weather</li>
			<li onClick={click}>Hourly Forecast</li>
		</ul>
	);
};

export default ForecastNav;
