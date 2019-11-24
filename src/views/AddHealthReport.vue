<template>
	<div id="addHealthReport">
		<router-link to="/healthreport" id="goBack">
			<p class="icons">
				<font-awesome-icon icon="arrow-left" />
			</p>
		</router-link>
		<Header headerName="健康診断結果登録" />
		<vue-tabs>
			<v-tab :title="this.lastYear">
				<div class="healthReportData">
					<form method="POST" action="http://jz.jec.ac.jp/innovative/addMedicalCheckupLastyear.php">
						<div class="hide">
							<input type="text" name="e_id" v-model="user.e_id" />
						</div>
						<h2>総合判定</h2>
						<div class="container points">
							<div>
								<label for="a">
									<input type="radio" id="a" name="judgement" value="A" />
									<span>A</span>
								</label>
							</div>
							<div>
								<label for="b">
									<input type="radio" id="b" name="judgement" value="B" />
									<span>B</span>
								</label>
							</div>
							<div>
								<label for="c">
									<input type="radio" id="c" name="judgement" value="C" />
									<span>C</span>
								</label>
							</div>
							<div>
								<label for="d">
									<input type="radio" id="d" name="judgement" value="D" />
									<span>D</span>
								</label>
							</div>
							<div>
								<label for="e">
									<input type="radio" id="e" name="judgement" value="E" />
									<span>E</span>
								</label>
							</div>
							<div>
								<label for="f">
									<input type="radio" id="f" name="judgement" value="F" />
									<span>F</span>
								</label>
							</div>
						</div>
						<h2>身体測定</h2>
						<div class="container body">
							<div>
								<label for="height">身長</label>
								<div>
									<input type="text" name="height" />
									<span>cm</span>
								</div>
							</div>
							<div>
								<label for="weight">体重</label>
								<div>
									<input type="text" name="weight" />
									<span>kg</span>
								</div>
							</div>
							<div>
								<label for="AC">腹囲</label>
								<div>
									<input type="text" name="AC" />
									<span>cm</span>
								</div>
							</div>
							<div>
								<label for="degreeOfObesity">肥満度</label>
								<div>
									<input type="text" name="degreeOfObesity" />
									<span>%</span>
								</div>
							</div>
							<div>
								<label for="BMI">ＢＭＩ</label>
								<div>
									<input type="text" name="BMI" />
									<span>pt</span>
								</div>
							</div>
						</div>
						<h2>身体測定</h2>
						<div class="container body">
							<div>
								<label for="neutralFat">中性脂肪</label>
								<div>
									<input type="text" name="neutralFat" />
									<span>mg/cll</span>
								</div>
							</div>
							<div>
								<label for="cholesterol">コレステロール</label>
								<div>
									<input type="text" name="cholesterol" />
									<span>mg/cll</span>
								</div>
							</div>
						</div>
						<h2>血圧測定</h2>
						<div class="container body">
							<div>
								<label for="maxBloodpressure">最高血圧</label>
								<div>
									<input type="text" name="maxBloodpressure" />
									<span>mmHg</span>
								</div>
							</div>
							<div>
								<label for="minBloodpressure">最低血圧</label>
								<div>
									<input type="text" name="minBloodpressure" />
									<span>mmHg</span>
								</div>
							</div>
						</div>

						<p class="add">
							<input type="submit" value="登録" />
						</p>
					</form>
				</div>
			</v-tab>

			<v-tab :title="this.thisYear">
				<div class="healthReportData">
					<form method="POST" action="http://jz.jec.ac.jp/innovative/addMedicalCheckup.php">
						<div class="hide">
							<input type="text" name="e_id" v-model="user.e_id" />
						</div>
						<h2>総合判定</h2>
						<div class="container points">
							<div>
								<label for="a2">
									<input type="radio" id="a2" name="judgement" value="A" />
									<span>A</span>
								</label>
							</div>
							<div>
								<label for="b2">
									<input type="radio" id="b2" name="judgement" value="B" />
									<span>B</span>
								</label>
							</div>
							<div>
								<label for="c2">
									<input type="radio" id="c2" name="judgement" value="C" />
									<span>C</span>
								</label>
							</div>
							<div>
								<label for="d2">
									<input type="radio" id="d2" name="judgement" value="D" />
									<span>D</span>
								</label>
							</div>
							<div>
								<label for="e2">
									<input type="radio" id="e2" name="judgement" value="E" />
									<span>E</span>
								</label>
							</div>
							<div>
								<label for="f2">
									<input type="radio" id="f2" name="judgement" value="F" />
									<span>F</span>
								</label>
							</div>
						</div>
						<h2>身体測定</h2>
						<div class="container body">
							<div>
								<label for="height">身長</label>
								<div>
									<input type="text" name="height" />
									<span>cm</span>
								</div>
							</div>
							<div>
								<label for="weight">体重</label>
								<div>
									<input type="text" name="weight" />
									<span>kg</span>
								</div>
							</div>
							<div>
								<label for="AC">腹囲</label>
								<div>
									<input type="text" name="AC" />
									<span>cm</span>
								</div>
							</div>
							<div>
								<label for="degreeOfObesity">肥満度</label>
								<div>
									<input type="text" name="degreeOfObesity" />
									<span>%</span>
								</div>
							</div>
							<div>
								<label for="BMI">ＢＭＩ</label>
								<div>
									<input type="text" name="BMI" />
									<span>pt</span>
								</div>
							</div>
						</div>
						<h2>身体測定</h2>
						<div class="container body">
							<div>
								<label for="neutralFat">中性脂肪</label>
								<div>
									<input type="text" name="neutralFat" />
									<span>mg/cll</span>
								</div>
							</div>
							<div>
								<label for="cholesterol">コレステロール</label>
								<div>
									<input type="text" name="cholesterol" />
									<span>mg/cll</span>
								</div>
							</div>
						</div>
						<h2>血圧測定</h2>
						<div class="container body">
							<div>
								<label for="maxBloodpressure">最高血圧</label>
								<div>
									<input type="text" name="maxBloodpressure" />
									<span>mmHg</span>
								</div>
							</div>
							<div>
								<label for="minBloodpressure">最低血圧</label>
								<div>
									<input type="text" name="minBloodpressure" />
									<span>mmHg</span>
								</div>
							</div>
						</div>

						<p class="add">
							<input type="submit" value="登録" />
						</p>
					</form>
				</div>
			</v-tab>
		</vue-tabs>
	</div>
