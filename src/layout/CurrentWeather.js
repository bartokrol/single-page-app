const CurrentWeather = ({ weather, weatherAppNavClassName, tempUnit }) => {
	const weatherImg = weather.weather[0].icon;
	const className = `${weatherAppNavClassName}__currentWeather`;

	// const kelvin = &#8490;

	const findUnit = () => {
		switch (tempUnit) {
			case "&units=metric":
				return <span>&#8451;</span>;
			case "&units=imperial":
				return <span>&#8457;</span>;
			default:
				return <span>&#8490;</span>;
		}
	};
	const unit = findUnit();
	console.log(unit);
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
