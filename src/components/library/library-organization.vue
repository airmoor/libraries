<template>
	<div>
		<div class="text-h5 q-mb-md">
			Организация
		</div>
		<div v-if="organization.name" class="q-mb-md">
			{{organization.name}}
		</div>
		<div v-if="organization.inn" class="q-mb-md">
			Инн: {{organization.inn}}
		</div>
		<div v-if="organization.fullAddress" class="q-mb-md">
			Адрес организации: {{organization.fullAddress}}
		</div>
	</div>
</template>

<script>
	export default {
		name: "library-organization",
		props: ['organization']
	}
</script>

<style scoped>

</style>