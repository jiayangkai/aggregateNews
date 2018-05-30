<template lang="html">
  <div class="detail">
    <div class="header">
      <img :src="backImg" @click="goback">
      <span>{{this.$store.state.channelName}}</span>
      <img :src="collectImg" @click="collectNews">
    </div>
    <div class="container">
      <div class="news-title">{{channelNews && channelNews.title}}</div>
      <div class="news-message">
        <span>{{channelNews && channelNews.time || '2018-05-30'}}</span>
        <span>{{channelNews && channelNews.src || 'A NEWS'}}</span>
      </div>
      <img :src="newsImg">
      <div class="news-content" v-html="channelNews && channelNews.content"></div>
    </div>
  </div>
</template>
<script>
  import {
    mapState,
    mapActions,
    mapMutations
  } from 'vuex'
  export default {
    computed: {
      backImg() {
        return require('../assets/back.png')
      },
      collectImg() {
        return require('../assets/like.png')
      },
      channelNews() {
          return this.$store.state.channelNew
        },
        newsImg() {
          return this.$store.state.channelNew && this.$store.state.channelNew.pic || require('../assets/logo.png')
        }
    },
    methods: {
      ...mapMutations(['CollectNews']),
      goback() {
        this.$router.back(1)
      },
      collectNews() {
        this.collectNews(this.channelNews)
      }
    }
  }

</script>
<style lang="css" scoped>
.detail{
    overflow: hidden;
}
.header{
    width: 100%;
    height: 1.33rem;
    background-color: #d43d3d;
    color: #fff;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
}
.header img{
    width: 20px;
    height: 20px;
    padding: 0;
}
.container{
    padding-top: 1.33rem;
    margin: 20px;
}
.news-title{
    font-size: 24px;
    font-weight: bold;
    text-align: center;
}
.news-message{
    text-align: center;
    margin: 20px 0;
    color: #888;
}
.news-message span:last-child{
    margin-left: 10px;
}

</style>
