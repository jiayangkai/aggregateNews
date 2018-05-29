<template lang="html">
  <div class="container">
    <!-- header -->
      <vheader class="p-header"></vheader>
    <!-- nav -->
    <vnavNews class="nav-channel"></vnavNews>
  </div>
</template>
<script>
  import vheader from '@/components/header'
  import vnavNews from '@/components/navNews'
  export default {
    components: {
      vheader,
      vnavNews
    }
  }
</script>

<style lang="css" scoped>
.p-header{
  position: fixed;
  top: 0;
}
</style>
