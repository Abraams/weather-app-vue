<template>
  <div id="app-wrapper">
    <v-app id="app">
      <v-main>
        <TheAppBar />
        <slot />
      </v-main>
    </v-app>
  </div>
</template>

<script>
import TheAppBar from '@/components/TheAppBar.vue'

export default {
  name: 'DefaultLayout',
  components: {
    TheAppBar
  }
}
</script>

<style lang="scss">
#app-wrapper {
  width: 100vw;
  min-height: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #abefff;
}

#app {
  width: 100%;
  min-width: 320px;
  max-width: 450px;
  background: white;
}
</style>
