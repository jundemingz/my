<template>
<div>
  <nav-header/>
  <tab></tab>
  <Xiao></Xiao>
  <Ych></Ych>
</div>
</template>

<script>
import NavHeader from '@/components/NavHeader'
import Tab from '@/components/Tab'
import Xiao from '@/components/Xiao'
import Ych from '@/components/Ych'
export default {
  name: 'index',
  components: {
    NavHeader,
    Tab,
    Xiao,
    Ych
  }
}
</script>

<style scoped>

</style>
