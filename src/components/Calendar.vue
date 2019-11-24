<template>
	<div>
		<!-- {{ filteredArray }} -->
		<vue-cal
			class="vuecal--rounded-theme vuecal--healthy-theme"
			xsmall
			hide-view-selector
			:time="false"
			:allDay="true"
			:events="filteredArray"
			:on-event-click="onEventClick"
			default-view="month"
			:disable-views="['week']"
			:clickToNavigate="true"
			locale="ja"
		>
			<!-- Custom title -->
			<template v-slot:title="{ title, view }">
				{{ view.startDate.getFullYear() }} 年
				{{ (view.startDate.getMonth() + 1) < 10 ? '0' : '' }}
				{{ view.startDate.getMonth() + 1 }} 月
				<!-- Print week number on week view -->
				<span v-if="view.id === 'week'">w{{ view.startDate.getWeek() }}</span>
				<!-- Print current day on day view -->
				<span
					v-else-if="view.id === 'day'"
				>{{ view.startDate.getDate() < 10 ? '0' : '' }}{{ view.startDate.getDate() }} 日</span>
			</template>
		</vue-cal>
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
			let date = "2019-11-18";
			let hey = `<a class="go" style="text-decoration: none;" href="http://localhost:8080/healthbalance/${date}">詳しく見る</a>`;

			return {
				events: [],
				eventsFromApi: [],
				user: {
					e_id: localStorage.getItem("employee")
				}
			};
		},
		methods: {
			onEventClick(event, e) {
				this.selectedEvent = event;
				this.showDialog = true;
				// alert(event.start);
				this.$router.push("/healthbalance");

				e.stopPropagation();
			},
			getEvents() {
				let formData = this.toFormData(this.user);
				this.$http
					.post("http://jz.jec.ac.jp/innovative/showWhoRecord.php", formData)
					.then(response => {
						this.eventsFromApi = response.data.menu;
					})
					.catch(error => {
						console.log(error);
					});
			},
			toFormData: function(obj) {
				let formData = new FormData();
				for (let key in obj) {
					formData.append(key, obj[key]);
				}
				return formData;
			},
			count(array) {
				let counts = array.reduce(
					(out, { l_date }) => ({
						...out,
						[l_date]: out[l_date] + 1 || 1
					}),
					{}
				);
				return Object.keys(counts).map(key => ({
					start: key,
					end: key,
					allDay: true,
					content: `<div><h2>食事の登録があります</h2><img width='200px' style="margin: 10px auto;"src='/assets/img/chart.png' /><p><a href style="margin: 10px auto; text-decoration: none; color: #fff; padding: 10px 20px; background: #FF8F90; border-radius: 16px;">詳しく見る</a></p></div>`,
					count: counts[key]
				}));
			},
			go() {
				alert("ok");
			}
		},
		mounted() {
			this.getEvents();
		},
		computed: {
			eventDates() {
				return this.eventsFromApi.map(event => event.l_date);
			},
			filteredArray() {
				return this.count(this.eventsFromApi);
			}
		}
	};
</script>

<style lang="scss" scoped>
	.go {
		text-decoration: none;
	}
</style>
