<template>
	<div id="healthreport">
		<chartjs-radar class="charts" :labels="labels" :datasets="datasets" :option="option"></chartjs-radar>
	</div>
</template>

<script>
	export default {
		name: "healthreport",
		data() {
			return {
				labels: [
					"収納期血圧",
					"拡張期血圧",
					"空腹時血糖",
					"HbA1c",
					"中性脂肪",
					"HDL",
					"LDL",
					"腹囲",
					"BMI"
				],
				datasets: [
					{
						label: "2018",
						data: [340, 316, 256, 250, 210, 206, 256, 260, 260],
						backgroundColor: "transparent",
						pointBackgroundColor: "red",
						borderColor: "red"
					},
					{
						label: "2019",
						data: [280, 260, 230, 246, 230, 250, 256, 240, 250],
						backgroundColor: "transparent",
						pointBackgroundColor: "blue",
						borderColor: "blue"
					}
				],
				option: {
					legend: {
						display: false,
						fullWidth: false,
						position: "bottom"
					},
					scale: {
						ticks: {
							display: false
						},
						gridLines: {
							circular: true
						},
						pointLabels: {
							fontSize: 15
						}
					}
				}
			};
		}
	};
</script>

<style lang="scss" scoped>
	.charts {
		width: 99.8% !important;
		height: 184px !important;
		background: url("../assets/img/radar.png") center center;
		background-repeat: no-repeat;
	}
</style>