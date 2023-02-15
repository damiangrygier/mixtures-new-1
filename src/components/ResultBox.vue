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

  </div>
</template>

<script>
import ButtonItem from './shared/ButtonItem'
import FlaskItem from './shared/FlaskItem'
import ModalItem from './shared/ModalItem'
import ModalMixin from '@/mixins/ModalMixin'

export default {
  name: 'ResultsBox',
  props: {
    mixtures: {
      type: Array,
      required: true
    }
  },
  data: () => ({
  }),
  mixins: [ModalMixin],
  computed: {
    mixtureEffectFill () {
      const [redCol, greenCol, blueCol] = this.mixtures.map(item => Math.floor(item.amount * 2.5))
      return '#' + (1 << 24 | redCol << 16 | greenCol << 8 | blueCol).toString(16).slice(1)
    }
  },
  components: {
    ButtonItem,
    FlaskItem,
    ModalItem
  }
}
</script>
