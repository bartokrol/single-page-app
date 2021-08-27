import { Line } from "react-chartjs-2";

const HourlyForecast = ({
	forecastDates,
	forecastHours,
	forecastTemp,
	daysWithHours,
	click,
}) => {
	const hours = forecastHours.map((forecast) => (
		<button key={forecast} value={forecast} onClick={click}>
			{forecast}
		</button>
	));

	console.log(forecastDates, forecastTemp);
	// console.log(daysWithHours);

	return (
		<div>
			{hours}
			<Line
				data={{
					labels: [...forecastDates],
					datasets: [
						{
							label: "# of Votes",
							data: [...forecastTemp],
						},
					],
					backgroundColor: [
						"rgba(255, 99, 132, 0.2)",
						"rgba(54, 162, 235, 0.2)",
						"rgba(255, 206, 86, 0.2)",
						"rgba(75, 192, 192, 0.2)",
						"rgba(153, 102, 255, 0.2)",
						"rgba(255, 159, 64, 0.2)",
					],
					borderColor: [
						"rgba(255, 99, 132, 1)",
						"rgba(54, 162, 235, 1)",
						"rgba(255, 206, 86, 1)",
						"rgba(75, 192, 192, 1)",
						"rgba(153, 102, 255, 1)",
						"rgba(255, 159, 64, 1)",
					],
					borderWidth: 1,
				}}
				// height={400}
				// width={600}
				className="graph"
				options={{ maintainAspectRatio: false }}
			/>
		</div>
	);
};

export default HourlyForecast;
