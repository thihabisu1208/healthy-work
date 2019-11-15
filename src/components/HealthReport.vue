<template>
	<div id="healthreport">
		<div id="mark">
			<div class="sougou">
				<p>総合判定</p>
				<p>
					<a @click="showAverage = !showAverage">判定区分表</a>
				</p>
			</div>
			<hr />
			<div class="keido">
				<p>{{ mark }}</p>
				<p>軽度の変化</p>
			</div>
			<hr />
		</div>
		<div id="healthDetails">
			<a @click="showBody = !showBody">
				<img src="@/assets/img/body.png" alt />
				<p>身体測定</p>
			</a>
			<a @click="showWeight = !showWeight">
				<img src="@/assets/img/weight.png" alt />
				<p>脂質</p>
			</a>
			<a @click="showBlood = !showBlood">
				<img src="@/assets/img/blood.png" alt />
				<p>血圧</p>
			</a>
		</div>
		<p id="save">
			<router-link to="/addhealthreport">登録する</router-link>
		</p>

		<div v-if="showAverage">
			<div class="overlay" @click.self="showAverage = false">
				<div class="modal">
					<h2>
						判定区分表
						<span @click="showAverage = !showAverage">
							<font-awesome-icon icon="times" />
						</span>
					</h2>
					<div class="showAverageDetails">
						<div class="details">
							<div>
								<h3 class="a">A</h3>
							</div>
							<div>
								<p>
									<span>異常なし</span>
									<span>今後も健康状態を維持できるように努めましょう。</span>
								</p>
							</div>
						</div>
						<div class="details">
							<div>
								<h3 class="b">B</h3>
							</div>
							<div>
								<p>
									<span>軽度の変化</span>
									<span>日常生活に支障がなく、治療も必要ない程度の異常です。</span>
								</p>
							</div>
						</div>
						<div class="details">
							<div>
								<h3 class="c">C</h3>
							</div>
							<div>
								<p>
									<span>経過観察</span>
									<span>緊急性はないものの、基準範囲を超えた異常があります。</span>
								</p>
							</div>
						</div>
						<div class="details">
							<div>
								<h3 class="d">D</h3>
							</div>
							<div>
								<p>
									<span>要再検査</span>
									<span>再度確認が必要なデータがあることを示しています。体調が良い時に再度検査を受けましょう。</span>
								</p>
							</div>
						</div>
						<div class="details">
							<div>
								<h3 class="e">E</h3>
							</div>
							<div>
								<p>
									<span>要精密検査</span>
									<span>明らかな異常があることを示しています。重大な疾病が現任となっている可能性もあるので、できるだけ早く精密検査を受けましょう。</span>
								</p>
							</div>
						</div>
						<div class="details">
							<div>
								<h3 class="f">F</h3>
							</div>
							<div>
								<p>
									<span>要治療</span>
									<span>明らかな異常があり、さらに明らかな疾患があることを示しています。専門医による治療を開始する必要があるので、速やかに医療機関を受診しましょう。</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="healthDetailsShow">
			<transition name="fade">
				<div v-if="showBody">
					<div class="overlay" @click.self="showBody = false">
						<div class="modal">
							<h2>
								身体測定
								<span @click="showBody = !showBody">
									<font-awesome-icon icon="times" />
								</span>
							</h2>
							<table cellpadding="8">
								<tr>
									<th></th>
									<th class="lastYear">{{ lastYear }}</th>
									<th class="thisYear">{{ thisYear }}</th>
									<th class="borderLess">変化</th>
								</tr>
								<tr class="bodyDetails">
									<th>身長</th>
									<td>170 C</td>
									<td>170 A</td>
									<td>
										<img src="@/assets/img/uparrow.png" alt />
									</td>
								</tr>
								<tr class="bodyDetails">
									<th>体重</th>
									<td>170 B</td>
									<td>170 A</td>
									<td>
										<img src="@/assets/img/uparrow.png" alt />
									</td>
								</tr>
								<tr class="bodyDetails">
									<th>腹囲</th>
									<td>170 C</td>
									<td>170 C</td>
									<td>
										<img src="@/assets/img/downarrow.png" alt />
									</td>
								</tr>
								<tr class="bodyDetails">
									<th>肥満度</th>
									<td>170 A</td>
									<td>170 C</td>
									<td>
										<img src="@/assets/img/downarrow.png" alt />
									</td>
								</tr>
								<tr class="bodyDetails">
									<th>BMI</th>
									<td>170 B</td>
									<td>170 B</td>
									<td>
										<img src="@/assets/img/downarrow.png" alt />
									</td>
								</tr>
								<tr class="bodyDetails">
									<th>体脂肪率</th>
									<td>170 C</td>
									<td>170 B</td>
									<td>
										<img src="@/assets/img/uparrow.png" alt />
									</td>
								</tr>
								<tr class="bodyDetails">
									<th>標準体重</th>
									<td>170 C</td>
									<td>170 A</td>
									<td>
										<img src="@/assets/img/uparrow.png" alt />
									</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
			</transition>
			<transition name="fade">
				<div v-if="showWeight">
					<div class="overlay" @click.self="showWeight = false">
						<div class="modal">
							<h2>
								脂質
								<span @click="showWeight = !showWeight">
									<font-awesome-icon icon="times" />
								</span>
							</h2>
							<table cellpadding="8">
								<tr>
									<th></th>
									<th class="lastYear">{{ lastYear }}</th>
									<th class="thisYear">{{ thisYear }}</th>
									<th class="borderLess">変化</th>
								</tr>
								<tr class="bodyDetails">
									<th>中性脂肪</th>
									<td>170 C</td>
									<td>170 A</td>
									<td>
										<img src="@/assets/img/uparrow.png" alt />
									</td>
								</tr>
								<tr class="bodyDetails">
									<th>HDL</th>
									<td>170 B</td>
									<td>170 A</td>
									<td>
										<img src="@/assets/img/downarrow.png" alt />
									</td>
								</tr>
								<tr class="bodyDetails">
									<th>標準</th>
									<td>170 C</td>
									<td>170 C</td>
									<td>
										<img src="@/assets/img/downarrow.png" alt />
									</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
			</transition>
			<transition name="fade">
				<div v-if="showBlood">
					<div class="overlay" @click.self="showBlood = false">
						<div class="modal">
							<h2>
								血圧
								<span @click="showBlood = !showBlood">
									<font-awesome-icon icon="times" />
								</span>
							</h2>
							<table cellpadding="8">
								<tr>
									<th></th>
									<th class="lastYear">{{ lastYear }}</th>
									<th class="thisYear">{{ thisYear }}</th>
									<th class="borderLess">変化</th>
								</tr>
								<tr class="bodyDetails">
									<th>収縮期血圧</th>
									<td>170 C</td>
									<td>170 A</td>
									<td>
										<img src="@/assets/img/uparrow.png" alt />
									</td>
								</tr>
								<tr class="bodyDetails">
									<th>拡大期血圧</th>
									<td>170 B</td>
									<td>170 A</td>
									<td>
										<img src="@/assets/img/downarrow.png" alt />
									</td>
								</tr>
								<tr class="bodyDetails">
									<th>標準</th>
									<td>170 C</td>
									<td>170 C</td>
									<td>
										<img src="@/assets/img/downarrow.png" alt />
									</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
	export default {
		name: "healthreport",
		data() {
			return {
				showBody: false,
				showWeight: false,
				showBlood: false,
				showAverage: false,
				lastYear: "2018",
				thisYear: "2019",
				mark: "B"
			};
		}
	};
