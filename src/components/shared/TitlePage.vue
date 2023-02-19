<template>
    <h1 class="page-title">
      <slot />
    </h1>
</template>

<script>
export default {
  name: 'PageTitle'
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

  .page-title {
    @include title;
    font-size: 2rem;
  }
</style>
