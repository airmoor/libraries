<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="filter_alt"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Библиотеки
        </q-toolbar-title>


      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >

      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Filters
        </q-item-label>
        <FilterItem v-for="filter of filterItems"
                :key="filter.name"
                :filter="filter"/>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import data  from "../../library-data.json";
import FilterItem from "../components/FilterItem";


export default {
  name: 'MainLayout',
  components: {FilterItem, EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      filterItems : [
        {
          title: 'Название',
          type: 'autocomplete',
          field: 'nativeName',
        },
        {
          title: 'Местоположение',
          type: 'autocomplete',
          field: 'data.general.address.fullAddress',
        }
      ]

    }
  },
  methods: {

  },
  created() {
    this.$store.state.libraries = data;
    // console.log(data);
    console.log('libraries',this.$store.state.libraries)
  }
}
</script>
