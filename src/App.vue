<template>
  <div id="app">
    <div class="container">

      <!-- header -->
      <app-header />

      <!-- menu -->
      <!-- <app-menu /> -->
      <app-menu2 />

      <!-- color mixin -->
      <color-mixin />

    </div>
  </div>
</template>

<script>
import './styles/global.scss'
import AppHeader from './components/AppHeader'
import ColorMixin from './components/ColorMixin'
// import AppMenu from './components/AppMenu'
import AppMenu2 from './components/AppMenu2'

export default {
  name: 'App',
  components: {
    AppHeader,
    ColorMixin,
    // AppMenu,
    AppMenu2
  }
}
</script>

<style lang="scss">
.container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
}
</style>
