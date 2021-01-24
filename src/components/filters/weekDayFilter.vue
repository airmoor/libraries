<template>
	<div>
		<div>Работает по дням недели:</div>
		<div v-for="weekday of weekdays">
				<div class="q-gutter-sm">
				<q-checkbox class="q-ml-none"
				            dark
				            color="deep-purple"
				            @input="setWeekdays"
				            @change="setWeekdays"
				            v-model="weekday.isChecked"
				            :label="weekday.name" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "weekDayFilter",
		data: () => ({
			selectedWeekdays:'',
			weekdays: [
				{
					name: 'Пн',
					isChecked: false,
				},
				{
					name: 'Вт',
					isChecked: false,
				},
				{
					name: 'Ср',
					isChecked: false,
				},
				{
					name: 'Чт',
					isChecked: false,
				},
				{
					name: 'Пт',
					isChecked: false,
				},
				{
					name: 'Сб',
					isChecked: false,
				},
				{
					name: 'Вс',
					isChecked: false,
				},

			]
		}),
		methods: {
			setWeekdays() {
				this.$store.state.filters.weekDays = this.weekdays;
			}
		}
	}
</script>

<style scoped>

</style>