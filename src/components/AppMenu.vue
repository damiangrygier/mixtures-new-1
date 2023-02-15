<template>
    <div>
        <div class="card">
            <h3>Default</h3>
            <TabMenu model="items" />
            <router-view/>
        </div>
    </div>
</template>

<script>
import TabMenu from 'primevue/tabmenu'

export default {
  name: 'AppMenu',
  data () {
    return {
      active: 3,
      items: [
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          to: '/'
        },
        {
          label: 'Calendar',
          icon: 'pi pi-fw pi-calendar',
          to: '/calendar'
        },
        {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          to: '/edit'
        },
        {
          label: 'Documentation',
          icon: 'pi pi-fw pi-file',
          to: '/documentation'
        },
        {
          label: 'Settings',
          icon: 'pi pi-fw pi-cog',
          to: '/settings'
        }
      ]
    }
  },
  components: {
    TabMenu
  }
}
</script>

<style scoped lang="scss">
::v-deep(.tabmenudemo-content) {
    padding: 2rem 1rem;
}
</style>
