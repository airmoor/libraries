<template>
	<yandex-map :coords="coords"
	            :settings="settings"
	            zoom=14
	            :behaviors="behaviors"
	>
		<ymap-marker
				:coords="coords"
				marker-id="123123"
				:icon="markerIcon"
		>
			<svgicon name="map-marker"/>
		</ymap-marker>
	</yandex-map>
</template>

<script>
	import { yandexMap, ymapMarker } from 'vue-yandex-maps'
	export default {
		name: "yandex-maps",
		components: { yandexMap, ymapMarker },
		props: ['coords'],
		data: () => ({
			settings: {
				apiKey: 'd3e66488-d056-439d-be6f-2d383463adab',
				lang: 'ru_RU',
				coordorder: 'longlat',
				version: '2.1',
			},
			behaviors:['drag','dblClickZoom', 'multiTouch'],
			markerIcon: {
				layout: 'default#imageWithContent',
				imageSize: [45, 55],
				imageOffset: [-22, -27],
			},

		}),
		mounted() {

		}

	}
</script>

<style lang="scss">
	.ymap-container {
		height: 600px;
	}

</style>