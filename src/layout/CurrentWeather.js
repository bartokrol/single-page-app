const CurrentWeather = ({ weather }) => {
	const weatherImg = weather.weather[0].icon;
	return (
		<div classame="App__forecast__currentWeather">
			<h1 classame="App__forecast__currentWeather__cityName">
				{weather.name}, {weather.sys.country}
			</h1>
			<p classame="App__forecast__currentWeather__weather">
				{weather.weather[0].main}
			</p>
			<p classame="App__forecast__currentWeather__temp">
				{weather.main.temp}
			</p>
			<img
				src={`http://openweathermap.org/img/wn/${weatherImg}@2x.png`}
				alt="weatherImg"
			/>
		</div>
	);
};

export default CurrentWeather;