</template>

<script>
	import Header from "@/components/Header.vue";
	import { VueTabs, VTab } from "vue-nav-tabs";
	import "vue-nav-tabs/themes/vue-tabs.css";

	export default {
		name: "addhealthreport",
		components: {
			Header,
			VueTabs,
			VTab
		},
		data() {
			return {
				lastYear: "2018年",
				thisYear: "2019年",
				user: {
					e_id: localStorage.getItem("employee")
				}
			};
		}
	};
</script>

<style lang="scss" scoped>
	.tab-container {
		display: block;
		animation: fadeIn 1s;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	.hide {
		display: none;
	}
	#addHealthReport {
		margin: 70px 0;
		background: #fff;
		height: 100%;
		padding: 20px 0;

		#goBack {
			position: fixed;
			top: -4%;
			left: 3%;
			z-index: 999;
			font-size: 30px;
			color: #fff;
		}

		.healthReportData {
			width: 100%;
			color: #5d5d5d;
			h2 {
				font-size: 20px;
				padding: 10px 30px;
				background: #f5f5f5;
			}

			form {
				margin: 0 auto;
				width: 100%;

				.container {
					margin: 0 auto;
					width: 80%;
				}

				.points {
					display: grid;
					grid-template-columns: repeat(6, 1fr);

					div {
						display: flex;
						align-items: center;
						justify-content: center;
					}

					label {
						font-size: 30px;
					}

					input {
						display: none;
					}

					:checked + span {
						font-weight: bold;
						font-size: 35px;
						border-bottom: 1px solid #000;
					}
				}

				.add {
					margin: 50px auto;
					width: 50%;
					z-index: 999;
					text-align: center;

					input {
						border-radius: 16px;
						background: #35495e;
						font-size: 22px;
						padding: 5px 15px;
						text-decoration: none;
						color: #fff;
					}
				}
			}

			.body {
				div {
					width: 100%;
					display: grid;
					grid-template-columns: 1fr 1fr;
					grid-gap: 5px;
					margin: 10px auto;

					div {
						margin: 0;
						display: grid;
						grid-template-columns: 2fr 1fr;
					}
				}

				label,
				input {
					font-size: 20px;
				}

				input {
					// display: inline;
					width: 100%;
					outline: 0;
					border: 0;
					border-bottom: 1px solid #000;
				}

				span {
					padding: 0 10px;
				}
			}
		}
	}
</style>
