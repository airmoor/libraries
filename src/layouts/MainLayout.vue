<template>
	<div>
		<div v-if="isLoaded">
			<q-layout view="lHh Lpr lFf" class="">
				<main-header/>

				<q-drawer v-if="withSidebar"
				          v-model="$store.state.isSidebarOpen"
				          show-if-above
				          bordered
				          content-class="bg-grey-8 text-deep-purple-1"
				>
					<q-list class="q-px-sm q-py-md">
						<div class="text-h5 q-pb-md">Фильтры</div>
						<week-day-filter class="q-mb-md"/>
						<city-filter class="q-mb-md"/>
						<with-contacts-filter class="q-mb-md"/>
					</q-list>
				</q-drawer>

				<q-page-container>
					<router-view/>
				</q-page-container>
			</q-layout>
		</div>

		<div v-else>
			<preloader/>
		</div>
	</div>
</template>

<script>
	import MainHeader from "./MainHeader";
	import WeekDayFilter from "../components/filters/weekDayFilter";
	import CityFilter from "../components/filters/cityFilter";
	import WithContactsFilter from "../components/filters/withContactsFilter";
	import Preloader from "../components/preloader";
	export default {
		name: 'MainLayout',
		components: {Preloader, WithContactsFilter, CityFilter, WeekDayFilter, MainHeader},
		data() {
			return {
				isLoaded: false
			}
		},
		computed: {
			withSidebar() {
				return this.$route.meta?.withSidebar
			}
		},
		methods: {
			fetchData() {
				if (this.$store.state.libraries.length===0)
				fetch('library-data-all.json',{
					headers : {
						'Content-Type': 'application/json',
						'Accept': 'application/json'
					}
				}).then(response => {
					console.log('response',response);
					return response.json();
				}).then(data => {
						console.log('data',data);
						this.$store.state.libraries = data;
						this.$store.state.filteredLibraries = data;
				}).then(() => {
					this.isLoaded = true;
				})
			}
		},
		created() {
			window.addEventListener('load', () => {
				this.fetchData();
			});
		},
	}
</script>

<style lang="scss">
	.q-layout {
		/*background-image: linear-gradient(to right top, #a4c2ee, #b3c2ef, #c1c3ef, #cec4ed, #d9c5eb);*/
		background-image: linear-gradient(to top, #bbbbfb, #acace9, #9e9edb,#8d8dc8,#7575c7, #673AB7);
		/*background-image: linear-gradient(to top, #e0c1ff, #cea2ff, #bc89ff, #ab6aff, #8f3fe4, #673AB7);*/

	}
</style>
