import { Link } from "react-router-dom";

const ForecastNav = ({ click }) => {
	return (
		<ul classame="App__forecast__nav">
			<li classame="App__forecast__nav__navItem">
				<Link to="/cityWeather">Current Weather</Link>
			</li>
			<li classame="App__forecast__nav__navItem" onClick={click}>
				<Link to="/hourlyForecast">Hourly Forecast</Link>
			</li>
		</ul>
	);
};

export default ForecastNav;
