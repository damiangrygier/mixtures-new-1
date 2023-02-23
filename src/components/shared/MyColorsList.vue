<template>
    <div class="myFavouriteColors">
        <flask-item
        v-for="(color, index) in colors"
        :key="index"
        :color="color"
        :buttonsVisible="false"
        :deleteVisible="true"
        @remove="removeFavouriteColor(index)"
        style="margin: 3rem auto" />
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import FlaskItem from './FlaskItem'

export default {
  name: 'MyColorList',
  computed: mapGetters({ colors: 'RGBColors' }),
  methods: {
    ...mapMutations({ removeColor: 'REMOVE_COLOR' }),
    removeFavouriteColor (index) {
      this.removeColor(index)
      console.log(index)
    }
  },
  components: {
    FlaskItem
  }
}

</script>

<style lang="scss" scoped>
.myFavouriteColors {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

</style>
