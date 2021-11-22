<template>
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
    @keypress.enter="onFormSubmit"
  />
</template>

<script>
import { debounce } from 'lodash-es'
import { mapState } from 'vuex'
import AppStore from '@/store'
import searchModule from './store'

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
  beforeCreate () {
    if (!AppStore.hasModule('search')) {
      AppStore.registerModule('search', searchModule)
    }
  },
  created () {
    this.onFormSubmit = debounce(this.submitForm, 200)
  },
  methods: {
    onFocus () {
      this.query = ''
    },
    onBlur () {
      this.setInputVisible(false)
      this.submitForm()
    },
    setInputVisible (value) {
      this.$emit('input:visible', value)
    },
    submitForm () {
      if (!this.query) {
        return
      }

      this.$refs['search-input'].blur()
      this.$store.dispatch('search/setQuery', { query: this.query })
    },
    onFormSubmit () {}
  }
}
</script>

<style>

</style>
