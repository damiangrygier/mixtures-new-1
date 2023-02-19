<template>
    <div class="warn animate__animated">
      <div class="border"></div>
      <span>
        <i class="pi pi-bolt">
            <slot />
        </i>
      </span>
    </div>
</template>

<script>
export default {
  name: 'WarningInfo'
}

</script>

<style lang="scss" scoped>
.warn {
  height: 2.7rem;
  background-color: #f8db5b;
  display: flex;

  .border {
    height: 100%;
    border-left: 0.5rem solid rgb(211, 160, 20);
  }

  span {
    font-size: 1rem;
    margin: auto ;
  }
}

</style>
