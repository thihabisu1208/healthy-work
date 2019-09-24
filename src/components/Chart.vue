<template>
	<div id="charts">
		<h1>{{ today.getFullYear() }}年 {{ today.getMonth() + 1 }}月 {{ today.getDate() }}日</h1>
		<chartjs-doughnut class="charts" :labels="labels" :datasets="datasets" :option="option"></chartjs-doughnut>
	</div>
</template>

<script>
	// ID	名前	種類	カロリー	タンパク質	脂質	炭水化物	赤	緑	黄
	export default {
		name: "chart",
		data() {
			return {
				labels: ["カロリー", "タンパク質", "脂肪質", "ファイバー"],
				datasets: [
					{
						data: [0, 0, 396, 4],
						backgroundColor: ["#FFB3B3", "#A9E6A3", "#FFDE6C", "#D8DED8"]
					},
					{
						data: [124, 0, 0, 116],
						backgroundColor: ["#FFB3B3", "#A9E6A3", "#FFDE6C", "#D8DED8"]
					},
					{
						data: [0, 70, 0, 10],
						backgroundColor: ["#FFB3B3", "#A9E6A3", "#FFDE6C", "#D8DED8"]
					}
				],
				option: {
					legend: {
						display: false
					}
				},
				today: new Date()
			};
		}
	};
</script>

<style lang="scss" scoped>
	#charts {
	}
	h1 {
		margin: 30px 0 15px;
		text-align: center;
		font-size: 22px;
		font-weight: normal;
	}

	.charts {
		width: 100% !important;
		height: auto !important;
	}
</style>