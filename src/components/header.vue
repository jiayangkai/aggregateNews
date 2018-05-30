<template lang="html">
  <div class="header">
    <img class="personalImg" :src="profileSrc" @Click="getProfile">
    <span>A News</span>
    <img :src="searchSrc" @Click="search">
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
  .header {
    width: 100%;
    height: 2rem;
    font-size: 20px;
    justify-content: space-between;
    display: flex;
    align-items: center;
    font-weight: 700;
    background-color: coral;
    color: #fff;
    z-index: 99;
  }
  img {
    width: 1rem;
    height: 1rem;
    padding: .4rem;
  }

</style>
