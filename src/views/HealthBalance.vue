<template>
	<div id="healthbalance">
		<Header headerName="食事バランス" />
		<Chart />
		<div id="selected">
			<h2>食べたご飯</h2>
			<div class="food">
				<div v-for="food in foods" :key="food.id">
					<div class="foodImage">
						<img style="display: inline" :src="'/assets/img/food/' + food.id + '.jpg'" />
					</div>
					<p>{{ food.name }}</p>
				</div>
			</div>
		</div>
		<div>
			<h2>栄養点数</h2>
		</div>
		<div id="explain">
			<p>
				<span>血液や筋肉を作る</span>
				<span>{{ getTotalRed }} 点</span>
				<span>396/400 kcal</span>
			</p>
			<p>
				<span>体の調子を整える</span>
				<span>{{ getTotalGreen }} 点</span>
				<span>124/240 kcal</span>
			</p>
			<p>
				<span>力や体温となる</span>
				<span>{{ getTotalYellow }} 点</span>
				<span>70/80 kcal</span>
			</p>
		</div>
		<div id="oneDay">
			<div>
				<h3>
					一食の目安
					<span>80 kcal = 1点</span>
				</h3>
				<p>
					<span>緑 : 1点</span>
					<span>赤 : 2点</span>
					<span>黄色 : 5点</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from "@/components/Header.vue";
	import Chart from "@/components/Chart.vue";

	export default {
		name: "healthbalance",
		data() {
			return {
				foods: []
			};
		},
		components: {
			Header,
			Chart
		},
		computed: {
			getTodayFood() {
				this.$http
					.get("/assets/js/nut.json")
					.then(response => {
						var foodData = response.data;
						this.foods = foodData;
					})
					.catch(err => {
						console.log(err);
					});
			},
			getTotalRed() {
				return this.foods.reduce((acc, food) => acc + food.red, 0);
			},
			getTotalGreen() {
				return this.foods.reduce((acc, food) => acc + food.green, 0);
			},
			getTotalYellow() {
				return this.foods.reduce((acc, food) => acc + food.yellow, 0);
			}
		},
		created() {
			this.getTodayFood;
		}
	};
</script>

<style lang="scss" scoped>
	#healthbalance {
		margin: 100px 0 15vh;
		h2 {
			position: relative;
			font-weight: normal;
			margin-left: 3%;
		}

		.food {
			width: 100%;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			margin: 0 5px 0;
			grid-gap: 15px;
			div {
				.foodImage {
					img {
						width: 100px;
					}
				}
			}
		}

		#explain {
			margin-left: 5%;
			p {
				width: 100%;
				display: grid;
				grid-template-columns: 1fr 0.4fr 0.6fr;
				span {
					display: flex;
					align-items: center;
					justify-content: bottom;
				}
				span:nth-of-type(2) {
					font-size: 20px;
				}
				span:nth-of-type(3) {
					color: black;
					text-align: right;
				}
			}
			p:nth-of-type(1) {
				color: #e72059;
			}
			p:nth-of-type(2) {
				color: #92e19a;
			}
			p:nth-of-type(3) {
				color: #fede8a;
			}
		}

		#oneDay {
			width: 90%;
			margin: 0 auto;
			background: #f1c3c3;

			div {
				width: 80%;
				margin: 10px auto;
				padding: 10px 0;
			}

			h3 {
				margin: 10px 0;
			}

			h3 span {
				text-align: right;
			}

			p {
				width: 100%;
				margin: 10px auto;
				display: grid;
				grid-template-columns: repeat(3, 1fr);
			}
			p span {
				font-size: 18px;
			}
		}
	}
</style>
