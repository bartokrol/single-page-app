import "./App.css";
import { useState, useEffect } from "react";

function App() {
	const APIkey = "67fccf071e4c18dd1da570918ad48e4a";
	const city = "Sopot";
	const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;
	const [isFetch, setFetch] = useState(false);
	const [apiData, setApiData] = useState("");

	useEffect(() => {
		if (isFetch) {
			fetch(api)
				.then((response) => response.json())
				.then((data) => {
					setApiData(data);
					setFetch(false);
				})
				.catch((error) => console.log(error));
		}
	}, [apiData, isFetch, api]);

	const handleFetchClick = () => {
		const ifFetch = !isFetch;
		setFetch(ifFetch);
	};

	return (
		<div className="App">
			<button onClick={handleFetchClick}>Klik</button>
			<p>{apiData.name}</p>
		</div>
	);
}

export default App;
