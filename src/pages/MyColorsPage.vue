<template>
    <div>
        <title-page>My colors</title-page>
        <my-colors-list />
    </div>
</template>

<script>
import TitlePage from '@/components/shared/TitlePage'
import MyColorsList from '@/components/shared/MyColorsList'

export default {
  name: 'MyColorsPage',
  components: {
    TitlePage,
    MyColorsList
  }
}
</script>
