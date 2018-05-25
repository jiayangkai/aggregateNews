<template lang="html">
  <div class="header">
    <!-- profile button -->
    <div>
      <img class="personalImg" :src="profileSrc" @Click="getProfile">
    </div>
    <div>
      <span>A News</span>
    </div>
    <!-- search -->
    <div>
      <img :src="searchSrc" @Click="search">
    </div>
  </div>
</template>
<script>
  export default {
    computed: {
      profileSrc: function () {
        var src = require("../assets/header/profile.png")
        return src
      },
      searchSrc: function () {
        var src = require("../assets/search/search.png")
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
<style lang="css" scoped>
.header{
  width: 100%;
  height: 1.2rem;
  font-size: 20px;
  justify-content: space-between;
  display: flex;
  font-weight: 700;
  background-color: coral;
  color: #fff;
}
img{
  width: .88rem;
  height: .50rem;
  padding: .5rem;
}
</style>
