<template>
  <div v-if="isLoading">
    Загрузка....
  </div>
  <div v-else>
    <template v-if="history && history.length">
      <v-divider />
      <div
        v-for="item in history"
        :key="item.id"
        @click="onItemClick(item)"
      >
        {{ item.name }}
      </div>
    </template>
    <v-divider />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppStore from '@/store'
import historyModule from './store/index'

export default {
  name: 'HistoryModule',
  beforeCreate () {
    if (!AppStore.hasModule('history')) {
      AppStore.registerModule('history', historyModule)
    }
  },
  computed: {
    ...mapState({
      isLoading: s => s.history.dataFetching,
      history: s => s.history.history
    })
  },
  mounted () {
    this.initWidget()
  },
  methods: {
    async initWidget () {
      await this.$store.dispatch('history/initModule')
    },
    onItemClick ({ name }) {
      this.$store.dispatch('history/selectHistoryItem', { name })
    }
  }
}
</script>
