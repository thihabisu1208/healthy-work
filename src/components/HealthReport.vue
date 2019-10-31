<template>
	<div id="healthreport">
		<chartjs-radar class="charts" :labels="labels" :datasets="datasets" :option="option"></chartjs-radar>
		<div id="mark">
			<div class="hantei">
				<p>判定基準</p>
				<ul>
					<li>Ａ：正常範囲です。</li>
					<li>Ｂ：わずかに異常を認めます。</li>
					<li>Ｃ：生活習慣を改善し再検してください。</li>
				</ul>
			</div>
			<div class="sougou">
				<p>
					総合判定
					<span>{{ mark }}</span>
				</p>
				<ul>
					<li>
						<span class="thisYear">{{ thisYear }}</span> 年度
					</li>
					<li>
						<span class="lastYear">{{ lastYear }}</span> 年度
					</li>
				</ul>
			</div>
		</div>
		<hr />
		<div id="healthDetails">
			<a @click="showBody = !showBody">
				<img src="@/assets/img/body.png" alt />
				<p>身体測定</p>
			</a>
			<a @click="showEye = !showEye">
				<img src="@/assets/img/eye.png" alt />
				<p>視力検査</p>
			</a>
			<a @click="showEar = !showEar">
				<img src="@/assets/img/ear.png" alt />
				<p>聴覚検査</p>
			</a>
			<a @click="showWeight = !showWeight">
				<img src="@/assets/img/weight.png" alt />
				<p>脂質</p>
			</a>
			<a @click="showBlood = !showBlood">
				<img src="@/assets/img/blood.png" alt />
				<p>血圧</p>
			</a>
			<a @click="showHeart = !showHeart">
				<img src="@/assets/img/heart.png" alt />
				<p>心拍数</p>
			</a>
		</div>
		<div id="healthDetailsShow">
			<transition name="modal">
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
				<div v-if="showEye">
					<div class="overlay" @click.self="showEye = false">
						<div class="modal">
							<h2>
								視力検査
								<span @click="showEye = !showEye">
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
									<th>右目</th>
									<td>170 C</td>
									<td>170 A</td>
									<td>
										<img src="@/assets/img/uparrow.png" alt />
									</td>
								</tr>
								<tr class="bodyDetails">
									<th>右目</th>
									<td>170 B</td>
									<td>170 A</td>
									<td>
										<img src="@/assets/img/uparrow.png" alt />
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
				<div v-if="showEar">
					<div class="overlay" @click.self="showEar = false">
						<div class="modal">
							<h2>
								聴覚検査
								<span @click="showEar = !showEar">
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
									<th>右耳</th>
									<td>170 C</td>
									<td>170 A</td>
									<td>
										<img src="@/assets/img/uparrow.png" alt />
									</td>
								</tr>
								<tr class="bodyDetails">
									<th>左耳</th>
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
				<div v-if="showHeart">
					<div class="overlay" @click.self="showHeart = false">
						<div class="modal">
							<h2>
								心拍数
								<span @click="showHeart = !showHeart">
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
									<th>BPM</th>
									<td>170 C</td>
									<td>170 A</td>
									<td>
										<img src="@/assets/img/uparrow.png" alt />
									</td>
								</tr>
								<tr class="bodyDetails">
									<th>標準</th>
									<td>170 B</td>
									<td>170 A</td>
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
				showEye: false,
				showEar: false,
				showWeight: false,
				showBlood: false,
				showHeart: false,
				lastYear: "2018",
				thisYear: "2019",
				mark: "B",
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
	.lastYear {
		color: #f86263;
	}

	.thisYear {
		color: #638bf8;
	}

	.charts {
		width: 99.8% !important;
		height: 184px !important;
		background: url("../assets/img/radar.png") center center;
		background-repeat: no-repeat;
	}

	#mark {
		margin: 0 auto;
		width: 90%;
		display: grid;
		grid-template-columns: repeat(2, 1fr);

		.hantei,
		.sougou {
			p {
				font-size: 20px;
			}

			ul {
				font-size: 12px;
				list-style: none;
				margin: 0;
				padding: 0;
			}
		}

		.sougou {
			text-align: right;
			p {
				border-bottom: 1px solid #000;
			}
			p span {
				color: #638bf8;
				font-size: 24px;
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

	.fadeIn-enter {
		opacity: 0;
	}

	.fadeIn-leave-active {
		opacity: 0;
		transition: all 0.2s step-end;
	}

	.fadeIn-enter .modal,
	.fadeIn-leave-active.modal {
		transform: scale(1.1);
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