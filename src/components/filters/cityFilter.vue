<template>
	<div>
		<q-select
				filled
				dark
				color="deep-purple"
				hide-selected
				fill-input
				input-debounce="200"
				v-model="city"
				use-input
				label="Город"
				:options="stringOptions"
				@filter="filterFn"
		>
			<template v-slot:no-option>
				<q-item>
					<q-item-section class="text-grey">
						No results
					</q-item-section>
				</q-item>
			</template>
			<template v-slot:append>
				<q-icon
						v-if="city !== null"
						class="cursor-pointer"
						name="clear"
						@click.stop="city = null"
				/>
			</template>
		</q-select>
	</div>
</template>

<script>
	export default {
		name: "city-filter",
		data() {
			return {
				search: null,
				options: this.stringOptions,
				city: null,
			}
		},
		computed: {
			libraries() {
				return this.$store.state.libraries;
			},
			stringOptions() {
				let cities = [];
				if (this.libraries)
					this.libraries.forEach(el => {
						let city = el.data.general?.locale?.name;
						cities.push(city)
					});
				let uniqueCities = new Set(cities);
				cities = [...uniqueCities];
				return cities
			}
		},
		watch: {
			city() {
				this.$store.commit('setCity', this.city);
			}
		},
		methods: {
			filterFn(val, update) {
				if (val === '') {
					update(() => {
						this.options = this.stringOptions
					});
					return
				}

				update(() => {
					const needle = val.toLowerCase();
					this.options = this.stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
				})
			}
		}
	}
</script>

<style scoped>

</style>