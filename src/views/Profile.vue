<template>
	<div id="profile">
		<router-link to="/setting" id="goBack">
			<p class="icons">
				<font-awesome-icon icon="arrow-left" />
			</p>
		</router-link>
		<Header headerName="プロフィール" />
		<div id="profileData">
			<p class="icons">
				<img src="../assets/img/profile.png" alt />
			</p>
			<div class="profile">
				<div class="name profileData">
					<p>名前</p>
					<p>ティハ トーン ナイン</p>
				</div>
				<div class="id profileData">
					<p>社員 ID</p>
					<p>5046133</p>
				</div>
				<div class="gender profileData">
					<p>性別</p>
					<p>男</p>
				</div>
				<div class="birthday profileData">
					<p>生年月日</p>
					<p>1997年11月14日</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from "@/components/Header.vue";

	export default {
		name: "profile",
		components: {
			Header
		}
	};
</script>

<style lang="scss" scoped>
	#profile {
		margin: 100px 0 15vh;
		#goBack {
			position: fixed;
			top: -4%;
			left: 3%;
			z-index: 999;
			font-size: 30px;
			color: #fff;
		}
		#profileData {
			.icons {
				margin: 0 auto;
				width: 40%;
				img {
					width: 100%;
					border-radius: 50%;
				}
			}

			.profile {
				margin: 20px auto 0;
				width: 90%;

				.profileData {
					margin: 0 auto;
					display: grid;
					grid-template-columns: 1fr 1fr;
					p {
						margin: 10px 0;
						padding: 0;
					}

					p:nth-of-type(1) {
						font-size: 18px;
					}

					p:nth-of-type(2) {
						text-align: right;
					}
				}
			}
		}
	}
</style>