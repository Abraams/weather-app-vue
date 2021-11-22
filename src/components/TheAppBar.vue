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
          {{ currentCity }}
        </v-toolbar-title>
        <v-spacer />
      </template>

      <SearchWidget
        :input-visible="isSearchVisible"
        :placeholder="currentCity"
        @input:visible="isSearchVisible = $event"
      />

      <v-fade-transition>
        <div>
          <v-btn
            key="show-search-btn"
            icon
            @click="isSearchVisible = !isSearchVisible"
          >
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </div>
      </v-fade-transition>

      <v-slide-x-reverse-transition
        hide-on-leave
        leave-absolute
      >
        <div
          key="TheLanguageSelect"
          v-if="!isSearchVisible"
        >
          <TheLanguageSelect />
        </div>
      </v-slide-x-reverse-transition>
    </v-toolbar>
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
      currentCity: s => s.search?.query || s.weather?.name || undefined
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
