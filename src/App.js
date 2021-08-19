import "./App.css";
import { useState } from "react";
import CityWeather from "./layout/CityWeather";

function App() {
	const [city, setCity] = useState("");
	const [inputError, setInputError] = useState(false);
	const [inputErrorMessage, setInputErrorMessage] = useState("");
	let [isFetch, setFetch] = useState(false);
	const [weather, setWeather] = useState(false);
	const [forecast, setForecast] = useState(false);
	const APIkey = "67fccf071e4c18dd1da570918ad48e4a";
	const currentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;
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

	const handleInputChange = (e) => {
		setCity(e.target.value);
	};

	return (
		<div className="App">
			<input
				type="text"
				placeholder="Enter city name..."
				onChange={handleInputChange}
				value={city}
			/>
			{inputError ? <p>{inputErrorMessage}</p> : null}
			<button onClick={handleFetchClick}>Klik</button>
			{typeof weather.main != "undefined" ? (
				<CityWeather weather={weather} />
			) : (
				" "
			)}
		</div>
	);
}

export default App;
