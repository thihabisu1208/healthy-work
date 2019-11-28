<template>
	<div id="healthreport">
		<div class="showReport" v-if="this.medicalCheckupThisYear != null">
			<div class="mark">
				<div class="sougou">
					<p>総合判定</p>
					<p>
						<a @click="showAverage = !showAverage">判定区分表</a>
					</p>
				</div>
				<hr />
				<div class="keido">
					<p
						class="a"
						v-if="this.medicalCheckupThisYear.judgement == 'A'"
					>{{ this.medicalCheckupThisYear.judgement }}</p>
					<p
						class="b"
						v-if="this.medicalCheckupThisYear.judgement == 'B'"
					>{{ this.medicalCheckupThisYear.judgement }}</p>
					<p
						class="c"
						v-if="this.medicalCheckupThisYear.judgement == 'C'"
					>{{ this.medicalCheckupThisYear.judgement }}</p>
					<p
						class="d"
						v-if="this.medicalCheckupThisYear.judgement == 'D'"
					>{{ this.medicalCheckupThisYear.judgement }}</p>
					<p
						class="e"
						v-if="this.medicalCheckupThisYear.judgement == 'E'"
					>{{ this.medicalCheckupThisYear.judgement }}</p>
					<p
						class="f"
						v-if="this.medicalCheckupThisYear.judgement == 'F'"
					>{{ this.medicalCheckupThisYear.judgement }}</p>
					<p>軽度の変化</p>
				</div>
				<hr />
			</div>
			<div class="healthDetails">
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
			<p class="save">
				<router-link to="/addhealthreport">登録する</router-link>
			</p>


			<transition name="fade">
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
			</transition>
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
								<table cellpadding="8" v-if="this.medicalCheckupLastYear != null">
									<tr>
										<th></th>
										<th class="lastYear">{{ lastYear }}</th>
										<th class="thisYear">{{ thisYear }}</th>
										<th class="borderLess">変化</th>
									</tr>
									<tr class="bodyDetails">
										<th>身長</th>
										<td>{{ this.medicalCheckupLastYear.height }} cm</td>
										<td>{{ this.medicalCheckupThisYear.height }} cm</td>
										<td>
											<img
												v-if="this.medicalCheckupThisYear.height >= this.medicalCheckupLastYear.height"
												src="@/assets/img/uparrow.png"
												alt
											/>
											<img v-else src="@/assets/img/downarrow.png" alt />
										</td>
									</tr>
									<tr class="bodyDetails">
										<th>体重</th>
										<td>{{ this.medicalCheckupLastYear.weight }} kg</td>
										<td>{{ this.medicalCheckupThisYear.weight }} kg</td>
										<td>
											<img
												v-if="this.medicalCheckupThisYear.weight <= this.medicalCheckupLastYear.weight"
												src="@/assets/img/uparrow.png"
												alt
											/>
											<img v-else src="@/assets/img/downarrow.png" alt />
										</td>
									</tr>
									<tr class="bodyDetails">
										<th>腹囲</th>
										<td>{{ this.medicalCheckupLastYear.AC }} cm</td>
										<td>{{ this.medicalCheckupThisYear.AC }} cm</td>
										<td>
											<img
												v-if="this.medicalCheckupThisYear.AC <= this.medicalCheckupLastYear.AC"
												src="@/assets/img/uparrow.png"
												alt
											/>
											<img v-else src="@/assets/img/downarrow.png" alt />
										</td>
									</tr>
									<tr class="bodyDetails">
										<th>肥満度</th>
										<td>{{ this.medicalCheckupLastYear.degreeOfObesity }} kg</td>
										<td>{{ this.medicalCheckupThisYear.degreeOfObesity }} kg</td>
										<td>
											<img
												v-if="this.medicalCheckupThisYear.degreeOfObesity <= this.medicalCheckupLastYear.degreeOfObesity"
												src="@/assets/img/uparrow.png"
												alt
											/>
											<img v-else src="@/assets/img/downarrow.png" alt />
										</td>
									</tr>
									<tr class="bodyDetails">
										<th>BMI</th>
										<td>{{ this.medicalCheckupLastYear.BMI }} pt</td>
										<td>{{ this.medicalCheckupThisYear.BMI }} pt</td>
										<td>
											<img
												v-if="this.medicalCheckupThisYear.BMI <= this.medicalCheckupLastYear.BMI"
												src="@/assets/img/uparrow.png"
												alt
											/>
											<img v-else src="@/assets/img/downarrow.png" alt />
										</td>
									</tr>
								</table>
								<table cellpadding="8" v-else>
									<tr>
										<th></th>
										<th class="lastYear">{{ lastYear }}</th>
										<th class="thisYear">{{ thisYear }}</th>
										<th class="borderLess">変化</th>
									</tr>
									<tr class="bodyDetails">
										<th>身長</th>
										<td>0 cm</td>
										<td>{{ this.medicalCheckupThisYear.height }} cm</td>
										<td>
											<img src="@/assets/img/uparrow.png" alt />
										</td>
									</tr>
									<tr class="bodyDetails">
										<th>体重</th>
										<td>0 kg</td>
										<td>{{ this.medicalCheckupThisYear.weight }} kg</td>
										<td>
											<img src="@/assets/img/uparrow.png" alt />
										</td>
									</tr>
									<tr class="bodyDetails">
										<th>腹囲</th>
										<td>0 cm</td>
										<td>{{ this.medicalCheckupThisYear.AC }} cm</td>
										<td>
											<img src="@/assets/img/uparrow.png" alt />
										</td>
									</tr>
									<tr class="bodyDetails">
										<th>肥満度</th>
										<td>0 kg</td>
										<td>{{ this.medicalCheckupThisYear.degreeOfObesity }} kg</td>
										<td>
											<img src="@/assets/img/uparrow.png" alt />
										</td>
									</tr>
									<tr class="bodyDetails">
										<th>BMI</th>
										<td>0 pt</td>
										<td>{{ this.medicalCheckupThisYear.BMI }} pt</td>
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
								<table cellpadding="8" v-if="this.medicalCheckupLastYear != null">
									<tr>
										<th></th>
										<th class="lastYear">{{ lastYear }}</th>
										<th class="thisYear">{{ thisYear }}</th>
										<th class="borderLess">変化</th>
									</tr>
									<tr class="bodyDetails">
										<th>中性脂肪</th>
										<td>{{ this.medicalCheckupLastYear.neutralFat }} mg/cll</td>
										<td>{{ this.medicalCheckupThisYear.neutralFat }} mg/cll</td>
										<td>
											<img
												v-if="this.medicalCheckupThisYear.neutralFat <= this.medicalCheckupLastYear.neutralFat"
												src="@/assets/img/uparrow.png"
												alt
											/>
											<img v-else src="@/assets/img/downarrow.png" alt />
										</td>
									</tr>
									<tr class="bodyDetails">
										<th>HDL</th>
										<td>{{ this.medicalCheckupLastYear.cholesterol }} mg/cll</td>
										<td>{{ this.medicalCheckupThisYear.cholesterol }} mg/cll</td>
										<td>
											<img
												v-if="this.medicalCheckupThisYear.cholesterol <= this.medicalCheckupLastYear.cholesterol"
												src="@/assets/img/uparrow.png"
												alt
											/>
											<img v-else src="@/assets/img/downarrow.png" alt />
										</td>
									</tr>
								</table>
								<table cellpadding="8" v-else>
									<tr>
										<th></th>
										<th class="lastYear">{{ lastYear }}</th>
										<th class="thisYear">{{ thisYear }}</th>
										<th class="borderLess">変化</th>
									</tr>
									<tr class="bodyDetails">
										<th>中性脂肪</th>
										<td>0 mg/cll</td>
										<td>{{ this.medicalCheckupThisYear.neutralFat }} mg/cll</td>
										<td>
											<img src="@/assets/img/uparrow.png" alt />
										</td>
									</tr>
									<tr class="bodyDetails">
										<th>HDL</th>
										<td>0 mg/cll</td>
										<td>{{ this.medicalCheckupThisYear.cholesterol }} mg/cll</td>
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
					<div v-if="showBlood">
						<div class="overlay" @click.self="showBlood = false">
							<div class="modal">
								<h2>
									血圧
									<span @click="showBlood = !showBlood">
										<font-awesome-icon icon="times" />
									</span>
								</h2>
								<table cellpadding="8" v-if="this.medicalCheckupLastYear != null">
									<tr>
										<th></th>
										<th class="lastYear">{{ lastYear }}</th>
										<th class="thisYear">{{ thisYear }}</th>
										<th class="borderLess">変化</th>
									</tr>
									<tr class="bodyDetails">
										<th>最高血圧</th>
										<td>{{ this.medicalCheckupLastYear.maxBloodpressure }} mmHg</td>
										<td>{{ this.medicalCheckupThisYear.maxBloodpressure }} mmHg</td>
										<td>
											<img
												v-if="this.medicalCheckupThisYear.maxBloodpressure <= this.medicalCheckupLastYear.maxBloodpressure"
												src="@/assets/img/uparrow.png"
												alt
											/>
											<img v-else src="@/assets/img/downarrow.png" alt />
										</td>
									</tr>
									<tr class="bodyDetails">
										<th>最低血圧</th>
										<td>{{ this.medicalCheckupLastYear.minBloodpressure }} mmHg</td>
										<td>{{ this.medicalCheckupThisYear.minBloodpressure }} mmHg</td>
										<td>
											<img
												v-if="this.medicalCheckupThisYear.minBloodpressure <= this.medicalCheckupLastYear.minBloodpressure"
												src="@/assets/img/uparrow.png"
												alt
											/>
											<img v-else src="@/assets/img/downarrow.png" alt />
										</td>
									</tr>
								</table>
								<table cellpadding="8" v-else>
									<tr>
										<th></th>
										<th class="lastYear">{{ lastYear }}</th>
										<th class="thisYear">{{ thisYear }}</th>
										<th class="borderLess">変化</th>
									</tr>
									<tr class="bodyDetails">
										<th>最高血圧</th>
										<td>0 mmHg</td>
										<td>{{ this.medicalCheckupThisYear.maxBloodpressure }} mmHg</td>
										<td>
											<img src="@/assets/img/uparrow.png" alt />
										</td>
									</tr>
									<tr class="bodyDetails">
										<th>最低血圧</th>
										<td>0 mmHg</td>
										<td>{{ this.medicalCheckupThisYear.minBloodpressure }} mmHg</td>
										<td>
											<img src="@/assets/img/uparrow.png" alt />
										</td>
									</tr>
								</table>
							</div>
						</div>
					</div>
				</transition>
			</div>
		</div>
		<div class="showAddReport" v-else>
			<div class="mark">
				<div class="sougou">
					<p>総合判定</p>
					<p>
						<a @click="showAverage = !showAverage">判定区分表</a>
					</p>
				</div>
				<hr />
				<div class="line">
					<p><hr></p>
				</div>
				<hr />
			</div>
			<div class="healthDetails">
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
			<div class="overlay" @click.self="showBlood = false">
				<div class="modal">
					<span>
						<router-link class="close" to="/setting">
							<font-awesome-icon icon="times" />
						</router-link>
					</span>
					<p class="notSaved">健康診断データが未登録です</p>
					<p class="save">
						<router-link to="/addhealthreport">登録して始める</router-link>
					</p>
				</div>
			</div>
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
				mark: "B",
				user: {
					e_id: localStorage.getItem("employee")
				},
				medicalCheckupThisYear: [],
				medicalCheckLastYear: []
			};
		},
		methods: {
			getHealthRecord() {
				var logForm = this.toFormData(this.user);
				this.$http({
					method: "POST",
					url: "http://jz.jec.ac.jp/innovative/showMedicalCheckup.php",
					data: logForm
				})
					.then(response => {
						this.medicalCheckupThisYear = response.data.medicalCheckup[0];
						this.medicalCheckupLastYear = response.data.medicalCheckupLastyear[0];
					})
					.catch(err => {
						console.log(err);
					});
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
			this.getHealthRecord();
		},
		computed: {
			lastYear() {
				return new Date().getFullYear() - 1;
			},
			thisYear() {
				return new Date().getFullYear();
			}
		}
	};
