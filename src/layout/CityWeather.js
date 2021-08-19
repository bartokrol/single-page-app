const CityWeather = ({ weather }) => {
	return (
		<div>
			<h1>
				{weather.name}, {weather.sys.country}
			</h1>
			<p>{weather.weather[0].main}</p>
			<p>{weather.main.temp}</p>
		</div>
	);
};

export default CityWeather;
