<template>
	<div>
		<h1>hey</h1>
		<div class="foodMenu">
			<div v-for="dish in mainDish" :key="dish.id" class="food">
				<p>{{ dish.name }}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from "vuex";

	export default {
		name: "anotherfood",
		methods: {
			...mapActions(["fetchFoods"])
		},
		computed: {
			...mapGetters(["mainDish"])
		},
		created() {
			this.fetchFoods();
		}
	};
</script>

<style lang="scss" scoped>
	img {
		width: 100%;
	}
</style>