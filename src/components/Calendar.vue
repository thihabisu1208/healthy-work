<template>
	<div>
		<vue-cal
			class="vuecal--rounded-theme vuecal--healthy-theme"
			xsmall
			hide-view-selector
			:time="false"
			:events="events"
			default-view="month"
			:disable-views="['week']"
			:on-event-click="onEventClick"
			:clickToNavigate="true"
			locale="ja"
		></vue-cal>
	</div>
</template>

<script>
	import VueCal from "vue-cal";
	import "vue-cal/dist/i18n/ja.js";
	import "vue-cal/dist/vuecal.css";
	export default {
		name: "calendar",
		components: { "vue-cal": VueCal },
		props: {
			msg: String
		},
		data() {
			return {
				events: [
					{
						title: "Food for Today",
						start: "2019-11-14",
						end: "2019-11-14",
						content: `
							<a href="http://localhost:8080/healthbalance">Go</a>
							<img src="/assets/img/0904.png" />`
					}
				]
			};
		},
		methods: {
			onEventClick(event, e) {
				this.selectedEvent = event;
				// eslint-disable-next-line no-console
				console.log(this.selectedEvent);
				e.stopPropagation();
			}
		}
	};
</script>

<style lang="scss" scoped></style>
