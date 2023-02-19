<template>
  <div id="app">
    <div class="container">

      <!-- header -->
      <app-header />

      <!-- menu -->
      <!-- <app-menu /> -->
      <app-menu2 />

      <!-- router view -->

      <router-view v-slot="{ Component}">
        <slide-fade-animation class="animate__faster">
        <component :is="Component"/>
        </slide-fade-animation>
      </router-view>

    </div>
  </div>
</template>

<script>
import './styles/global.scss'
import AppHeader from './components/AppHeader'
import AppMenu2 from './components/AppMenu2'
import SlideFadeAnimation from './components/shared/SlideFadeAnimation'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMenu2,
    SlideFadeAnimation
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
}
</style>
