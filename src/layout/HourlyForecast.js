import { Line } from "react-chartjs-2";

const HourlyForecast = ({ forecastDates, forecastHours }) => {
	// const dates = forecastDates.map((forecast) => (
	// 	<h1 key={forecast}>{forecast}</h1>
	// ));
	// const hours = forecastHours.map((forecast) => (
	// 	<h2 key={forecast}>{forecast}</h2>
	// ));

	return (
		<div>
			{/* {dates}
			{hours} */}
			<Line
				data={{
					labels: [...forecastDates],
					datasets: [
						{
							label: "# of Votes",
							data: [12, 7, 3, 5, 2, 3],
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
				height={400}
				width={600}
				options={{ maintainAspectRatio: false }}
			/>
		</div>
	);
};

export default HourlyForecast;
