<template>
  <v-menu
    nudge-top="-4px"
    rounded
    offset-y
  >
    <template #activator="{ attrs, on }">
      <v-btn
        width="48"
        height="48"
        text
        fab
        v-bind="attrs"
        v-on="on"
      >
        {{ language }}
      </v-btn>
    </template>

    <v-list>
      <v-list-item-group
        :value="language"
        mandatory
        color="primary"
      >
        <v-list-item
          v-for="item in $options.languages"
          :value="item"
          :key="item"
          @click="setLanguage(item)"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item" />
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
import { mapState } from 'vuex'
import { APP_LANGUAGES } from '@/services/language.service'

export default {
  name: 'TheLanguageSelect',
  computed: {
    ...mapState({
      language: s => s.language
    })
  },
  methods: {
    setLanguage (value) {
      this.$vuetify.lang.current = value
      this.$store.dispatch('setLanguage', { lang: value })
    }
  },
  languages: Object.values(APP_LANGUAGES)
}
</script>
