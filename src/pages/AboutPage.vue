<template>
  <div>
    <title-page>About</title-page>
    <h2>This app was built with Vue.js</h2>
    <img
    class="animate__animated"
    src="@/assets/Logo.svg.png"
    alt="Vue.js logo"
    @click="addAnimation"
    :class="{'animate__animated animate__jackInTheBox' : isAnimated}"
    @animationend="isAnimated = false">
  </div>
</template>

<script>
import TitlePage from '@/components/shared/TitlePage'

export default {
  name: 'AboutPage',
  data: () => ({
    isAnimated: false
  }),
  components: {
    TitlePage
  },
  methods: {
    addAnimation () {
      this.isAnimated = true
    }
  },
  mounted () {
    this.isAnimated = true
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

  h2 {
    @include title
  }

</style>
