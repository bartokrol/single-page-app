import { Link } from "react-router-dom";

const ForecastNav = ({ click }) => {
	const basicTemp = "15:00:00";
	return (
		<ul classame="App__forecast__nav">
			<li classame="App__forecast__nav__navItem">
				<Link to="/currentWeather">Current Weather</Link>
			</li>
			<li classame="App__forecast__nav__navItem" onClick={click}>
				<Link to="/hourlyForecast" value={basicTemp}>
					Hourly Forecast
				</Link>
			</li>
		</ul>
	);
};

export default ForecastNav;
