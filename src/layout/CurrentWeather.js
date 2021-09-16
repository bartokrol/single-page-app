const CurrentWeather = ({ weather, weatherAppNavClassName, tempUnit }) => {
	if (weather === false) {
		let localWeather = JSON.parse(localStorage.weather);
		weather = localWeather;
	}

	const weatherImg = weather.weather[0].icon;
	const className = `${weatherAppNavClassName}__currentWeather`;

	const findUnit = () => {
		switch (tempUnit) {
			case "&units=metric":
				return (
					<span className={`${className}__temp__unit`}>&#8451;</span>
				);
			case "&units=imperial":
				return (
					<span className={`${className}__temp__unit`}>&#8457;</span>
				);
			default:
				return (
					<span className={`${className}__temp__unit`}>&#8490;</span>
				);
		}
	};
	const unit = findUnit();

	return (
		<div className={className}>
			<h1 className={`${className}__cityName`}>
				{weather.name}, {weather.sys.country}
			</h1>
			<p className={`${className}__weatherDesc`}>
				{weather.weather[0].main}
			</p>
			<p className={`${className}__temp`}>
				{weather.main.temp} {unit}
			</p>
			<img
				className={`${className}__weatherImg`}
				src={`http://openweathermap.org/img/wn/${weatherImg}@2x.png`}
				alt="weatherImg"
			/>
		</div>
	);
};

export default CurrentWeather;
