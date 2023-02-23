<template>
  <div>

    <!-- mixtures list -->
    <mixtures-list
      :mixtures="mixtures"
      @increment="increment"
      @decrement="decrement" />

    <!-- result box -->
    <result-box
      @refresh="refresh"
      :mixtures="mixtures" />

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MixturesList from './MixturesList'
import ResultBox from './ResultBox'

export default {
  name: 'ColorMixin',
  computed:
    mapGetters({ mixtures: 'Mixtures' }),
  methods: {
    ...mapActions(['increment', 'decrement', 'refresh'])
  },
  components: {
    MixturesList,
    ResultBox
  }
}
</script>
