<template>
	<div class="selectedFood">
		<form method="POST" action="http://jz.jec.ac.jp/innovative/addRecord.php" id="nutritionData">
			<!-- <div id="nutritionData"> -->
			<div id="selected">
				<div class="selectedHeader">
					<h2 class="icons">
						<font-awesome-icon icon="arrow-left" @click="closeModal()" />
						<span>選択中</span>
					</h2>
				</div>
				<div class="date">
					<input type="date" name="l_date" v-model="getTodayDate" />
					<input type="text" name="e_id" v-model="user" />
				</div>
				<div class="food">
					<div class="foodImage" v-for="food in selectedFood" :key="food.id">
						<img style="display: inline" :src="'http://jz.jec.ac.jp/innovative/jpg/' + food.id + '.jpg'" />
						<p>
							<input type="text" name="m_id[]" v-model="food.id" />
							{{ food.name }}
						</p>
					</div>
				</div>
			</div>
			<h2>栄養点数</h2>
			<div id="explain">
				<div>
					<p>
						<img src="/assets/img/red.png" alt />
					</p>
					<p>
						<span>血液や筋肉を作る</span>
						<span>
							<span>{{ getTotalRed }} 点</span>
							<span>{{ getRed }}/80 kcal</span>
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
							<span>{{ getGreen }}/240 kcal</span>
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
			<p id="save">
				<!-- <input type="submit" @click="submit" value="お昼ご飯を登録" /> -->
				<input type="submit" value="お昼ご飯を登録" />
			</p>
			<!-- </div> -->
		</form>
	</div>
</template>

<script>
	export default {
		props: {
			selectedFood: Array,
			showSelectedFoodModal: Boolean
		},
		data() {
			let today = JSON.stringify(new Date()).slice(1, 11);
			let user = localStorage.getItem("employee");
			let food = this.selectedFood.reduce(
				(result, food) => [...result, food.id],
				[]
			);
			return {
				today: new Date(),
				foodIds: [],
				user: localStorage.getItem("employee"),
				sendFood: {
					l_date: today,
					e_id: user,
					m_id: food
				}
			};
		},
		methods: {
			closeModal() {
				this.$emit("clicked");
			},
			submit() {
				let foodForm = this.toFormData(this.sendFood);
				// let options = {
				// 	method: "POST",
				// 	url: "http://jz.jec.ac.jp/innovative/addRecord.php",
				// 	data: foodForm
				// };
				this.$http
					.post("http://jz.jec.ac.jp/innovative/addRecord.php", foodForm)
					.then(response => {
						console.log(response.data);
						// this.$router.push("/healthbalance");
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
			console.log(this.sendFood);
			console.log(this.getFoodId);
			console.log(this.toFormData(this.sendFood));
		},
		computed: {
			getFoodId() {
				return this.selectedFood.reduce(
					(result, food) => [...result, food.id],
					[]
				);
			},
			getRed() {
				return this.selectedFood.reduce(
					(result, food) => result + food.redcalorie,
					0
				);
			},
			getTotalRed() {
				return Math.fround(
					this.selectedFood.reduce((result, food) => result + food.red, 0)
				).toFixed(2);
			},
			getGreen() {
				return this.selectedFood.reduce(
					(result, food) => result + food.greencalorie,
					0
				);
			},
			getTotalGreen() {
				return Math.fround(
					this.selectedFood.reduce((result, food) => result + food.green, 0)
				).toFixed(2);
			},
			getYellow() {
				return this.selectedFood.reduce(
					(result, food) => result + food.yellowcalorie,
					0
				);
			},
			getTotalYellow() {
				return Math.fround(
					this.selectedFood.reduce((result, food) => result + food.yellow, 0)
				).toFixed(2);
			},
			getTodayDate() {
				return JSON.stringify(this.today).slice(1, 11);
			}
		}
	};
</script>

<style lang="scss" scoped>
	.icons {
		span {
			padding-left: 5px;
		}
	}
	.date {
		display: none;
	}
	.selectedFood {
		margin: 70px 0;
	}

	#nutritionData {
		h2 {
			font-weight: normal;
			margin: 0 0 10px 5%;
		}

		.food {
			width: 100%;
			display: flex;
			margin: 0 10px;
			overflow-x: auto;
			p input {
				display: none;
			}

			.foodImage {
				flex: 2;
				padding: 0 10px;
				flex-wrap: no-wrap;

				img {
					width: 100px;
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
				margin: 2px auto;
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

		#save {
			width: 60%;
			margin: 20px auto;
			background: #ff8f90;
			text-align: center;
			padding: 15px;
			border-radius: 20px;
			input {
				font-size: 22px;
				text-decoration: none;
				color: #fff;
			}
		}
	}
</style>
