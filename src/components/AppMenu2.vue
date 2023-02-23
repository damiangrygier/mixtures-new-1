<template>
    <div class="main">
        <router-link to="/"><button><i class="pi pi-home"></i> Home</button></router-link>
        <router-link to="/mixin"><button><i class="pi pi-filter"></i> Mixin</button></router-link>
        <router-link to="/about"><button><i class="pi pi-info"></i> About</button></router-link>
        <router-link to="/myColors"><button><i class="pi pi-palette"></i> My colors</button></router-link>
    </div>
</template>

<script>

export default {
  name: 'AppMenu2'
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';
    .main {
        @include box-shadow-1;
        display: flex;
        align-items: center;
        height: 2.7rem;
        background-color: #f0f0f0;
        border-radius: 1rem;
        overflow: hidden;

        button {
            height: 2.7rem;
            width: 6rem;
            border: 0;
            margin-left: 1rem;
            cursor: pointer;

            i {
                font-size: 0.8rem;
                padding-right: 5px;
            }
        }

        button:hover {
                background-color: #d8d8d8;
            }
    }
</style>
