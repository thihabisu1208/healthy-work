<script>
	import { Doughnut } from "vue-chartjs";

	export default {
		name: "chart",
		extends: Doughnut,
		props: [
			"todayChartYellowData",
			"todayChartRedData",
			"todayChartGreenData",
			"options"
		],
		watch: {
			todayChartYellowData() {
				this.renderDoughnutChart();
			}
		},
		methods: {
			renderDoughnutChart() {
				this.renderChart(
					{
						labels: ["赤カロリー", "緑カロリー", "黄カロリー", "平均のカロリー"],
						datasets: [
							{
								data: this.todayChartYellowData,
								backgroundColor: ["#FFB3B3", "#A9E6A3", "#FFDE6C", "#D8DED8"]
							},
							{
								data: this.todayChartRedData,
								backgroundColor: ["#FFB3B3", "#A9E6A3", "#FFDE6C", "#D8DED8"]
							},
							{
								data: this.todayChartGreenData,
								backgroundColor: ["#FFB3B3", "#A9E6A3", "#FFDE6C", "#D8DED8"]
							}
						]
					},
					this.options
				);
			}
		},
		mounted() {
			this.renderDoughnutChart();
		}
	};
</script>
