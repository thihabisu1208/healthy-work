<template>
	<div id="nutrition">
		<Header headerName="食べたお昼ご飯" />
		<div id="nutritionData">
			<div id="selected">
				<h2>選択中</h2>
				<div class="food">
					<div v-for="food in foods" :key="food.id">
						<div class="foodImage">
							<img style="display: inline" :src="'/assets/img/food/' + food.id + '.jpg'" />
						</div>
						<p>{{ food.name }}</p>
					</div>
				</div>
			</div>
			<div>{{ data }}</div>
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
			<p id="save">
				<router-link to="/healthbalance">お昼ご飯を登録</router-link>
			</p>
		</div>
	</div>
</template>

<script>
	import Header from "@/components/Header.vue";

	export default {
		name: "nutrition",
		components: {
			Header
		},
		props: ["data"],
		data() {
			return {
				foods: []
			};
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
	#nutrition {
		margin: 100px 0 15vh;
	}

	#nutritionData {
		h2 {
			position: relative;
			font-weight: normal;
			margin-left: 3%;
		}

		.food {
			width: 100%;
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			margin: 0 10px;
			grid-gap: 15px;
			div {
				.foodImage {
					img {
						width: 100px;
					}
				}
			}
		}

		#chart {
			margin: 20px auto;
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
				margin: 10px 0;
				display: grid;
				grid-template-columns: repeat(3, 1fr);
			}
			p span {
				font-size: 18px;
			}
		}

		#save {
			width: 70%;
			margin: 40px auto;
			background: #ff8f90;
			text-align: center;
			font-size: 25px;
			padding: 15px 20px;
			border-radius: 20px;
			a {
				text-decoration: none;
				color: #fff;
			}
		}
	}
</style>