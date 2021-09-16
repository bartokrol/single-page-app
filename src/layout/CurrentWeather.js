const CurrentWeather = ({ weather, weatherAppNavClassName }) => {
	const weatherImg = weather.weather[0].icon;
	const className = `${weatherAppNavClassName}__currentWeather`;
	return (
		<div className={className}>
			<h1 className={`${className}__cityName`}>
				{weather.name}, {weather.sys.country}
			</h1>
			<p className={`${className}__weatherDesc`}>
				{weather.weather[0].main}
			</p>
			<p className={`${className}__temp`}>{weather.main.temp}</p>
			<img
				className={`${className}__weatherImg`}
				src={`http://openweathermap.org/img/wn/${weatherImg}@2x.png`}
				alt="weatherImg"
			/>
		</div>
	);
};

export default CurrentWeather;
