<template>
	<q-header class="bg-transparent text-white q-py-lg" reveal>
		<q-toolbar>
			<q-btn v-if="withSidebar"
					flat
					dense
			        class="q-mr-sm"
					round
					icon="filter_alt"
					aria-label="Menu"
					@click="toggleIsOpen"
			/>
			<q-toolbar-title class="text-center">
			<router-link :to="{name: 'library-list'}">
				<q-toolbar-title>
					Библиотеки России
				</q-toolbar-title>
			</router-link>
			</q-toolbar-title>
		</q-toolbar>
	</q-header>
</template>

<script>
	export default {
		name: "MainHeader",
		computed: {
			withSidebar() {
				return this.$route.meta?.withSidebar
			}
		},
		methods: {
			toggleIsOpen() {
				this.$store.state.isSidebarOpen = !this.$store.state.isSidebarOpen
			}
		},
	}
</script>

<style lang="scss">
	.q-header{
		position: absolute;
	}
</style>