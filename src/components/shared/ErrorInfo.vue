<template>
    <div class="err animate__animated">
      <div class="border"></div>
      <span>
        <i class="pi pi-times-circle">
            <slot />
        </i>
      </span>
    </div>
</template>

<script>
export default {
  name: 'ErrorInfo'
}

</script>

<style lang="scss" scoped>
.err {
  height: 2.7rem;
  background-color: #fe5757;
  display: flex;

  .border {
    height: 100%;
    border-left: 0.5rem solid #a81818;
  }

  span {
    font-size: 1rem;
    margin: auto ;
  }
}

</style>
