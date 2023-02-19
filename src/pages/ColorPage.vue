<template>
  <div>
    <title-page>Color</title-page>

    <div v-if="colorsFormat">
      <flask-item
        :size="15"
        :buttonsVisible="false"
        :color="colors"
        style="margin: 3rem auto"
        :ammount="100" />

      <span class="p-float-label url">
        <i class="pi pi-share-alt sharedIcon"></i>
        <input-text type="text" v-model="path" class="urlInput" />
      </span>
    </div>
    <error-info v-else>This color is invalid! It's not RGB format...</error-info>
  </div>
</template>

<script>
import TitlePage from '../components/shared/TitlePage'
import FlaskItem from '../components/shared/FlaskItem'
import InputText from 'primevue/inputtext'
import ErrorInfo from '@/components/shared/ErrorInfo'

export default {
  name: 'ColorPage',
  data: () => ({
    value: 'http://localhost:8080',
    colorsFormat: true
  }),
  computed: {
    colors () {
      const red = this.$route.params.red
      const green = this.$route.params.green
      const blue = this.$route.params.blue
      return `rgb(${red}, ${green}, ${blue})`
    },
    path () {
      return `${this.value}${this.$route.fullPath}`
    }
  },
  created () {
    if (this.$route.params.red === '' || this.$route.params.green === '' || this.$route.params.blue === '') {
      this.$router.replace({ path: '/' })
    }
  },
  mounted () {
    if ((this.$route.params.red < 0 || this.$route.params.red > 255) || (this.$route.params.green < 0 || this.$route.params.green > 255) || (this.$route.params.blue < 0 || this.$route.params.blue > 255)) {
      this.colorsFormat = false
      console.log('falsee')
    }
  },
  components: {
    TitlePage,
    FlaskItem,
    InputText,
    ErrorInfo
  }
}
</script>

<style lang="scss" scoped>

    .url {
        display: flex;
        justify-content: center;
        align-items: center;

        .urlInput {
        width: 20rem;
        margin-left: 1rem;
    }

    .sharedIcon {
        font-size: 2rem;
    }
    }

</style>
