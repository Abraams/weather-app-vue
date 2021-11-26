<template>
  <div v-if="isLoading">
    Загрузка....
  </div>
  <v-list
    v-else-if="history && history.length"
    nav
    dense
  >
    <v-list-item-group>
      <v-list-item
        v-for="item in history"
        :key="item.id"
        @click="onItemClick(item)"
      >
        <v-list-item-title>{{ item.name }}</v-list-item-title>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HistoryModule',
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
    selectItem ({ name }) {
      this.$store.dispatch('history/selectHistoryItem', { name })
    },
    onItemClick (item) {
      this.selectItem(item)
      this.$emit('item:select', item)
    }
  }
}
</script>
