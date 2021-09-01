import { Link } from "react-router-dom";

const ForecastNav = ({ click, weatherAppNavClassName }) => {
	const basicTemp = "15:00:00";
	const className = `${weatherAppNavClassName}__nav`;
	return (
		<ul classame={className}>
			<li classame={`${className}__listItem`}>
				<Link to="/currentWeather">Current Weather</Link>
			</li>
			<li classame={`${className}__listItem`} onClick={click}>
				<Link to="/hourlyForecast" value={basicTemp}>
					Daily Hourly Forecast
				</Link>
			</li>
		</ul>
	);
};

export default ForecastNav;
