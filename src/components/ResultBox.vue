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
      @click="$emit('refresh')"
      :size="4"
      :movement="-0.5"
      :font-size="1.5"
      icon="sync" />

  </div>
</template>

<script>
import ButtonItem from './shared/ButtonItem'
import FlaskItem from './shared/FlaskItem'

export default {
  name: 'ResultsBox',
  props: {
    mixtures: {
      type: Array,
      required: true
    }
  },
  computed: {
    mixtureEffectFill () {
      const [redCol, greenCol, blueCol] = this.mixtures.map(item => Math.floor(item.amount * 2.5))
      return '#' + (1 << 24 | redCol << 16 | greenCol << 8 | blueCol).toString(16).slice(1)
    }
  },
  components: {
    ButtonItem,
    FlaskItem
  }
}
</script>
