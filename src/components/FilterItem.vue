<template>
	<div>
<!--		<component :key="'q' + filter.name" :type="filter.type" :is="component" />-->
		<div>
			{{filter.title}}
			<q-select
					filled
					hide-selected
					fill-input
					input-debounce="0"

					v-model="model"
					use-input
					label="Simple filter"
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
			</q-select>
		</div>
	</div>
</template>

<script>

	export default {
		name: "FilterItem",
		props: ['filter'],
		data () {
			return {
				search: null,
				options: this.stringOptions,
				model:null,
			}
		},
		computed: {
			libraries() {
				return this.$store.state.libraries;
			},
			stringOptions() {
				console.log('filter', this.filter)
				let elements = []
				let fields = this.filter.field.split('.');

				if (this.libraries)
				this.libraries.forEach(el=> {
					let element = el;
					for (let field of fields) {
						element = element[field]
					}
					elements.push(element)

				})
				console.log('elements',elements)
				return elements
			}

			/*component() {
				const components = {
					"STARS": QuestionStars,
					"SMILE": QuestionSmile,
					"SELECT": QuestionSelect,
					"LIKE": QuestionLike,
				};

				if (!this.question || !this.question.TYPE || !components[this.question.TYPE]) {
					return null;
				}

				return components[this.question.TYPE] || null;
			},*/
		},
		methods:{
			filterFn (val, update) {
				if (val === '') {
					update(() => {
						this.options = this.stringOptions

					})
					return
				}

				update(() => {
					const needle = val.toLowerCase()
					this.options = this.stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
				})
			}
		}
	}
</script>

<style scoped>

</style>