<template>
	<q-page class="q-px-lg q-pb-lg">
		<q-table v-if="filteredLibraries"
		         grid
		         grid-header
		         :data="filteredLibraries"
		         :columns="columns"
		         row-key="name"
		         rows-per-page-label="Записей на странице:"
		         :pagination.sync="pagination"
		         :filter="filter"
		         no-data-label="По данному запросу ничего не найдено"
		         :rows-per-page-options="rowsPerPageOptions"
		         @row-click="redirectToLibrary"
		>
			<template v-slot:header="props">
				<q-tr :props="props">
					<q-th
							v-for="col in props.cols"
							:key="col.name"
							:props="props"
							class="text-white"
					>
						{{ col.label }}
					</q-th>
				</q-tr>
			</template>
			<template v-slot:top-right>
				<q-input dark borderless dense debounce="300" v-model="filter" placeholder="Поиск">
					<template v-slot:append>
						<q-icon name="search"/>
					</template>
				</q-input>
			</template>
			<template v-slot:no-data>
				<div class="full-width row flex-center q-gutter-sm">
					<span>
                        По данному запросу ничего не найдено
                     </span>
				</div>
			</template>
		</q-table>
	</q-page>
</template>

<script>
	export default {
		name: 'LibraryList',
		data() {
			return {
				pagination: {
					page: 1,
					rowsPerPage: this.getItemsPerPage()
				},
				columns: [
					{
						name: 'name',
						label: 'Название',
						align: 'left',
						field: row => row.nativeName,
						sortable: true
					},
					{
						name: 'address',
						align: 'left',
						label: 'Адрес',
						field: row => row.data.general.address?.fullAddress,
						sortable: true
					},
					{
						name: 'organization',
						label: 'Организация',
						field: row => row.data.general.organization?.name,
						sortable: true,
					},
				],

				filter: '',
			}
		},
		computed: {
			rowsPerPageOptions() {
				return [50, 100, 500]
			},
			libraries() {
				return this.$store.state.libraries;
			},
			filteredLibraries() {
				let city = this.$store.state.filters.city;
				let withPhone = this.$store.state.filters.contacts.withPhone;
				let withEmail = this.$store.state.filters.contacts.withEmail;
				let weekDays = this.$store.state.filters.weekDays;
				let result = this.libraries;

				if (city) result = result.filter(library =>
					library.data.general.locale.name === city);

				if (withEmail) result = result.filter(library =>
					library.data.general.contacts &&
					library.data.general.contacts.email );

				if (withPhone)
					result = result.filter(library =>
						library.data.general.contacts &&
						library.data.general.contacts.phones  &&
						library.data.general.contacts.phones.length > 0);

				if (weekDays) {
					result = result.filter(this.isWeekdayIncludes)
				}

				return result;
			}
		},
		methods: {
			isWeekdayIncludes(library) {
				let weekDays = this.$store.state.filters.weekDays;
				let isIncludes = true;
				weekDays.forEach((weekday, idx) => {
					if (weekday.isChecked) {
						if (!library.data.general || !library.data.general.workingSchedule) isIncludes = false;
						else if (!library.data.general.workingSchedule[idx]) isIncludes = false;
					}
				});
				return isIncludes;
			},
			getItemsPerPage() {
				const {screen} = this.$q;
				if (screen.lt.sm) {
					return 6
				}
				if (screen.lt.md) {
					return 6
				}
				if (screen.lt.lg) {
					return 9
				}
				return 12
			},
			redirectToLibrary(evt, row) {
				this.$router.push({name: 'library', params: {id: row.nativeId}});
			}
		},
		watch: {
			'$q.screen.name'() {
				this.pagination.rowsPerPage = this.getItemsPerPage()
			}
		},
	}
</script>

<style lang="scss">
	.q-table__grid-item-card {
		height: 100%;
	}
	.q-table__top {
		 padding: 0;
	}
	.q-table th, .q-table td {
		padding: 4px;
	}
</style>
