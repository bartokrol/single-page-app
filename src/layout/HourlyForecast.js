const HourlyForecast = ({ forecastDates }) => {
	const forecast = forecastDates.map((forecast) => (
		<h1 key={forecast}>{forecast}</h1>
	));
	return forecast;
};

export default HourlyForecast;
