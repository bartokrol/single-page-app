import "./App.css";
import { useState } from "react";
import CityWeather from "./layout/CityWeather";

function App() {
	const [city, setCity] = useState("");
	const [inputError, setInputError] = useState(false);
	let [isFetch, setFetch] = useState(false);
	const [weather, setWeather] = useState(false);
	const APIkey = "67fccf071e4c18dd1da570918ad48e4a";
	const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;

	const handleFetchClick = () => {
		setInputError(false);

		if (city.length === 0) {
			const inputError = true;
			setInputError(inputError);
		}

		isFetch = true;
		setFetch(isFetch);

		if (isFetch && city) {
			fetch(api)
				.then((response) => response.json())
				.then((data) => {
					setWeather(data);
					setFetch(false);
				})
				.catch((error) => console.log(error));
		}

		setFetch(false);
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
			{inputError ? <p>Enter city name</p> : null}
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
