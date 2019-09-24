<template>
	<div id="app">
		<transition name="router-animation">
			<router-view />
		</transition>
		<nav id="nav">
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
	</div>
</template>
<script>
	import { SpringSpinner } from "epic-spinners";
	export default {
		components: {
			SpringSpinner
		}
	};
</script>
<style lang="scss">
	@import url("https://fonts.googleapis.com/css?family=Sawarabi+Mincho");
	@import url("https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c&display=swap");
	body {
		width: 100vw;
		margin: 0;
		padding: 0;
		font-family: "M PLUS Rounded 1c";
	}

	#nav {
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
			padding: 10px;
			list-style: none;
			display: grid;
			grid-template-columns: repeat(4, 1fr);
		}

		ul li {
			margin: 0;
		}

		ul li a {
			text-decoration: none;
			color: #968080;
		}

		ul li .router-link-exact-active {
			color: #ff8f90;
		}

		ul li .icons {
			text-align: center;
			padding: 0;
			margin: 0;
			font-size: 25px;
		}

		ul li span {
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 13px;
		}
	}

	.router-animation-enter-active {
		animation: coming 1s;
		animation-delay: 0.5s;
		opacity: 0;
	}
	.router-animation-leave-active {
		animation: going 1s;
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
