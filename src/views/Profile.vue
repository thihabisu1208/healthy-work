<template>
	<div id="profile">
		<router-link to="/setting" id="goBack">
			<p class="icons">
				<font-awesome-icon icon="arrow-left" />
			</p>
		</router-link>
		<Header headerName="プロフィール" />
		<div id="profileData">
			<div class="profile" v-for="profile in profileData" :key="profile.e_id">
				<div class="id profileData">
					<p>社員 ID</p>
					<p>{{ profile.e_id }}</p>
				</div>
				<div class="name profileData">
					<p>名前</p>
					<p>{{ profile.e_name }}</p>
				</div>
				<div class="gender profileData">
					<p>性別</p>
					<p v-if="profile.e_gender == 1">男性</p>
					<p v-else>女性</p>
				</div>
				<div class="birthday profileData">
					<p>生年月日</p>
					<p>{{ profile.e_birth }}</p>
				</div>
				<div class="department profileData">
					<p>部署</p>
					<p>{{ profile.e_department }}</p>
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
		},
		data() {
			return {
				profile: [],
				user: localStorage.getItem("employee")
			};
		},
		methods: {
			getProfile() {
				this.$http
					.get("http://jz.jec.ac.jp/innovative/showEmployee.php")
					.then(response => {
						this.profile = response.data;
					});
			}
		},
		computed: {
			profileData() {
				return this.profile.filter(employee => employee.e_id == this.user);
			}
		},
		mounted() {
			this.getProfile();
		}
	};
</script>

<style lang="scss" scoped>
	#profile {
		margin: 60px 0;
		background: #fff;
		height: 100vh;
		padding-top: 10px;

		#goBack {
			position: fixed;
			top: -4%;
			left: 3%;
			z-index: 999;
			font-size: 30px;
			color: #fff;
		}
		#profileData {
			.profile {
				margin: 10px auto 0;
				width: 90%;

				.profileData {
					margin: 10px auto 0;
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
