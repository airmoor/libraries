<template>
	<div>
		<div class="text-h5 q-mb-md">
			Расписание
		</div>
		<div v-if="workingSchedule">
			<div class="q-mb-xs row" v-for="(weekday, idx) of weekdays">
				<div class="library-schedule__weekday">
					{{weekday}}
				</div>
				<div v-if="workingSchedule[idx]">
				<span v-if="workingSchedule[idx].from">
					{{ workingSchedule[idx].from.split(':').splice(0,2).join(':') }} -
				</span>
					<span v-if="workingSchedule[idx].to">
					{{ workingSchedule[idx].to.split(':').splice(0,2).join(':') }}
				</span>
				</div>
				<span v-else>
				Выходной
			</span>
			</div>
		</div>
		<div v-else>
			Данные не указаны
		</div>
	</div>
</template>

<script>
	export default {
		name: "library-schedule",
		props: ['workingSchedule'],
		data: () => ({
			weekdays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
		})
	}
</script>

<style lang="scss">
	.library-schedule {
		&__weekday {
			width: 30px;
		}
	}
</style>