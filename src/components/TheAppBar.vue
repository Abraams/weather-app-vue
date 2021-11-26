<template>
  <div>
    <v-toolbar
      id="the-app-bar"
      color="white"
      flat
      outlined
      elevation="1"
      tile
    >
      <v-app-bar-nav-icon @click="setNavigationVisible(true)" />

      <template v-if="!isSearchVisible">
        <v-toolbar-title @click="setSearchVisible(true)">
          <v-fade-transition>
            <span v-if="currentCity">
              {{ currentCity }}
            </span>
          </v-fade-transition>
        </v-toolbar-title>
        <v-spacer />
      </template>

      <SearchWidget
        :input-visible="isSearchVisible"
        :placeholder="currentCity"
        @input:visible="setSearchVisible"
      />

      <TheLanguageSelect v-if="$options.languages.length > 1" />
    </v-toolbar>
    <v-expand-transition hide-on-leave>
      <v-progress-linear
        v-if="isAppLoading"
        indeterminate
        absolute
        color="primary"
      />
    </v-expand-transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TheLanguageSelect from '@/components/TheLanguageSelect.vue'
import { APP_LANGUAGES } from '@/services/language.service'

const SearchWidget = () => import(/* webpackChunkName: "SearchWidget" */ '@/modules/Search/SearchWidget.vue')

export default {
  name: 'TheAppBar',
  components: {
    SearchWidget,
    TheLanguageSelect
  },
  data () {
    return {
      isSearchVisible: false
    }
  },
  computed: {
    ...mapState({
      currentCity: s => s.search?.query || s.weather?.name || undefined,
      isAppLoading: s => s.loading
    })
  },
  methods: {
    setNavigationVisible (value) {
      this.$emit('navigation:toggle', value)
    },
    setSearchVisible (value) {
      this.isSearchVisible = value
    }
  },
  languages: Object.values(APP_LANGUAGES)
}
</script>
