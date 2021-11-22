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
      <v-app-bar-nav-icon />

      <template v-if="!isSearchVisible">
        <v-toolbar-title
          @click="isSearchVisible = !isSearchVisible"
        >
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
        @input:visible="isSearchVisible = $event"
      />

      <v-fade-transition leave-absolute>
        <div v-if="!isSearchVisible">
          <v-btn
            key="show-search-btn"
            icon
            @click="isSearchVisible = !isSearchVisible"
          >
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </div>
      </v-fade-transition>

      <TheLanguageSelect />
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
import SearchWidget from '@/modules/Search/SearchWidget.vue'
import TheLanguageSelect from '@/components/TheLanguageSelect.vue'

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
  }
}
</script>

<style>
#the-app-bar .v-toolbar__extension {
  padding-left: 0px !important;
  padding-right: 0px !important;
  padding-bottom: 0 !important;
}

</style>
