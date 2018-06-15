<template lang="html">
  <div class="detail">
    <div class="header">
      <img :src="backImg" @click="goback">
      <span>{{channelName}}</span>
      <img v-show="showCollectionImg" :src="collectImg" @click="collectDetailNews">
      <span v-show="!showCollectionImg"></span>
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
      ...mapState(["showCollectionImg","channelName"]),
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
      ...mapActions(['CollectNews']),
      goback() {
        this.$router.back(1)
      },
      collectDetailNews() {
        this.CollectNews(this.channelNews)
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
    height: 2rem;
    background-color: coral;
    color: #fff;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
}
.header img{
    width: 25px;
    height: 25px;
    padding: 0;
}
.container{
    padding-top: 2rem;
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
.container img{
  width: 100%;
  margin-bottom: 20px;
}
.nwes-content{
  font-size: 18px;
  line-height: 30px;
}
</style>
