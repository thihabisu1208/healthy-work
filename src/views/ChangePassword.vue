<template>
	<div class="changePassword">
		<router-link to="/profile" id="goBack">
			<p class="icons">
				<font-awesome-icon icon="arrow-left" />
			</p>
		</router-link>
		<Header headerName="パスワード再設定" />
		<form
			method="POST"
			action="http://jz.jec.ac.jp/innovative/changePassword.php"
			id="changePassword"
		>
			<input type="text" name="e_id" class="hide" v-model="e_id" />
			<p>
				<label for="oldPassword">現在のパスワード</label>
			</p>
			<input type="text" name="e_oldpassword" id />
			<p>
				<label for="newPassword">新しいパスワード</label>
			</p>
			<input type="text" name="e_password" v-model="inputPassword" id />
			<p>
				<label for="confirmPassword">新しいパスワードを確認</label>
			</p>
			<input type="text" name="checkPassword" v-model="checkedPassword" id />

			<p id="save">
				<input type="submit" value="再設定する" @click="checkPassword" />
			</p>
		</form>
	</div>
</template>

<script>
	import Header from "@/components/Header.vue";

	export default {
		name: "changepassword",
		components: {
			Header
		},
		data() {
			return {
				e_id: localStorage.getItem("employee"),
				inputPassword: "",
				checkedPassword: ""
			};
		},
		methods: {
			checkPassword(e) {
				const form = document.querySelector("form");
				if (this.inputPassword != this.checkedPassword) {
					e.preventDefault();
					alert("Password が一致してません");
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
	.changePassword {
		margin: 60px 0;
		background: #fff;
		height: 100vh;
		padding-top: 10px;
	}

	#goBack {
		position: fixed;
		top: -4%;
		left: 3%;
		z-index: 999;
		font-size: 30px;
		color: #fff;
	}

	.hide {
		display: none;
	}

	#changePassword {
		width: 70%;
		margin: 50px auto;

		p {
			text-align: center;
			font-size: 20px;
		}

		input {
			font-size: 20px;
			width: 100%;
			height: 35px;
			border: 1px solid rgb(212, 203, 203);
			background: rgb(212, 203, 203);
		}
	}

	#save {
		text-align: center;
		font-size: 0;
		padding: 20px 0;
		input {
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
			outline: none;

			display: flex;
			align-items: center;
			justify-content: center;

			height: auto;

			font-size: 22px;
			margin: 10px auto 20px;
			padding: 10px 100px;
			width: 60%;
			background: #34495e;
			color: #fff;
			border-radius: 16px;
			border: 0;
		}
	}
</style>