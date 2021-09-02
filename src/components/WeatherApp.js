import "../styles/weatherApp.css";
import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StartingPage from "../layout/StartingPage";
import CurrentWeather from "../layout/CurrentWeather";
import WeatherAppNav from "../layout/WeatherAppNav";
import DailyHourlyForecast from "../layout/DailyHourlyForecast";

function App() {
	const [city, setCity] = useState("");
	const [tempUnit, setTempUnit] = useState("");
	const [inputError, setInputError] = useState(false);
	const [inputErrorMessage, setInputErrorMessage] = useState("");
	const [tempUnitForWeatherChosen, setTempUnitForWeatherChosen] =
		useState(false);
	const [startingPageVisibility, setStartingPageVisibility] = useState(true);
	const [navigationVisibility, setNavigationVisibility] = useState(false);
	let [isFetch, setFetch] = useState(false);
	const [weather, setWeather] = useState(false);
	const [forecast, setForecast] = useState(false);
	const [forecastDates, setForecastDates] = useState(false);
	const [forecastHours, setForecastHours] = useState(false);
	const [forecastShow, setForecastShown] = useState(false);
	const [forecastTemp, setForecastTemp] = useState(false);
	const [daysWithHours, setDaysWithHours] = useState(false);

	const APIkey = "67fccf071e4c18dd1da570918ad48e4a";
	const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}${tempUnit}&appid=${APIkey}`;
	const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}${tempUnit}&appid=${APIkey}`;
	const weatherAppClassName = "weatherApp";

	const handleFetchClick = () => {
		setWeather("");
		isFetch = true;
		setFetch(isFetch);

		if (city && tempUnitForWeatherChosen) {
			setCity("");
			setNavigationVisibility(true);
			setStartingPageVisibility(false);
		}
		checkForInputErrorAndTempUnit();
		if (isFetch && city && tempUnitForWeatherChosen) {
			fetch(weatherUrl)
				.then((response) => response.json())
				.then((data) => {
					setWeather(data);
					setFetch(false);
					handleWrongCityNameInputError(city, data);
					setNavigationVisibility(true);
					setCity("");
					setForecastDates(false);
					setForecastHours(false);
					setForecastShown(false);
					setForecastTemp(false);
					setDaysWithHours(false);
				})
				.catch((error) => console.log(error));
			fetch(forecastUrl)
				.then((response) => response.json())
				.then((data) => {
					setForecast(data);
				})
				.catch((error) => console.log(error));
		}
	};

	const checkForInputErrorAndTempUnit = () => {
		setInputError(false);
		if (!city.length) {
			setInputError(true);
			setInputErrorMessage("Enter city name");
		}
		if (city.length && !tempUnitForWeatherChosen) {
			setInputError(true);
			setInputErrorMessage("Temperature unit has to be chosen");
		}
	};

	const handleWrongCityNameInputError = (city, data) => {
		if (city.length !== 0 && typeof data.main == "undefined") {
			const inputError = true;
			setInputError(inputError);
			setInputErrorMessage("Enter correct city name");
		}
	};

	const showForecast = (e) => {
		const dates = [];
		const hours = [];
		const days = [];
		const daysWithHours = [];
		forecast.list.forEach((el) => {
			const lastDate = forecast.list[
				forecast.list.length - 1
			].dt_txt.slice(0, 10);
			const day = el.dt_txt.slice(0, 10);
			const hour = el.dt_txt.slice(11);
			const temp = el.main.temp;
			const numberOfDates = dates.length - 1;
			const nextDate = dates[numberOfDates];

			days.push({
				day,
				hour,
				temp,
			});

			if (
				dates.length === 0 ||
				(day !== nextDate && nextDate !== undefined) ||
				(day === lastDate && !dates.indexOf(day))
			) {
				dates.push(day);
			}

			if (hours.length === 0) {
				hours.push(hour);
			}

			if (hours.indexOf(hour) === -1) {
				hours.push(hour);
			}
		});
		let specificDay = [];
		let count = 0;
		for (let day of days) {
			const dayIndex = days.indexOf(day);
			const nextDayIndex = dayIndex === 39 ? dayIndex : dayIndex + 1;
			const lastDay = days[39].day;

			if (typeof days[nextDayIndex] !== "undefined" || dayIndex === 39) {
				if (
					days[dayIndex].day === days[nextDayIndex].day ||
					days[dayIndex].hour === "21:00:00" ||
					days[dayIndex].day === lastDay
				) {
					count++;
					specificDay.push({
						day: days[dayIndex].day,
						hour: days[dayIndex].hour,
						temp: days[dayIndex].temp,
					});
				}
				if (days)
					if (
						days[dayIndex].day !== days[nextDayIndex].day ||
						count === 40
					) {
						daysWithHours.push(specificDay);
						specificDay = [];
					}
			}
		}
		setForecastDates(dates);
		setForecastHours(hours);
		setDaysWithHours(daysWithHours);
	};
	const handleInputChange = (e) => {
		const city = e.target.value;
		setCity(city);
	};

	const handleHoursTemp = (e) => {
		const hourBtnValue = e.target.value;
		const days = [];
		const temps = [];

		daysWithHours.forEach((day) =>
			day.forEach((el) => {
				if (el.hour === hourBtnValue) {
					days.push(el.day);
					temps.push(el.temp);
				}
			})
		);

		setForecastShown(true);
		setForecastDates(days);
		setForecastTemp(temps);
	};

	const handleTempUnit = (e) => {
		const unit = e.target.dataset.unit;
		setTempUnit(unit);
		setTempUnitForWeatherChosen(true);
	};

	const handleClearUnit = () => {
		setTempUnitForWeatherChosen(false);
	};

	const forecastNav =
		typeof weather.main != "undefined" ? (
			<>
				<WeatherAppNav
					weatherAppNavClassName={`${weatherAppClassName}`}
					click={showForecast}
				/>
			</>
		) : (
			" "
		);
	const handleStartingPageVisibility = () => {
		setStartingPageVisibility(true);
		setNavigationVisibility(false);
		setTempUnitForWeatherChosen(false);
	};

	return (
		<Router>
			<div className={weatherAppClassName}>
				<StartingPage
					startingPageVisibility={startingPageVisibility}
					change={handleInputChange}
					city={city}
					inputError={inputError}
					inputErrorMessage={inputErrorMessage}
					click={handleFetchClick}
					clickUnit={handleTempUnit}
					tempUnitForWeatherChosen={tempUnitForWeatherChosen}
					clearUnit={handleClearUnit}
					clickStartingPageVisibility={handleStartingPageVisibility}
					startingPageBasicClass={weatherAppClassName}
				/>
				{navigationVisibility ? forecastNav : null}
				<>
					<Route
						path="/currentWeather"
						render={(props) => (
							<CurrentWeather
								{...props}
								weather={weather}
								weatherAppNavClassName={`${weatherAppClassName}`}
							/>
						)}
					></Route>
					<Route
						path="/hourlyForecast"
						render={(props) => (
							<DailyHourlyForecast
								{...props}
								forecastShow={forecastShow}
								forecastDates={forecastDates}
								forecastHours={forecastHours}
								forecastTemp={forecastTemp}
								daysWithHours={daysWithHours}
								click={handleHoursTemp}
								dailyHourlyClassName={weatherAppClassName}
							/>
						)}
					></Route>
				</>
			</div>
		</Router>
	);
}

export default App;
