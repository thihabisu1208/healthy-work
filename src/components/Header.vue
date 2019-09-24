<template>
	<div id="headers">
		<h1>{{ headerName }}</h1>
	</div>
</template>

<script>
	export default {
		name: "headers",
		props: ["headerName"],
		data() {
			return {};
		}
	};
</script>

<style lang="scss" scoped>
	#headers {
		width: 100%;
		position: fixed;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #ff8f90;
		color: #fff;
		z-index: 3;

		h1 {
			font-size: 25px;
			margin: 0;
			padding: 10px 10px;
		}
	}
</style>