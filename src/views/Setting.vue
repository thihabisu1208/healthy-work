<template>
	<div id="setting">
		<Header headerName="マイページ" />
		<div id="settingData">
			<div class="settings">
				<router-link to="/profile">
					<p class="icons">
						<font-awesome-icon icon="address-card" />
					</p>
					<p>プロフィール</p>
				</router-link>
				<router-link to="/healthreport">
					<p class="icons">
						<font-awesome-icon icon="notes-medical" />
					</p>
					<p>健康診断結果</p>
				</router-link>
			</div>

			<p id="logout" @click="logout()">
				<input type="submit" value="ログアウト" />
			</p>
		</div>
	</div>
</template>

<script>
	import Header from "@/components/Header.vue";

	export default {
		name: "setting",
		components: {
			Header
		},
		methods: {
			logout() {
				document.body.style.background = "#ff8f90";
				this.$emit("authenticated", false);
				localStorage.removeItem("token");
				localStorage.removeItem("employee");
				delete this.$http.defaults.headers.common["Authorization"];
				this.$router.push({ name: "login" });
				location.reload();
			}
		}
	};
</script>

<style lang="scss" scoped>
	#setting {
		margin: 60px 0;
		background: #fff;
		height: 100vh;
	}

	#settingData {
		.settings {
			width: 100%;
			margin: 0 auto;
			display: grid;
			grid-template-columns: 1fr 1fr;

			a {
				border: 1px solid #f5f5f5;
				text-decoration: none;
				color: black;
				.icons {
					font-size: 65px;
					color: #ff8f90;
				}

				p {
					margin: 0;
					text-align: center;
				}

				p:nth-of-type(2) {
					margin: 0 0 30px;
				}
			}
		}
	}

	#logout {
		text-align: center;
		input {
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
			outline: none;

			font-size: 20px;
			padding: 10px 0;
			margin: 30px auto 20px;
			width: 60%;
			text-align: center;
			background: #34495e;
			color: #fff;
			border-radius: 16px;
			border: 0;
		}
	}
</style>
