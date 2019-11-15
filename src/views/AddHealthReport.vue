<template>
	<div id="addHealthReport">
		<router-link to="/healthreport" id="goBack">
			<p class="icons">
				<font-awesome-icon icon="arrow-left" />
			</p>
		</router-link>
		<Header headerName="健康診断結果登録" />
		<vue-tabs>
			<v-tab title="First tab">
				First tab content
			</v-tab>

			<v-tab title="Second tab">
				Second tab content
			</v-tab>
		</vue-tabs>
	</div>
</template>

<script>
import Header from '@/components/Header.vue';
import { VueTabs, VTab } from 'vue-nav-tabs';
import 'vue-nav-tabs/themes/vue-tabs.css';

export default {
	name: 'addhealthreport',
	components: {
		Header,
		VueTabs,
		VTab
	}
};
</script>

<style lang="scss" scoped>
#addHealthReport {
	margin: 70px 0 15vh;
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
