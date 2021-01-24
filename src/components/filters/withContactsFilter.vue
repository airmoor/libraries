<template>
	<div>
		<div class="q-gutter-sm">
			<q-checkbox class="q-ml-none"
			            v-model="withPhoneSelected"
			            label="Указан телефон"
			            dark
			            color="deep-purple"/>
		</div>

		<div class="q-gutter-sm">
			<q-checkbox class="q-ml-none"
			            v-model="withEmailSelected"
			            label="Указан адрес эл. почты"
			            dark
			            color="deep-purple"/>
		</div>
	</div>
</template>

<script>
	export default {
		name: "withContactsFilter",
		data: () => ({
			withEmailSelected: false,
			withPhoneSelected: false,
		}),
		watch: {
			withEmailSelected() {
				this.$store.commit('setWithEmail', this.withEmailSelected);
			},
			withPhoneSelected() {
				this.$store.commit('setWithPhone', this.withPhoneSelected);
			},
		},
	}
</script>

<style scoped>

</style>