<template>
	<div id="foodmenu">
		<Header headerName="本日のメニュー" />
		<Food />
	</div>
</template>

<script>
	import Header from "@/components/Header.vue";
	import Food from "@/components/Food.vue";

	export default {
		name: "foodmenu",
		components: {
			Header,
			Food
		}
	};
</script>

<style lang="scss" scoped>
	#foodmenu {
		margin: 60px 0;
		background: #fff;
		height: 100%;
	}
</style>
