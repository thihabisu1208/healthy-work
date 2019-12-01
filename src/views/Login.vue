<template>
	<div id="login">
		<div id="preload">
			<img src="/assets/img/ball.png" alt />
			<img src="/assets/img/tile.png" alt />
			<h2>HealthyWork</h2>
		</div>
		<h1>HealthyWork</h1>
		<div id="loginForm">
			<h2>ログイン</h2>
			<div>
				<label for="e_id">社員 ID</label>
				<input type="text" name="e_id" v-model="employee.e_id" />
				<label for="e_password">パスワード</label>
				<input type="password" name="e_password" v-model="employee.e_password" />
				<p>
					<input type="submit" value="ログイン" @click.prevent="login()" />
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "login",
		data() {
			return {
				employee: {
					e_id: "",
					e_password: ""
				}
			};
		},
		methods: {
			login() {
				var logForm = this.toFormData(this.employee);
				// this.$store
				// 	.dispatch("login", { logForm })
				// 	.then(function() {
				// 		this.$router.replace({ name: "foodmenu" });
				// 		document.body.style.background = "#fff";
				// 	})
				// 	.catch(err => console.log(err));
				this.$http
					.post("http://jz.jec.ac.jp/innovative/e_login.php", logForm)
					.then(response => {
						this.employee = response.data;
						const token = response.data.jwt;
						const user = response.data.e_id;
						localStorage.setItem("employee", user);
						localStorage.setItem("token", token);
						this.$http.defaults.headers.common["Authorization"] = token;
						this.$emit("authenticated", true);
						this.$router.replace({ name: "foodmenu" });
						location.reload();
						document.body.style.background = "#fff";
					})
					.catch(err => {
						console.log(err);
						localStorage.removeItem("token");
					});
			},
			toFormData: function(obj) {
				let formData = new FormData();
				for (let key in obj) {
					formData.append(key, obj[key]);
				}
				return formData;
			},
			preload() {
				const preload = document.querySelector("#preload");
				const preloadImg = document.querySelector("#preload img:nth-of-type(1)");
				preloadImg.addEventListener("animationend", () => {
					preload.classList.add("opacity");
				});
			}
		},
		mounted() {
			this.preload();
		}
	};
</script>

<style lang="scss" scoped>
	@keyframes opacity {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
			z-index: -10;
		}
	}
	@keyframes ball {
		0% {
			transform: translate(-50%, -50%) rotate(0deg);
		}
		25% {
			transform: translate(-50%, -50%) rotate(30deg);
		}
		50% {
			transform: translate(-50%, -50%) rotate(0deg);
		}
		80% {
			transform: translate(-50%, -50%) rotate(15deg);
		}
		100% {
			transform: translate(300%, 300%) rotate(0deg) scale(100);
		}
	}
	#login {
		margin: 0 auto;
		position: relative;
		height: 100vh;
		overflow: hidden;

		#preload {
			position: absolute;
			width: 100%;
			height: 100vh;
			background: #ff8f90;
			z-index: 1000;

			&.opacity {
				animation: opacity 1s forwards;
			}

			img {
				position: absolute;
			}

			img:nth-of-type(1) {
				top: 45%;
				left: 50%;
				transform: translate(-50%, -50%);
				animation: ball 4s forwards ease-in-out;
			}

			img:nth-of-type(2) {
				top: 55%;
				left: 48%;
				transform: translate(-50%, -50%);
			}

			h2 {
				position: absolute;
				transform: translate(-50%, -50%);
				top: 70%;
				left: 50%;
				color: #fff;
				font-size: 50px;
			}
		}

		h1 {
			width: 100%;
			position: absolute;
			margin-top: 80px;
			text-align: center;
			color: #fff;
			font-size: 50px;
		}

		#loginForm {
			width: 70%;
			position: absolute;
			transform: translate(-50%, -50%);
			top: 55vh;
			left: 50%;
			border-radius: 16px;
			padding: 10px 30px;
			background: #fff;

			h2 {
				text-align: center;
			}

			label,
			input {
				display: block;
				margin: 20px 0;
			}

			input[type="text"],
			input[type="password"] {
				font-size: 18px;
				width: 100%;
				height: 25px;
				border: 1px solid rgb(212, 203, 203);
				background: rgb(212, 203, 203);
			}

			p {
				input {
					-webkit-appearance: none;
					-moz-appearance: none;
					appearance: none;
					outline: none;

					font-size: 20px;
					padding: 10px 0;
					margin: 30px auto 20px;
					width: 80%;
					text-align: center;
					background: #34495e;
					color: #fff;
					border-radius: 16px;
				}
			}
		}
	}
</style>