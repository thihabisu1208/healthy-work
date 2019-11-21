<template>
	<div id="healthbalance">
		<Header headerName="食事バランス" />
		<h1>
			{{ today.getFullYear() }}年 {{ today.getMonth() + 1 }}月
			{{ today.getDate() }}日
		</h1>
		<Chart
			class="charts"
			:todayChartYellowData="todayChartYellowData"
			:todayChartRedData="todayChartRedData"
			:todayChartGreenData="todayChartGreenData"
			:options="options"
		/>
		<div v-if="commonFood.length === 0" class="noMenu">
			<p>食事の登録がありません</p>
		</div>
		<div id="selected">
			<h2>食べたご飯</h2>
			<div class="food">
				<div v-for="food in commonFood" :key="food.m_id">
					<div class="foodImage">
						<p>
							<img
								style="display: inline"
								:src="
									'http://jz.jec.ac.jp/innovative/jpg/' + food.m_id + '.jpg'
								"
							/>
						</p>
						<p>{{ food.m_name }}</p>
					</div>
				</div>
			</div>
		</div>
		<div>
			<h2>栄養点数</h2>
		</div>
		<div id="explain">
			<div>
				<p>
					<img src="/assets/img/red.png" alt />
				</p>
				<p>
					<span>血液や筋肉を作る</span>
					<span>
						<span>{{ getTotalRed }} 点</span>
						<span>{{ getRed }}/160 kcal</span>
					</span>
				</p>
			</div>
			<div>
				<p>
					<img src="/assets/img/green.png" alt />
				</p>
				<p>
					<span>体の調子を整える</span>
					<span>
						<span>{{ getTotalGreen }} 点</span>
						<span>{{ getGreen }}/80 kcal</span>
					</span>
				</p>
			</div>
			<div>
				<p>
					<img src="/assets/img/yellow.png" alt />
				</p>
				<p>
					<span>力や体温となる</span>
					<span>
						<span>{{ getTotalYellow }} 点</span>
						<span>{{ getYellow }}/400 kcal</span>
					</span>
				</p>
			</div>
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
				foods: [],
				user: {
					e_id: localStorage.getItem("user")
				},
				foodImage: [],
				today: new Date(),
				options: {
					legend: {
						display: false
					}
				}
			};
		},
		components: {
			Header,
			Chart
		},
		methods: {
			getTodayFood() {
				var logForm = this.toFormData(this.user);
				this.$http({
					method: "POST",
					url: "http://jz.jec.ac.jp/innovative/showTodayRecord.php",
					data: logForm
				})
					.then(response => {
						this.foodImage = response.data.menu;
					})
					.catch(err => {
						console.log(err);
					});
			},
			showFoodData() {
				this.$http({
					method: "GET",
					url: "http://jz.jec.ac.jp/innovative/menu.php"
				})
					.then(response => {
						this.foods = response.data;
					})
					.catch(err => console.log(err));
			},
			toFormData: function(obj) {
				let formData = new FormData();
				for (let key in obj) {
					formData.append(key, obj[key]);
				}
				return formData;
			}
		},
		created() {
			this.getTodayFood();
			this.showFoodData();
		},
		computed: {
			commonFood() {
				return this.foods.filter(el => {
					return this.foodImage.some(f => {
						return f.m_id === el.m_id;
					});
				});
			},
			todayChartYellowData() {
				return [0, 0, this.getYellow, this.getYellow - 400];
			},
			todayChartRedData() {
				return [this.getRed, 0, 0, this.getRed - 160];
			},
			todayChartGreenData() {
				return [0, this.getGreen, 0, this.getGreen - 80];
			},
			getRed() {
				return this.commonFood.reduce((acc, food) => acc + food.m_redcalorie, 0);
			},
			getTotalRed() {
				return Math.fround(
					this.commonFood.reduce((result, food) => result + food.m_red, 0)
				).toFixed(2);
			},
			getGreen() {
				return this.commonFood.reduce(
					(acc, food) => acc + food.m_greencalorie,
					0
				);
			},
			getTotalGreen() {
				return Math.fround(
					this.commonFood.reduce((result, food) => result + food.m_green, 0)
				).toFixed(2);
			},
			getYellow() {
				return this.commonFood.reduce(
					(acc, food) => acc + food.m_yellowcalorie,
					0
				);
			},
			getTotalYellow() {
				return Math.fround(
					this.commonFood.reduce((result, food) => result + food.m_yellow, 0)
				).toFixed(2);
			}
		}
	};
</script>

<style lang="scss" scoped>
	#healthbalance {
		margin: 70px 0;
		background: #fff;
		height: 100%;
		padding: 20px 0;

		h1 {
			margin: 30px 0 15px;
			text-align: center;
			font-size: 22px;
			font-weight: normal;
		}

		.charts {
			margin: 0 auto !important;
			width: 70% !important;
			height: auto !important;
		}

		h2 {
			position: relative;
			font-weight: normal;
			margin-left: 3%;
		}

		.noMenu {
			position: absolute;
			top: 35%;
			left: 25%;
		}

		.food {
			width: 100%;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			margin: 0 auto;
			grid-gap: 0 10px;
			div {
				.foodImage {
					p {
						text-align: center;
					}
					img {
						max-width: 100px;
						border-radius: 16px;
					}
				}
			}
		}

		#explain {
			div {
				margin: 0 auto;
				width: 80%;
				display: grid;
				grid-template-columns: 0.4fr 1fr;
			}

			p {
				margin: 5px auto;
				width: 100%;
				display: grid;
				grid-template-rows: 1fr 1fr;
				span {
					display: flex;
					align-items: center;
					justify-content: bottom;
				}

				span span:nth-of-type(1) {
					font-size: 20px;
				}

				span span:nth-of-type(2) {
					padding-left: 10px;
					font-size: 15px;
				}
			}

			p:nth-of-type(1) {
				display: flex;
				align-items: center;
				justify-content: bottom;
			}

			div:nth-of-type(1) {
				p span:nth-of-type(1) {
					color: #e72059;
				}
			}

			div:nth-of-type(2) {
				p span:nth-of-type(1) {
					color: #92e19a;
				}
			}

			div:nth-of-type(3) {
				p span:nth-of-type(1) {
					color: #fede8a;
				}
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
