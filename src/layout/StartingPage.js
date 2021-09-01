import { Link } from "react-router-dom";

const StartingPage = ({
	startingPageVisibility,
	change,
	city,
	inputError,
	inputErrorMessage,
	click,
	clickUnit,
	tempUnitForWeatherChosen,
	clearUnit,
	clickStartingPageVisibility,
	startingPageBasicClass,
}) => {
	const className = `${startingPageBasicClass}__startingPage`;

	const tempUnitBtns = tempUnitForWeatherChosen ? (
		<Link to="/">
			<button className={`${className}__clearUnitBtn`} onClick={clearUnit}>
				Choose other temperature unit
			</button>
		</Link>
	) : (
		<div className={`${className}__unitsBtns`}>
			<button
				className={`${className}__unitsBtns__btn`}
				onClick={clickUnit}
				data-unit="&units=metric"
				data-city={city}
			>
				Celsius
			</button>
			<button
				className={`${className}__unitsBtns__btn`}
				onClick={clickUnit}
				data-unit=""
				data-city={city}
			>
				Kelvin
			</button>
			<button
				className={`${className}__unitsBtns__btn`}
				onClick={clickUnit}
				data-unit="&units=imperial"
				data-city={city}
			>
				Fahrenheit
			</button>
		</div>
	);

	const cityInputAndSubmitBtn = (
		<div className={`${className}__cityInputContainer`}>
			<input
				className={`${className}__cityInputContainer__input`}
				type="text"
				placeholder="Enter city name..."
				onChange={change}
				value={city}
			/>
			{inputError ? <p className={`${className}__cityInputContainer__errorMsg`}>{inputErrorMessage}</p> : null}
			<button
				className={`${className}__cityInputContainer__fetchBtn`}
				onClick={click}
			>
				Klik
			</button>
		</div>
	);

	return (
		<div>
			{startingPageVisibility ? (
				<>
					{cityInputAndSubmitBtn}
					{tempUnitBtns}
				</>
			) : (
				<Link to="/">
					<button
						className={`${className}__clearBtn`}
						onClick={clickStartingPageVisibility}
					>
						Choose new city
					</button>
				</Link>
			)}
		</div>
	);
};

export default StartingPage;
