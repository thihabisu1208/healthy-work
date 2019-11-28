<template>
	<div id="healthreport">
		<router-link to="/setting" id="goBack">
			<p class="icons">
				<font-awesome-icon icon="arrow-left" />
			</p>
		</router-link>
		<Header headerName="健康診断結果" />

		<HealthReport />
	</div>
</template>

<script>
	import Header from "@/components/Header.vue";
	import HealthReport from "@/components/HealthReport.vue";

	export default {
		name: "healthreport",
		components: {
			Header,
			HealthReport
		}
	};
</script>

<style lang="scss" scoped>
	#healthreport {
		margin: 60px 0;
		background: #fff;
		height: 100vh;

		#goBack {
			position: fixed;
			top: -4%;
			left: 3%;
			z-index: 999;
			font-size: 30px;
			color: #fff;
		}
	}
</style>
