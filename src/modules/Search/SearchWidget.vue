<template>
  <div>
    <hr>
    <form
      @submit.prevent="onFormSubmit"
      @keypress.enter="onFormSubmit"
    >
      <input
        type="text"
        v-model="query"
      >
      <input
        type="submit"
        value="Поиск"
      >
    </form>
    <hr>
  </div>
</template>

<script>
import { debounce } from 'lodash'
import AppStore from '@/store'
import searchModule from './store'

export default {
  name: 'SearchWidget',
  data () {
    return {
      query: ''
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
    submitForm () {
      this.$store.dispatch('search/setQuery', { query: this.query })
    },
    onFormSubmit () {}
  }
}
</script>

<style>

</style>
