<template>
	<div id="login">
		<h1>HealthyWork</h1>
		<div id="loginForm">
			<h2>ログイン</h2>
			<label for="username">社員 ID</label>
			<input type="text" name="username" v-model="input.username" />
			<label for="password">パスワード</label>
			<input type="password" name="password" v-model="input.password" />
			<p>
				<a @click.enter="login()">ログイン</a>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Login",
		data() {
			return {
				input: {
					username: "",
					password: ""
				}
			};
		},
		methods: {
			login() {
				if (this.input.username != "" && this.input.password != "") {
					if (
						this.input.username == this.$parent.mockAccount.username &&
						this.input.password == this.$parent.mockAccount.password
					) {
						this.$emit("authenticated", true);
						this.$router.replace({ name: "foodmenu" });
						document.body.style.background = "#fff";
					} else {
						console.log("The username and / or password is incorrect");
					}
				} else {
					console.log("A username and password must be present");
				}
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
</style>