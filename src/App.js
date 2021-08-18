import "./App.css";
import { useState, useEffect } from "react";

function App() {
	const [city, setCity] = useState("");
	const [isFetch, setFetch] = useState(false);
	const [apiData, setApiData] = useState("");
	const APIkey = "67fccf071e4c18dd1da570918ad48e4a";
	// const city = "Sopot";
	const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;

	useEffect(() => {
		if (isFetch && city) {
			fetch(api)
				.then((response) => response.json())
				.then((data) => {
					setApiData(data);
					setFetch(false);
				})
				.catch((error) => console.log(error));
		}
	}, [apiData, isFetch, city, api]);

	const handleFetchClick = () => {
		const ifFetch = !isFetch;
		setFetch(ifFetch);
	};

	const handleInputChange = (e) => {
		const inputValue = e.target.value;
		setCity(inputValue);
	};

	return (
		<div className="App">
			<input
				type="text"
				placeholder="Enter city name..."
				onChange={handleInputChange}
				value={city}
			/>
			<button onClick={handleFetchClick}>Klik</button>
			<p>{apiData.name}</p>
		</div>
	);
}

export default App;
