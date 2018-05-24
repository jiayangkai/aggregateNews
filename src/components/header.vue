<template lang="html">
  <div>
    <!-- profile button -->
    <div>
      <img src="{{profileSrc}}" @Click="getProfile">
    </div>
    <div>
      <span>A News</span>
    </div>
    <!-- search -->
    <div>
      <img src="{{searchSrc}}" @Click="search">
    </div>
  </div>
</template>
<script>
  export default {
    computed: {
      profileSrc: function () {
        var src = require("./assets/header/profile.png")
        return src
      },
      searchSrc: function () {
        var src = require("./assets/search/search.png")
        return src
      }
    },
    methods: {
      // 跳转到个人中心
      getProfile: function () {

      },
      // 跳转到搜索页面
      search: function () {

      }
    }
  }

</script>
<style lang="css">


</style>
