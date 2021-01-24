<template>
	<div v-if="library" class="q-px-md q-pb-md layout-width">
		<q-card :class="$q.screen.gt.sm? 'q-pa-xl' : 'q-pa-lg'">
			<!-- library name -->
			<div v-if="library.nativeName"
			     :class="$q.screen.gt.md? 'q-mb-xl text-h4' : 'q-mb-md text-h5'">
				{{library.nativeName}}
			</div>

			<!-- image and description-->
			<div class="row"
                :class="$q.screen.gt.md? 'q-col-gutter-xl q-mb-xl' : 'q-col-gutter-md q-mb-md'">
				<div v-if="library.data.general.description" class="col-12 col-lg-6">
					<div class="q-mb-md" v-html="library.data.general.description"/>
				</div>
				<div v-if="library.data.general.image" class="col-12 col-lg-6">
					<q-img :src="library.data.general.image.url"
					       class="rounded-borders"
					       spinner-color="white" :ratio="16/9"
					/>
				</div>
			</div>

			<template>
				<div class="row" :class="$q.screen.gt.md? 'q-col-gutter-xl' : 'q-col-gutter-md'">
					<!-- info block -->
					<div class="col-12 col-md-6">
						<div class="row q-col-gutter-md" >
							<div v-if="library.data.general.contacts" class="col-12 col-md-6">
								<library-contacts :contacts="library.data.general.contacts"/>
							</div>
							<div v-if="library.data.general.organization" class="col-12 col-md-6">
								<library-organization :organization="library.data.general.organization"/>
							</div>
							<div class="col-12 col-md-6">
								<library-schedule :workingSchedule="library.data.general.workingSchedule"/>
							</div>
						</div>
					</div>
					<!-- map block -->
					<div v-if="library.data.general.address" class="col-12 col-md-6">
						<div class="text-h5 q-mb-md">
							Адрес
						</div>
						<div class="q-mb-md">
							{{this.library.data.general.address.fullAddress}}
						</div>
						<yandex-maps v-if="library.data.general.address.mapPosition &&
								 library.data.general.address.mapPosition.coordinates"
						             :coords="library.data.general.address.mapPosition.coordinates"/>
					</div>
				</div>
			</template>
		</q-card>
	</div>
</template>

<script>
	import YandexMaps from "../components/yandex-maps";
	import LibrarySchedule from "../components/library/library-schedule";
	import LibraryOrganization from "../components/library/library-organization";
	import LibraryContacts from "../components/library/library-contacts";

	export default {
		name: "Library",
		components: {LibraryContacts, LibraryOrganization, LibrarySchedule, YandexMaps},
		data() {
			return {
				image: '',
			}
		},
		computed: {
			libraries() {
				return this.$store.state.libraries;
			},
			library() {
				if (this.libraries)
					return this.libraries.find(el => el.nativeId === this.$route.params.id)
			},
		},
		mounted() {
			console.log(this.$q.screen)
		}
	}
</script>

<style lang="scss">

</style>