<template>
	<div id="foodmenu">
		<Header headerName="本日のメニュー" />
		<!-- <AnotherFood /> -->
		<Food />
		<SelectedFood />
	</div>
</template>

<script>
	import Header from "@/components/Header.vue";
	// import AnotherFood from "@/components/AnotherFood.vue";
	import Food from "@/components/Food.vue";
	import SelectedFood from "@/components/SelectedFood.vue";

	export default {
		name: "foodmenu",
		components: {
			Header,
			// AnotherFood,
			Food,
			SelectedFood
		}
	};
</script>

<style lang="scss" scoped>
	#foodmenu {
		margin: 100px 0 50vh;
	}
</style>
