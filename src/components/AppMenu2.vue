<template>
    <div class="main">
        <button><i class="pi pi-home"></i> Home</button>
        <button><i class="pi pi-filter"></i> Mixin</button>
        <button><i class="pi pi-info"></i> About</button>
    </div>
</template>

<script>
export default {
  name: 'AppMenu2'
}
</script>

<style lang="scss" scoped>
    .main {
        display: flex;
        height: 2.7rem;
        background-color: #f0f0f0;
        border-radius: 1rem;
        box-shadow: 0 20px 40px 0 rgba(107,154,212,.3);
        overflow: hidden;

        button {
            border: 0;
            margin-left: 1rem;
            cursor: pointer;

            i {
                font-size: 0.8rem;
                padding-right: 5px;
            }
        }
    }
</style>
