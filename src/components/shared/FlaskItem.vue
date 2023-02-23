<template>
  <div
  class="flask animate__animated"
  :style="flaskStyle"
  :class="{ 'animate__shakeY': isAnimated }"
  @animationend="isAnimated = false">

  <!-- decrement btn -->
  <button-item
  v-if="buttonsVisible"
  class="flask__btn flask__btn--left"
  icon="pi-arrow-down"
  @click="addAnimation(); $emit('decrement')" />

  <div
  :class="fillClasses"
  :style="fillStyle" />

      <!-- delete btn -->
      <button-item
        v-if="deleteVisible"
        class="flask__btn flask__btn--center"
        icon="pi-trash"
        :movement="-0.5"
        @click="$emit('remove')"/>

      <button-item
        v-if="buttonsVisible"
        class="flask__btn flask__btn--right"
        icon="pi-arrow-up"
        :movement="-0.5"
         @click="addAnimation(), $emit('increment')"/>
    </div>

</template>

<script>
import ButtonItem from './ButtonItem'

export default {
  name: 'FlaskItem',
  props: {
    size: {
      type: Number,
      default: 10
    },
    amount: {
      type: Number,
      default: 50
    },
    color: {
      type: String
    },
    variant: {
      type: String
    },
    buttonsVisible: {
      type: Boolean,
      default: true
    },
    deleteVisible: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    isAnimated: false
  }),
  computed: {
    flaskStyle () {
      return {
        height: `${this.size}rem`,
        width: `${this.size}rem`
      }
    },

    fillClasses () {
      return [
        'flask__fill',
        (this.variant) && `flask__fill--${this.variant}`
      ]
    },

    fillStyle () {
      const style = { height: this.amount + '%' }

      if (!this.variant) {
        style.backgroundColor = this.color || '#fff'
        style.height = 100 + '%'
      }

      return style
    }
  },
  methods: {
    addAnimation () {
      this.isAnimated = true
    }
  },
  components: {
    ButtonItem
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';
.flask {
  @include border-radius-50;
  @include box-shadow-1;
  display: block;
  border: 10px solid #ddd;
  margin: 2rem 1rem;
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;

  &__fill {
    @include width-height-100;
    transition: .2s;

    &--red {
      background-color: #ff7d3b;
      background-image: linear-gradient(189deg, #ff7d3b 0%, #FF2525 74%);
    }

    &--green {
      background-color: #2e561c;
      background-image: linear-gradient(0deg, #2e561c 0%, #2AF598 100%);
    }

    &--blue {
      background-color: #25b6bf;
      background-image: linear-gradient(183deg, #25b6bf 0%, #0070a2 100%);
    }

  }

  &::before {
    @include width-height-100;
    @include top-left-0;
    content: "";
    position: absolute;
    background-color: #9a9a9a;
    background-image: linear-gradient(0deg, #9a9a9a 0%, #e8fdff 100%);
    opacity: 0.2;
  }

  &__btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &--right {
      right: 1rem;
    }

    &--left {
      left: 1rem;
    }

    &--center {
      left: 40%;
    }
  }

}
</style>
