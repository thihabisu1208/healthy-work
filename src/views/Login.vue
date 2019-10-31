<template>
	<div id="login">
		<h1>HealthyWork</h1>
		<div id="loginForm">
			<h2>ログイン</h2>
			<div>
				<label for="username">社員 ID</label>
				<input type="text" name="username" v-model="employee.e_id" />
				{{ employee.e_id }}
				<label for="password">パスワード</label>
				<input type="password" name="password" v-model="employee.e_password" />
				{{ employee.e_password }}
				<p>
					<input type="submit" value="ログイン" @click.prevent="login()" />
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Login",
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
				// var logForm = Object.assign({}, this.employee);
				const options = {
					method: "POST",
					headers: { "content-type": "application/form-data" },
					data: logForm,
					url: "http://jz.jec.ac.jp/innovative/e_login.php"
				};
				this.$http
					.post(options)
					.then(response => {
						console.log(response.data);

						// this.$emit("authenticated", true);
						// this.$router.replace({ name: "foodmenu" });

						// document.body.style.background = "#fff";
					})
					.catch(err => {
						console.log(err.message);
					});
			},
			toFormData: function(obj) {
				let formData = new FormData();
				for (let key in obj) {
					formData.append(key, obj[key]);
				}
				return formData;
			}
		}
	};
</script>

<style lang="scss" scoped>
	#login {
		margin: 0 auto;
		position: absolute;
		transform: translate(-50%, -50%);
		top: 40%;
		left: 50%;

		h1 {
			color: #fff;
			font-size: 50px;
		}

		#loginForm {
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