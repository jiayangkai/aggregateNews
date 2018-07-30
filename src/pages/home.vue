<template lang="html">
  <div class="container">
    <vpersonal v-show="islogin"></vpersonal>
    <!-- header -->
    <vheader class="p-header"></vheader>
    <!-- nav -->
    <vnavNews class="nav-channel"></vnavNews>
  </div>
</template>
<script>
  import vheader from '@/components/header'
  import vnavNews from '@/components/navNews'
  import vpersonal from '@/components/personal'
  export default {
    components: {
      vheader,
      vnavNews,
      vpersonal
    },
    computed: {
      islogin() {
        return this.$store.state.islogin
      }
    }
  }

</script>

<style lang="css" scoped>
  .p-header {
    position: fixed;
    top: 0;
  }
</style>
