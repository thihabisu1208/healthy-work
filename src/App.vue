<template>
	<div id="app">
		<div id="nav">
			<nav id="nav" v-if="localUser">
				<ul>
					<li>
						<router-link to="/healthbalance">
							<p class="icons">
								<font-awesome-icon icon="balance-scale" />
							</p>
							<span>食事バランス</span>
						</router-link>
					</li>
					<li>
						<router-link to="/foodmenu">
							<p class="icons">
								<font-awesome-icon icon="utensils" />
							</p>
							<span>社食メニュー</span>
						</router-link>
					</li>
					<li>
						<router-link to="/journal">
							<p class="icons">
								<font-awesome-icon icon="calendar-alt" />
							</p>
							<span>日々の食事</span>
						</router-link>
					</li>
					<li>
						<router-link to="/setting">
							<p class="icons">
								<font-awesome-icon icon="cog" />
							</p>
							<span>マイページ</span>
						</router-link>
					</li>
				</ul>
			</nav>
			<nav v-else></nav>
			<!-- <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link> -->
		</div>
		<!-- <router-view /> -->
		<router-view @authenticated="setAuthenticated" />
	</div>
</template>

<script>
	export default {
		name: "App",
		data() {
			return {
				user: null,
				localUser: localStorage.employee,
				loading: false,
				inititated: false,
				authenticated: false
			};
		},
		mounted() {
			// if (!this.authenticated) {
			// 	this.$router.replace({ name: 'login' });
			// }
			// document.body.style.background = "#fff";
		},
		methods: {
			setAuthenticated(status) {
				this.authenticated = status;
			}
		}
	};
</script>

<style lang="scss">
	@import url("https://fonts.googleapis.com/css?family=Sawarabi+Mincho");
	@import url("https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c&display=swap");
	// .fade-enter-active,
	// .fade-leave-active {
	// 	transition: opacity 0.5s;
	// }
	// .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	// 	opacity: 0;
	// }

	body {
		width: 100vw;
		background: #ff8f90;
		margin: 0;
		padding: 0;
		font-family: "M PLUS Rounded 1c";
	}

	#nav {
		z-index: 999;
		position: fixed;
		width: 100%;
		bottom: 0;
		margin: 0;
		padding: 0;
		background: #fff;
		// background: #ff8f90;
		// color: #fff;

		ul {
			margin: 0;
			padding: 5px 0;
			list-style: none;
			display: grid;
			grid-template-columns: repeat(4, 1fr);
		}

		ul li {
			margin: 0;
			padding: 0;
		}

		ul li a {
			text-decoration: none;
			color: #968080;
		}

		ul li .router-link-exact-active {
			color: #ff8f90;

			.icons {
				font-size: 25px;
			}
			span {
				font-size: 12px;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}

		ul li .icons {
			text-align: center;
			padding: 0;
			margin: 0;
			font-size: 30px;
		}

		ul li span {
			display: none;
			// display: flex;
			// align-items: center;
			// justify-content: center;
		}
	}

	.router-animation-enter-active {
		animation: coming 0.5s;
		animation-delay: 0.5s;
		opacity: 0;
	}
	.router-animation-leave-active {
		animation: going 0.5s;
	}

	@keyframes going {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
	@keyframes coming {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
