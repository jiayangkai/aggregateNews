<template lang="html">
  <div>
    <div class="header">
      <img :src="backImg" @click="backPersonal">
      <span>我的收藏</span>
      <span></span>
    </div>
    <slide class="slide" :dataList="collectionNews" :eventType="0"></slide>
    <!-- <div class="content">
      <div class="new-container" v-for="(item,index) in collectionNews" :key="index">
        <div class="section" @click="toDetailNews(item,index)">
          <div class="news-left">
            <img :src="item.pic || logoImg">
          </div>
          <div class="news-right">
            <div class="news-title">{{item.title}}</div>
            <div class="news-message">
              <span>{{item.time || '2018-06-12'}}</span>
              <span>{{item.src || 'A News'}}</span>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
  import {
    mapState,
    mapAcitons,
    mapMutations
  } from 'vuex'
  import slide from '@/components/slide'
  export default {
    components:{
      slide
    },
    computed: {
      ...mapState(['collectionNews']),
      backImg() {
        let src = require('../assets/back.png')
        return src
      },
      logoImg() {
        let src = require('../assets/logo.png')
        return src
      }
    },
    methods: {
      backPersonal() {
        this.$router.back(-1)
      },
      toDetailNews(param) {
        this.$store.state.channelNew = param
        this.$router.push('/detailnews')
      }
    }
  }

</script>
<style scoped>
  .header {
    width: 100%;
    height: 2rem;
    background-color: coral;
    color: #fff;
    font-size: 20px;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
  }

  .header img {
    width: 25px;
    height: 25px;
  }

  .slide{
    padding-top: 2rem;
  }

  .content {
    padding-top: 2rem;
  }

  .section {
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: .2rem;
  }

  .news-left {
    display: inline-block;
    width: 30%;
    height: 90%;
  }

  .news-left img {
    width: 100%;
    height: 100%;
  }

  .news-right {
    display: inline-block;
    width: 64%;
    height: 90%;
    margin-left: .21rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .news-title {
    width: 100%;
    height: 60%;
    overflow: hidden;
    font-size: 18px;
    color: #404040;
  }

  .news-message {
    width: 100%;
    height: 36%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    color: #888;
  }

</style>
