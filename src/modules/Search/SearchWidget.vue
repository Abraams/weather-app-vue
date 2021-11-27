<template>
  <div
    class="d-flex align-center justify-space-between"
    :style="{
      width: inputVisible ? '100%' : 'auto'
    }"
  >
    <v-text-field
      v-if="inputVisible"
      ref="search-input"
      v-model="query"
      color="black"
      rounded
      :placeholder="placeholder"
      autofocus
      single-line
      hide-details
      @focus="onFocus"
      @blur="onBlur"
      @keypress.enter="submitForm"
    />

    <v-btn
      v-else
      key="show-search-btn"
      icon
      @click="setInputVisible(true)"
    >
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SearchWidget',
  props: {
    inputVisible: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: 'Введите название города'
    }
  },
  data () {
    return {
      query: ''
    }
  },
  computed: {
    ...mapState({
      storageQuery: s => s.search.query
    })
  },
  watch: {
    storageQuery: {
      handler () {
        this.query = this.storageQuery
      }
    }
  },
  methods: {
    setInputVisible (value) {
      this.$emit('input:visible', value)
    },
    onFocus () {
      this.query = ''
    },
    onBlur () {
      if (!this.query) {
        this.setInputVisible(false)
      }
    },
    async submitForm () {
      if (!this.query) {
        return
      }

      try {
        await this.$store.dispatch('search/setQuery', { query: this.query })
      } catch (error) {

      }
      this.setInputVisible(false)
    }
  }
}
</script>
