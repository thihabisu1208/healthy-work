<template>
	<div id="journal">
		<Header headerName="日々の食事" />
		<div id="calendar">
			<FullCalendar
				defaultView="dayGridMonth"
				:plugins="calendarPlugins"
				ref="fullCalendar"
				locale="ja"
			/>
		</div>
	</div>
</template>

<script>
	import Header from "@/components/Header.vue";
	import FullCalendar from "@fullcalendar/vue";
	import dayGridPlugin from "@fullcalendar/daygrid";

	export default {
		name: "journal",
		components: {
			Header,
			FullCalendar // make the <FullCalendar> tag available
		},
		data() {
			return {
				calendarPlugins: [dayGridPlugin]
			};
		}
	};
</script>

<style lang="scss" scoped>
	@import "~@fullcalendar/core/main.css";
	@import "~@fullcalendar/daygrid/main.css";

	#journal {
		margin: 100px 0 15vh;
	}

	#calendar {
		// margin: 100px 0;
		margin: 0;
	}
	.fc-toolbar.fc-header-toolbar {
		margin: 0;
	}
</style>
