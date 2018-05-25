<template lang="html">
  <div class="container">
    <!-- header -->
      <vheader class="p-header"></vheader>
    <!-- nav -->
    <div>
      <span>a html</span>
    </div>
  </div>
</template>
<script>
  import vheader from '@/components/header'
  import navNews from '@/components/navNews'
  export default {
    components: {
      vheader,
      navNews
    }
  }
</script>
<style lang="css" scoped>
.p-header{
  position: fixed;
  top: 0;
}
</style>
