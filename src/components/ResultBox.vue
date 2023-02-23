<template>
  <div>

    <!-- text between -->
    <p
      v-text="'And the result...'" />

    <!-- mixture effect -->
      <flask-item
      :size="15"
      :buttonsVisible="false"
      :color="mixtureEffectFill"
      style="margin: 3rem auto"
      :ammount="100" />

      <p v-text="mixtureEffectFill" />
      <p>They are {{ colorsLength }} colors in your pocket!</p>

    <!-- refresh btn -->
    <button-item
    icon="pi pi-sync"
    @click="$emit('refresh')"
    :size="4"
    :movement="-0.5"
    :font-size="1.5" />

    <button-item
    icon="pi pi-question"
    @click="showModal"
    :size="4"
    :movement="-0.5"
    :font-size="1.5"
    style="margin: 0.5rem" />

    <router-link :to="colorPath">
    <button-item
    icon="pi pi-share-alt"
    :size="4"
    :movement="-0.5"
    :font-size="1.5"
    style="margin: 0.5rem"></button-item></router-link>

    <button-item
    @click="saveColor"
    icon="pi pi-pencil"
    :size="4"
    :movement="-0.5"
    :font-size="1.5"
    style="margin: 0.5rem"></button-item>

  <fade-animation>
    <modal-item
      v-if="modalVisible"
      @cancel="hideModal">

   <template v-slot:header>
    About the app
   </template>

   <template v-slot:body>
    Mix three colors to create the perfect one!
   </template>

   <template v-slot:footer>
    <button-item
    icon="pi pi-thumbs-up"
    style="margin: 0.5rem"
    :movement="0" />
   </template>

    </modal-item>
  </fade-animation>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import ButtonItem from './shared/ButtonItem'
import FlaskItem from './shared/FlaskItem'
import ModalItem from './shared/ModalItem'
import ModalMixin from '@/mixins/ModalMixin'
import FadeAnimation from './shared/FadeAnimation'

export default {
  name: 'ResultsBox',
  mixins: [ModalMixin],
  computed: {
    ...mapGetters({ colorsLength: 'ColorsCount', mixtures: 'Mixtures' }),
    mixtureEffectFill () {
      const [redCol, greenCol, blueCol] = this.mixtures.map(item => Math.floor(item.amount * 2.5))
      return `rgb(${redCol}, ${greenCol}, ${blueCol})`
    },
    colorPath () {
      const [redCol, greenCol, blueCol] = this.mixtures.map(item => Math.floor(item.amount * 2.5))
      return `/color/${redCol}/${greenCol}/${blueCol}`
    }
  },
  methods: {
    ...mapActions(['addColor']),
    saveColor () {
      this.addColor(this.mixtures)
    }
  },
  components: {
    ButtonItem,
    FlaskItem,
    ModalItem,
    FadeAnimation
  }
}
</script>

<style lang="scss" scoped>

</style>
