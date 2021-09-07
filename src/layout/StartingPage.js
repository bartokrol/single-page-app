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
		<Link to="/" className={`${className}__clearUnitBtn`}>
			<button onClick={clearUnit}>Choose other temperature unit</button>
		</Link>
	) : (
		<>
			<h4 className={`${className}__tempUnitHeading`}>
				Choose temperature unit:
			</h4>
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
		</>
	);

	const cityInputAndSubmitBtn = (
		<>
			<input
				className={`${className}__input`}
				type="text"
				placeholder="Enter city name..."
				onChange={change}
				value={city}
			/>
			{inputError ? (
				<p className={`${className}__errorMsg`}>{inputErrorMessage}</p>
			) : null}
			<button className={`${className}__fetchBtn`} onClick={click}>
				Submit
			</button>
		</>
	);

	return (
		<>
			{startingPageVisibility ? (
				<div className={`${className}`}>
					{cityInputAndSubmitBtn}
					{tempUnitBtns}
				</div>
			) : (
				<div className={`${startingPageBasicClass}__clearArea`}>
					<Link to="/">
						<button
							className={`${startingPageBasicClass}__clearArea__clearBtn`}
							onClick={clickStartingPageVisibility}
						>
							Choose new city
						</button>
					</Link>
				</div>
			)}
		</>
	);
};

export default StartingPage;
