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
		<div id="menuImage">
			<h2>食べご飯を選択</h2>
			<ul>
				<li v-for="menu in todayMenu" :key="menu.m_id">
					<img style="display: inline" :src="menu" @click="removeFromPlate(index)" />
					<div class="foodCount">
						<font-awesome-icon class="foodCountIcons" icon="minus-circle" />
						<span>{{ foodCount }}</span>
						<font-awesome-icon class="foodCountIcons" icon="plus-circle" @click="addFood()" />
					</div>
				</li>
			</ul>
			<p>
				<router-link to="/nutrition">栄養を見る</router-link>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "food",
		data() {
			return {
				todayMenu: [],
				foodData: [],
				data: "good",
				foodCount: 1
			};
		},
		methods: {
			getFood() {
				this.$http
					.get("http://jz.jec.ac.jp/innovative/menu.php")
					.then(response => {
						console.log(response.data);
						var foodData = response.data;
						var foodMainDish = document.querySelector("#foodMainDish");
						var foodSideDish = document.querySelector("#foodSideDish");
						var foodSoupRiceAndDeserts = document.querySelector(
							"#foodSoupRiceAndDeserts"
						);
						for (var c = 0; c < foodData.length; c++) {
							var category = foodData[c].m_category;
							if (category === "主菜") {
								foodMainDish.innerHTML += `<li style="margin: 0 5px;"><label><input type="checkbox" style="display: none" value="${foodData[c].m_name}" class="foodItems"><img class="foodItemsImg" style="width: 100px" src="http://jz.jec.ac.jp/innovative/jpg/${foodData[c].m_id}.jpg" alt="${foodData[c].m_name}"/></label></li>`;
							} else if (category === "副菜") {
								foodSideDish.innerHTML += `<li style="margin: 0 5px;"><label><input type="checkbox" style="display: none" value="${foodData[c].m_name}" class="foodItems"><img class="foodItemsImg" style="width: 100px" src="http://jz.jec.ac.jp/innovative/jpg/${foodData[c].m_id}.jpg" alt="${foodData[c].m_name}"/></label></li>`;
							} else if (
								category === "汁物" ||
								category === "ごはん" ||
								category === "デザート"
							) {
								foodSoupRiceAndDeserts.innerHTML += `<li style="margin: 0 5px;"><label><input type="checkbox" style="display: none" value="${foodData[c].m_name}" class="foodItems" name="${foodData[c].m_name}"><img class="foodItemsImg" style="width: 100px" src="http://jz.jec.ac.jp/innovative/jpg/${foodData[c].m_id}.jpg" alt="${foodData[c].m_name}"/></label></li>`;
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
						if (i > 0) {
							var menuImage = document.querySelector("#menuImage");
							menuImage.classList.add("display");
							this.todayMenu.push(e.target.src);
						} else {
							menuImage.classList.remove("display");
						}
					});
				}
			},
			removeFromPlate(index) {
				this.todayMenu.splice(index, 1);
			},
			addFood() {
				this.foodCount += 1;
			}
		},
		created() {
			this.getFood();
		}
	};
</script>

<style lang="scss" scoped>
	#food {
		position: relative;
		width: 100vw;

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
		height: 250px;
		border-radius: 16px 16px 0 0;
		padding-bottom: 30px;
		display: none;
		position: fixed;
		bottom: 10%;
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
			margin: 0 auto;
			width: 50%;
			z-index: 999;
			font-size: 22px;
			background: #35495e;
			border-radius: 16px;
			text-align: center;

			a {
				text-decoration: none;
				color: #fff;
				padding: 10px 20px;
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
</style>