</script>

<style lang="scss" scoped>
	// .fade-enter-active,
	// .fade-leave-active {
	// 	transition: 0.1s;
	// 	z-index: 1000;
	// }
	// .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	// 	opacity: 0;
	// }
	#save {
		width: 60%;
		margin: 20px auto;
		background: #ff8f90;
		text-align: center;
		padding: 15px;
		border-radius: 20px;
		a {
			font-size: 22px;
			text-decoration: none;
			color: #fff;
		}
	}

	.showAverageDetails {
		width: 90%;
		margin: 0 auto;

		.details {
			width: 100%;
			display: grid;
			grid-template-columns: 0.3fr 0.7fr;
		}

		.details div:nth-of-type(1) {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.details h3 {
			width: 50%;
			text-align: center;
			margin: 0;
			padding: 10px 3px;
			border-radius: 50%;
			font-size: 23px;
			color: #fff;

			&.a {
				background: #7ed978;
			}

			&.b {
				background: #78d9c5;
			}

			&.c {
				background: #68baf1;
			}

			&.d {
				background: #6868f1;
			}

			&.e {
				background: #c968f1;
			}

			&.f {
				background: #f1687b;
			}
		}

		.details p span {
			color: #757575;
			display: block;
		}

		.details p span:nth-of-type(1) {
			width: 100%;
			font-size: 15px;
			border-bottom: 1px solid #000;
		}

		.details p span:nth-of-type(2) {
			font-size: 10px;
		}
	}

	.lastYear {
		color: #f86263;
	}

	.thisYear {
		color: #638bf8;
	}

	#mark {
		margin: 0 auto;
		width: 80%;
		.sougou,
		.keido {
			margin: 0 auto;
			width: 100%;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			p {
				font-size: 20px;
				padding: 5px;
				margin-bottom: 0;
			}

			p:nth-of-type(1) {
			}

			p:nth-of-type(2) {
				text-align: right;

				a {
					border-radius: 10px;
					padding: 5px 10px;
					color: #fff;
					background: #34495e;
					text-decoration: none;
				}
			}
		}

		.keido {
			width: 60%;
			grid-template-columns: 0.3fr 1fr;

			p:nth-of-type(1) {
				font-family: Helvetica, Arial, sans-serif;
				background: #78d9c5;
				padding: 5px 15px;
				border-radius: 50%;
				color: #fff;
				font-size: 22px;
				font-weight: bold;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}

	#healthDetails {
		width: 90%;
		margin: 50px auto;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 20px;

		a p {
			text-align: center;
			font-weight: bold;
		}
	}

	.modal {
		border-radius: 16px;
		width: 90%;
		margin: 0px auto;
		background-color: #fff;
		box-shadow: 0 1px 1px 1px #ff8f90;
		transition: all 1s ease-in;
		font-family: Helvetica, Arial, sans-serif;
	}

	.modal h2 {
		position: relative;
		border-radius: 16px 16px 0 0;
		margin: 0;
		padding: 10px;
		text-align: center;
		color: #fff;
		background: #ff8f90;

		span {
			position: absolute;
			right: 10%;
			font-size: 30px;
		}
	}

	.modal table {
		width: 90%;
		margin: 20px auto;
		border: 0.1px solid rgb(104, 99, 99);
		color: rgb(104, 99, 99);

		th {
			font-size: 18px;
			border-bottom: 0.1px solid rgb(104, 99, 99);
			border-right: 0.1px solid rgb(104, 99, 99);
		}

		th.borderLess {
			border-right: none;
		}

		.bodyDetails:nth-child(odd) {
			background: #ff8e90;
		}

		.bodyDetails th {
			text-align: left;
			border-bottom: none;
		}

		.bodyDetails td {
			// border-right: 0.5px solid #000;
		}

		tr {
			padding: 20px auto;
		}

		tr td {
			text-align: center;
		}
	}

	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		background: #00000094;
		z-index: 999;
		transition: opacity 0.2s ease;
	}
</style>