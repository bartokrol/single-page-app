import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CurrentWeather from "./layout/CurrentWeather";
import ForecastNav from "./layout/ForecastNav";
import HourlyForecast from "./layout/HourlyForecast";

function App() {
	const [city, setCity] = useState("");
	const [inputError, setInputError] = useState(false);
	const [inputErrorMessage, setInputErrorMessage] = useState("");
	let [isFetch, setFetch] = useState(false);
	const [weather, setWeather] = useState(false);
	const [forecast, setForecast] = useState(false);
	const [forecastDates, setForecastDates] = useState(false);
	const [forecastHours, setForecastHours] = useState(false);
	const [forecastTemp, setForecastTemp] = useState(false);

	const APIkey = "67fccf071e4c18dd1da570918ad48e4a";
	const currentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`;
	const forecastWeather = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${APIkey}`;

	const handleFetchClick = () => {
		setInputError(false);

		isFetch = true;
		setFetch(isFetch);

		if (city.length === 0) {
			const inputError = true;
			setInputError(inputError);
			setInputErrorMessage("Enter city name");
		}

		if (isFetch && city) {
			fetch(currentWeather)
				.then((response) => response.json())
				.then((data) => {
					setWeather(data);
					setFetch(false);
					handleWrongCityNameInputError(city, data);
				})
				.catch((error) => console.log(error));

			fetch(forecastWeather)
				.then((response) => response.json())
				.then((data) => {
					setForecast(data);
					setFetch(false);
				})
				.catch((error) => console.log(error));
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
			const day = el.dt_txt.slice(0, 10);
			const hour = el.dt_txt.slice(11);
			const numberOfDates = dates.length - 1;
			const lastDate = dates[numberOfDates];

			// console.log(day);
			// console.log(hour);
			days.push({
				day,
				hour,
			});
			// console.log(days);

			// const hour = el.dt_txt.slice(11);

			// if (dates.length === 0) {
			// 	dates.push(day);
			// }

			// if (day !== lastDate && lastDate !== undefined) {
			// 	dates.push(day);
			// }

			// if (hours.length === 0) {
			// 	hours.push(hour);
			// }

			// if (hours.indexOf(hour) === -1) {
			// 	hours.push(hour);
			// }
		});

		let specificDay = [];

		for (let day of days) {
			const dayIndex = days.indexOf(day);
			const nextDayIndex = dayIndex + 1;
			if (typeof days[nextDayIndex] !== "undefined") {
				if (days[dayIndex].day === days[nextDayIndex].day) {
					specificDay.push({
						day: days[dayIndex].day,
						hour: days[dayIndex].hour,
					});
				} else {
					daysWithHours.push(specificDay);
					specificDay = [];
				}
			}
		}
		console.log(daysWithHours);
		// dates.shift();
		// hours.shift();
		// setForecastDates(dates);
		// setForecastHours(hours);
		// handleHoursTemp(e);
	};
	const handleInputChange = (e) => {
		setCity(e.target.value);
	};

	// const handleHoursTemp = (e) => {
	// 	const hourBtnValue = e.target.value;
	// 	const forecastTemp = [];
	// 	forecast.list.forEach((el) => {
	// 		const hour = el.dt_txt.slice(11);
	// 		console.log(el.dt_txt.slice(0, 10));
	// 		console.log(hour);
	// 		console.log(el.main.temp);
	// 		const temp = el.main;
	// 		if (hour === hourBtnValue) {
	// 			forecastTemp.push(temp.temp);
	// 		}
	// 	});
	// 	forecastTemp.shift();
	// 	console.log(forecastTemp);
	// 	setForecastTemp(forecastTemp);
	// };

	return (
		<Router>
			<div className="App">
				<input
					type="text"
					placeholder="Enter city name..."
					onChange={handleInputChange}
					value={city}
					className="App__searchInput"
				/>
				{inputError ? <p>{inputErrorMessage}</p> : null}
				<button className="App__fetchBtn" onClick={handleFetchClick}>
					Klik
				</button>
				{typeof weather.main != "undefined" ? (
					<div classame="App__forecast">
						<ForecastNav click={showForecast} />
					</div>
				) : (
					" "
				)}

				<Route
					path="/currentWeather"
					render={(props) => (
						<CurrentWeather {...props} weather={weather} />
					)}
				></Route>
				<Route
					path="/hourlyForecast"
					render={(props) => (
						<HourlyForecast
							{...props}
							forecastDates={forecastDates}
							forecastHours={forecastHours}
							forecastTemp={forecastTemp}
							// click={handleHoursTemp}
						/>
					)}
				></Route>
			</div>
		</Router>
	);
}

export default App;
