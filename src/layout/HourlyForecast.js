const HourlyForecast = ({ forecastDates, forecastHours }) => {
	const dates = forecastDates.map((forecast) => (
		<h1 key={forecast}>{forecast}</h1>
	));
	const hours = forecastHours.map((forecast) => (
		<h2 key={forecast}>{forecast}</h2>
	));
	return (
		<div>
			{dates}
			{hours}
		</div>
	);
};

export default HourlyForecast;
