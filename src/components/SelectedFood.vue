<template>
	<div id="selectedFood">
		<!-- <Food :todayMenu="menu" /> -->
	</div>
</template>

<script>
	import Food from "./Food";
	export default {
		name: "selectedfood",
		props: ["todayMenu"]
	};
</script>

<style lang="scss" scoped>
</style>