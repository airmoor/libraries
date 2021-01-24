<template>
	<div>
		<div class="text-h5 q-mb-md">
			Контакты
		</div>
		<div v-if="contacts.phones && contacts.phones.length">
			<div class="q-mb-xs">
				Телефон
			</div>
			<div class="q-mb-md" v-for="phone of contacts.phones">
				{{phone.value}}
			</div>
		</div>

		<div v-if="contacts.email">
			<div class="q-mb-xs">Адрес электронной почты</div>
			<div class="q-mb-md">
				{{contacts.email}}
			</div>
		</div>
		<div v-if="!contacts.phones && !contacts.email">
			Данные не указаны
		</div>
	</div>
</template>

<script>
	export default {
		name: "library-contacts",
		props: ['contacts']
	}
</script>

<style scoped>

</style>