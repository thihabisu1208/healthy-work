<template>
	<div id="food">
		<div id="foodMain" class="foodData">
			<h1>主菜</h1>
			<div class="food">
				<div class="food_nav">
					<ul id="foodMainDish"></ul>
				</div>
			</div>
		</div>
		<br />
		<div id="foodSide" class="foodData">
			<h1>副菜</h1>
			<div class="food">
				<div class="food_nav">
					<ul id="foodSideDish"></ul>
				</div>
			</div>
		</div>
		<br />
		<div id="foodOthers" class="foodData">
			<h1>汁物、ライスとデザート</h1>
			<div class="food">
				<div class="food_nav">
					<ul id="foodSoupRiceAndDeserts"></ul>
				</div>
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

		<div v-if="selectedFood.length !== 0" id="menuImage">
			<h2>食べご飯を選択</h2>
			<ul>
				<li v-for="(menu, index) in selectedFood" :key="menu.m_id">
					<div>
						<img style="display: inline" :src="menu.src" @click="removeFromPlate(index)" />
					</div>
				</li>
			</ul>
			<p>
				<router-link :to="{ name: 'selectedfood', params: { currentFood: this.selectedFood}}">栄養を見る</router-link>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "food",
		data() {
			return {
				selectedFood: [],
				showTodayMenu: false,
				showSelectedFoodModal: false,
				currentFood: [],
				foodData: [],
				data: "good",
				foodCount: 1
			};
		},
		methods: {
			showModal() {
				this.showSelectedFoodModal = !this.showSelectedFoodModal;
			},
			getFood() {
				this.$http
					.get("http://jz.jec.ac.jp/innovative/menu.php")
					.then(response => {
						var foodData = response.data;
						var foodMainDish = document.querySelector("#foodMainDish");
						var foodSideDish = document.querySelector("#foodSideDish");
						var foodSoupRiceAndDeserts = document.querySelector(
							"#foodSoupRiceAndDeserts"
						);
						for (var c = 0; c < foodData.length; c++) {
							var category = foodData[c].m_category;
							var daily = foodData[c].m_default;
							if (category === "主菜" && daily == 1) {
								foodMainDish.innerHTML += `<li style="margin: 0 5px;"><label><input type="checkbox" style="display: none" value="${foodData[c].m_name}" class="foodItems"><img class="foodItemsImg" style="width: 100px" src="http://jz.jec.ac.jp/innovative/jpg/${foodData[c].m_id}.jpg" data-name="${foodData[c].m_name}" data-red="${foodData[c].m_red}" data-redcalorie="${foodData[c].m_redcalorie}" data-yellow="${foodData[c].m_yellow}" data-yellowcalorie="${foodData[c].m_yellowcalorie}" data-green="${foodData[c].m_green}" data-greencalorie="${foodData[c].m_greencalorie}" alt="${foodData[c].m_id}"/></label></li>`;
							} else if (category === "副菜" && daily == 1) {
								foodSideDish.innerHTML += `<li style="margin: 0 5px;"><label><input type="checkbox" style="display: none" value="${foodData[c].m_name}" class="foodItems"><img class="foodItemsImg" style="width: 100px" src="http://jz.jec.ac.jp/innovative/jpg/${foodData[c].m_id}.jpg" data-name="${foodData[c].m_name}" data-red="${foodData[c].m_red}" data-redcalorie="${foodData[c].m_redcalorie}" data-yellow="${foodData[c].m_yellow}" data-yellowcalorie="${foodData[c].m_yellowcalorie}" data-green="${foodData[c].m_green}" data-greencalorie="${foodData[c].m_greencalorie}" alt="${foodData[c].m_id}"/></label></li>`;
							} else if (
								(category === "汁物" ||
									category === "ごはん" ||
									category === "デザート") &&
								daily == 1
							) {
								foodSoupRiceAndDeserts.innerHTML += `<li style="margin: 0 5px;"><label><input type="checkbox" style="display: none" value="${foodData[c].m_name}" class="foodItems" name="${foodData[c].m_name}"><img class="foodItemsImg" style="width: 100px" src="http://jz.jec.ac.jp/innovative/jpg/${foodData[c].m_id}.jpg" data-name="${foodData[c].m_name}" data-red="${foodData[c].m_red}" data-redcalorie="${foodData[c].m_redcalorie}" data-yellow="${foodData[c].m_yellow}" data-yellowcalorie="${foodData[c].m_yellowcalorie}" data-green="${foodData[c].m_green}" data-greencalorie="${foodData[c].m_greencalorie}" alt="${foodData[c].m_id}"/></label></li>`;
							}
						}
						this.addToPlate();
					})
					.catch(err => {
						console.log(err);
					});
			},
			addToPlate() {
				let foodItems = document.querySelectorAll(".foodItemsImg");
				for (var i = 0; i < foodItems.length; i++) {
					foodItems[i].addEventListener("click", e => {
						this.selectedFood.push({
							src: e.target.src,
							m_id: e.target.alt,
							name: e.target.dataset.name,
							red: Number(e.target.dataset.red),
							yellow: Number(e.target.dataset.yellow),
							green: Number(e.target.dataset.green),
							redcalorie: Number(e.target.dataset.redcalorie),
							yellowcalorie: Number(e.target.dataset.yellowcalorie),
							greencalorie: Number(e.target.dataset.greencalorie)
						});
					});
				}
			},
			removeFromPlate(index) {
				this.selectedFood.splice(index, 1);
			},
			// addFood() {
			// 	this.foodCount += 1;
			// },
			selectFood(SelectedFood) {
				this.currentFood = SelectedFood;
			}
		},
		mounted() {
			this.getFood();
		}
	};