</script>

<style lang="scss" scoped>
.showAddReport {
	.line{
		width: 50%;
		margin: 0 auto;
		padding: 30px 0;
	}

	.modal{
		padding: 10px;
		position: relative;
	}

	.modal span{
		font-size: 20px;
		position: absolute;
		right: 5%;
		top: 5%;
	}

	.modal span a {
		color: #000;
		text-decoration: none;
	}

	.notSaved{
		text-align: center;
		font-size: 20px;
	}
}
	// .fade-enter-active,
	// .fade-leave-active {
	// 	transition: 0.1s;
	// 	z-index: 1000;
	// }
	// .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	// 	opacity: 0;
	// }
	.save {
		text-align: center;
		a {
			width: 60%;
			margin: 20px auto;
			background: #ff8f90;
			padding: 15px 70px;
			border-radius: 20px;
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
			padding: 10px 0px;
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

	.mark {
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

			p{
				margin: 10px auto;
			}

			p:nth-of-type(1) {
				font-family: Helvetica, Arial, sans-serif;
				margin: 13px auto;
				padding: 10px 16px;
				border-radius: 50%;
				color: #fff;
				font-size: 22px;
				font-weight: bold;
				display: flex;
				align-items: center;
				justify-content: center;

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

			p:nth-of-type(2){
				padding: 10px 16px;
			}
		}
	}

	.healthDetails {
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
			background: #ffe2e2;
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