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
	const APIkey = "67fccf071e4c18dd1da570918ad48e4a";
	const currentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`;
	const forecastWeather = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}`;

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

	const showForecast = () => {
		const dates = [];
		const hours = [];
		forecast.list.forEach((el) => {
			const day = el.dt_txt.slice(0, 10);
			const numberOfDates = dates.length - 1;
			const lastDate = dates[numberOfDates];

			const hour = el.dt_txt.slice(11);

			if (dates.length === 0) {
				dates.push(day);
			}

			if (day !== lastDate && lastDate !== undefined) {
				dates.push(day);
			}

			if (hours.length === 0) {
				hours.push(hour);
			}

			if (hours.indexOf(hour) === -1) {
				hours.push(hour);
			}
		});
		setForecastDates(dates);
	};
	const handleInputChange = (e) => {
		setCity(e.target.value);
	};

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
						/>
					)}
				></Route>
			</div>
		</Router>
	);
}

export default App;
