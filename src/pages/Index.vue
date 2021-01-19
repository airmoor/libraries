<template>
  <q-page class="flex flex-center">
    <q-table :grid="!isWindowLG"
            title="Treats"
             grid-header
            :data="libraries"
            :columns="columns"
            row-key="name"
             :filter="filter"
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  /*data: () => ({
    current: 3
  }),*/
  data () {
    return {
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Название',
          align: 'left',
          field: row => row.nativeName,

          sortable: true
        },
        {
          name: 'address',
          align: 'center',
          label: 'Адрес',
          field: row=>row.data.general.address.fullAddress,
          sortable: true
        },
        // {name: 'fat', label: 'Fat (g)', field: 'nativeName', sortable: true},
        // {name: 'carbs', label: 'Carbs (g)', field: 'carbs'},
        // {name: 'protein', label: 'Protein (g)', field: 'protein'},
        // {name: 'sodium', label: 'Sodium (mg)', field: 'sodium'},
        {
          name: 'organization',
          label: 'Организация',
          field: row=>row.data.general.organization.name,
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        },
        /*{
          name: 'website',
          label: 'Сайт',
          field: row=>row.data.general.contacts.website,
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        }*/
      ],

      filter: '',
    }
  },
  computed: {
    librariesInfo() {

    },
    isWindowLG() {
      return this.$store.getters.isWindowLG;
    },
    isWindowXS() {
      return this.$store.getters.isWindowXS;
    },
    libraries() {
      return this.$store.state.libraries;
    }
  },

}
</script>
