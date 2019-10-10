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

			<p id="logout">
				<router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>ログアウト</router-link>
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
		data() {
			return {
				authenticated: true
			};
		},
		methods: {
			logout() {
				this.authenticated = false;
				document.body.style.background = "#ff8f90";
				this.$router.replace({ name: "login" });
			}
		}
	};
</script>

<style lang="scss" scoped>
	#setting {
		margin: 50px 0 15vh;
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
		border-radius: 16px;
		text-align: center;
		margin: 100px auto 0;
		width: 50%;
		background: #34495e;
		padding: 10px;
		font-size: 20px;

		a {
			text-decoration: none;
			color: #fff;
		}
	}
</style>
