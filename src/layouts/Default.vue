<template>
  <div id="app-wrapper">
    <div class="app-background" />

    <v-app id="app">
      <v-main>
        <TheAppBar @navigation:toggle="setNavigationVisible" />

        <v-navigation-drawer
          v-model="isDrawerVisible"
          app
          absolute
          temporary
        >
          <HistoryWidget @item:select="setNavigationVisible(false)" />
        </v-navigation-drawer>

        <div>
          <slot />
        </div>
      </v-main>
    </v-app>

    <div class="app-background" />
  </div>
</template>

<script>
import TheAppBar from '@/components/TheAppBar.vue'

const HistoryWidget = () => import(/* webpackChunkName: "HistoryWidget" */ '@/modules/History/HistoryWidget.vue')

export default {
  name: 'DefaultLayout',
  components: {
    TheAppBar,
    HistoryWidget
  },
  data () {
    return {
      isDrawerVisible: false
    }
  },
  methods: {
    setNavigationVisible (value) {
      this.isDrawerVisible = value
    }
  }
}
</script>

<style lang="scss">
#app-wrapper {
  width: 100vw;
  min-height: 100%;
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.app-background {
  flex-grow: 1;
  height: 100vh;
  background: #abefff;
  position: relative;
  z-index: 99999999999;
}

#app {
  width: 100%;
  min-width: 320px;
  max-width: 450px;
  background: white;
}
</style>
