<template>
  <div v-if="isLoading">
    Загрузка....
  </div>
  <v-list
    v-else
    nav
    dense
  >
    <v-list-item-group>
      <v-list-item
        v-if="history && !history.length"
        inactive
        :ripple="false"
      >
        <v-list-item-title>
          <div class="body-1 text-center">
            История поиска пуста
          </div>
        </v-list-item-title>
      </v-list-item>
      <v-list-item
        v-for="item in history"
        :key="item.id"
        @click="onItemClick(item)"
      >
        <v-list-item-title>
          <span class="body-2">
            {{ item.name }}
          </span>
        </v-list-item-title>
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
