<template>
  <div>
    <title-page>Home</title-page>
    <warning-info class="animate__shakeY animate__delay-2s">Warning! This app was still in development...</warning-info>
  </div>
</template>

<script>
import TitlePage from '@/components/shared/TitlePage'
import WarningInfo from '@/components/shared/WarningInfo.vue'

export default {
  name: 'HomePage',
  data: () => ({
    isAnimated: false
  }),
  components: {
    TitlePage,
    WarningInfo
  }
}
</script>
