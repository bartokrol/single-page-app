const CurrentWeather = ({ weather, weatherAppNavClassName }) => {
	const weatherImg = weather.weather[0].icon;
	const className = `${weatherAppNavClassName}__currentWeather`;
	return (
		<div classame={className}>
			<h1 classame={`${className}__cityName`}>
				{weather.name}, {weather.sys.country}
			</h1>
			<p classame={`${className}__weatherDesc`}>
				{weather.weather[0].main}
			</p>
			<p classame={`${className}__temp`}>{weather.main.temp}</p>
			<img
				classame={`${className}__weatherImg`}
				src={`http://openweathermap.org/img/wn/${weatherImg}@2x.png`}
				alt="weatherImg"
			/>
		</div>
	);
};

export default CurrentWeather;
