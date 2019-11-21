<template>
	<div id="journal">
		<Header headerName="日々の食事" />
		<div id="calendar">
			<!-- <FullCalendar
				class="calendar"
				defaultView="dayGridMonth"
				:plugins="calendarPlugins"
				:events="events"
				:selectable="true"
				@select="handleSelect"
				@clickDate="handleDateClick"
				ref="fullCalendar"
				locale="ja"
			/>-->
			<Calendar />
		</div>
	</div>
</template>

<script>
	import Header from "@/components/Header.vue";
	import Calendar from "@/components/Calendar.vue";
	// import FullCalendar from "@fullcalendar/vue";
	// import dayGridPlugin from "@fullcalendar/daygrid";
	// import timeGridPlugin from "@fullcalendar/timegrid";
	// import interactionPlugin from "@fullcalendar/interaction";

	export default {
		name: "journal",
		components: {
			Header,
			Calendar
			// FullCalendar
		},
		data() {
			return {
				// events: [{ title: 'Something', start: '2019-11-12' }],
				// calendarPlugins: [dayGridPlugin, timeGridPlugin, interactionPlugin]
			};
		},
		methods: {
			// handleDateClick(e) {
			// 	console.log(e);
			// },
			// handleSelect(e) {
			// 	console.log(e);
			// 	alert(e.startStr);
			// }
		}
	};
</script>

<style lang="scss" scoped>
	@import "~@fullcalendar/core/main.css";
	@import "~@fullcalendar/daygrid/main.css";

	#journal {
		margin: 70px 0;
		background: #fff;
		height: 100vh;
		padding-top: 50px;
	}

	#calendar {
		margin: 0 auto;
		width: 90%;
	}

	.calendar {
		height: 100vh;
	}
	.fc-toolbar.fc-header-toolbar {
		margin: 0;
	}
</style>
