import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		filters: {
			city: null,
			contacts: {
				withEmail: false,
				withPhone: false,
			},
			weekDays: null,
		},
		filteredLibraries: [],
		libraries: [],
		isSidebarOpen: false,
	},
	mutations: {
		setCity(state, city) {
			state.filters.city = city;
		},
		setWithEmail(state, withEmail) {
			state.filters.contacts.withEmail = withEmail;
		},
		setWithPhone(state, withPhone) {
			state.filters.contacts.withPhone = withPhone;
		}
	}
});
export default store;