</script>

<style lang="scss" scoped>
	.overlay {
		width: 100%;
		height: 100vh;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgb(255, 255, 255);
		z-index: 999;
	}
	#food {
		position: relative;
		.buttons {
			border-radius: 16px;
			padding: 10px 20px;
			background: rgb(110, 214, 255);
			text-decoration: none;
			color: #fff;
		}

		.food {
			width: 100%;
			box-shadow: 0px 3px 3px -3px rgba(0, 0, 0, 0.192);
			background: #fff;
			&_nav {
				overflow-x: auto;

				ul {
					// width: 100%;
					display: flex;
					flex-wrap: no-wrap;
					list-style: none;
				}
			}
		}

		.foodData h1 {
			font-weight: normal;
			font-size: 1.4rem;
			margin-left: 10px;
		}
	}

	.foodItems {
		display: none;
	}

	#menuImage {
		border: 1px solid rgb(158, 149, 149);
		height: 250px;
		border-radius: 16px 16px 0 0;
		padding-bottom: 10px;
		position: fixed;
		bottom: 8%;
		width: 100%;
		overflow-x: auto;
		background: #f9f9f9;

		&.display {
			display: block;
		}

		h2 {
			position: fixed;
			left: 5%;
			font-weight: normal;
			font-size: 18px;
		}
		ul {
			margin: 80px 0 20px;
			padding: 0;
			display: flex;
			flex-wrap: no-wrap;
			list-style: none;

			li {
				margin: 0 15px;
				img {
					width: 90px;
					display: flex;
					flex-wrap: no-wrap;
				}
			}
		}

		p {
			position: fixed;
			left: 25%;
			margin: 10px auto;
			padding: 5px 10px;
			width: 50%;
			z-index: 999;
			font-size: 22px;
			background: #35495e;
			border-radius: 16px;
			text-align: center;

			a {
				text-decoration: none;
				color: #fff;
			}
		}

		.foodCount {
			width: 100%;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			span {
				text-align: center;
				font-size: 18px;
			}
			.foodCountIcons {
				color: #ff8f90;
				font-size: 25px;
			}
		}
	}

	#oneDay {
		width: 90%;
		margin: 30px auto 0;
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
</style>
