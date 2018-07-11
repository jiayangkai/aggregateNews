<template lang="html">
  <div class="nav-content">
    <!-- 频道导航 -->
    <div class="nav">
      <div class="channel">
        <ul>
          <li v-for="(channel,index) in this.$store.state.channelArr" :key="index" @click="getNews(channel.name,index)">{{channel.name}}</li>
        </ul>
      </div>
      <div class="manage-channel">
        <img :src="addImg" @click="managechannel">
      </div>
    </div>
    <!-- 频道新闻 -->

    <div class="news-content">
      <carousel v-show="channelIndex === 0"></carousel>
      <slide :dataList="channelNews" :dataType="1"></slide>
      <div v-if='channelNews.length > 0' class="news-more" @click='getMoreNews'>加载更多</div>
      <div v-if='isMore()' class="news-more news-none">没有更多了</div>
      <!-- <div class="section" v-for="(item,index) in channelNews" :key="index" @click="todetailnews(item,index)">
        <div class="news">
          <div class="news-left">
            <img :src="item.pic || require('../assets/logo.png')">
          </div>
          <div class="news-right">
            <div class="news-title">{{item.title}}</div>
            <div class="news-message">
              <span>{{item.time}}</span>
              <span>{{item.src || 'A News'}}</span>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
  // 引入组件
  import Vue from 'vue'
  import carousel from '@/components/carousel'
  import slide from '@/components/slide'
  import {
    mapState,
    mapActions,
    mapMutations
  } from 'vuex'
  export default {
    data() {
      return {
        channelList: [],
        channelNews: [],
        currentPage: 1,
      }
    },
    // 注册组件
    components: {
      carousel,
      slide
    },
    computed: {
      ...mapState(['fetchLoading', 'channelIndex']),
      addImg: function () {
        var src = require('../assets/add.png')
        return src
      }
    },
    methods: {
      ...mapActions(['getchannel', 'getNewsByChannel', 'FetchLoading', 'ShowCollectionImg']),
      getchannels() {
        this.getchannel().then(response => {
          if (response.data.status == '0') {
            this.$store.state.channelArr = response.data.result.map((name) => {
              return {name}
            })
          }
        }, (err) => {
          console.log(err)
        })
      },
      managechannel() {
        this.$router.push('/managechannel')
      },
      getNews(channel, index) {
        this.FetchLoading(true)
        this.$store.state.channelName = channel
        this.$store.state.channelIndex = index
        let params = 'channel=' + this.$store.state.channelName +
          '&start=&num=' + this.currentPage * 10
        this.getNewsByChannel(params).then(response => {
          if (response.data.status == '0') {
            this.channelNews = response.data.result.list
            this.channelNews.forEach((x) => {
              Vue.set(x, 'eventName', '收藏')
            })
            this.FetchLoading(false)
          }
        }, (err) => {
          console.log(err)
          this.FetchLoading(false)
        })
      },
      getdetailNews() {

      },
      todetailnews(item, index) {
        this.$store.state.channelNew = item
        this.ShowCollectionImg(true)
        this.$router.push('/detailnews')
      },
      getMoreNews() {
        this.currentPage++
          this.FetchLoading(true)
        let params = 'channel=' + this.$store.state.channelName +
          '&start=&num=' + this.currentPage * 10
        this.getNewsByChannel(params).then(response => {
          if (response.data.status == '0') {
            this.channelNews = response.data.result.list
            this.channelNews.forEach((x) => {
              Vue.set(x, 'eventName', '收藏')
            })
            this.FetchLoading(false)
          }
        }, (err) => {
          console.log(err)
          this.FetchLoading(false)
        })
      },
      isMore() {
        return this.channelNews.length < this.currentPage * 10
      }
    },
    mounted() {
      this.getchannels(),
        this.getNews(this.$store.state.channelName, 0)
    },
  }

</script>
<style lang="css" scoped>
  .nav-content {
    margin-top: 2rem;
  }

  .nav {
    width: 100%;
    height: 1.5rem;
    background-color: #f4f5f6;
    display: flex;
    position: absolute;
    z-index: 99;
  }

  .channel {
    display: inline-block;
    flex: 1;
    white-space: nowrap;
    display: flex;
    align-items: center;
    overflow-x: scroll;
    font-size: 1.2rem;
    color: #505050;
  }

  .channel::-webkit-scrollbar {
    height: 0;
  }

  .channel ul li {
    display: inline-block;
    margin-left: .32rem;
    margin-right: .32rem;
  }

  .manage-channel {
    display: inline-block;
    width: 10%;
    height: 100%;
    border-left: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .manage-channel img {
    width: 1.2rem;
    height: 1.2rem;
  }

  .news-content {
    padding-top: 0.96rem;
  }

  .section {
    width: 100%;
    height: 5rem;
    border-bottom: 1px solid #ccc;
  }

  .news {
    height: 4.5rem;
    box-sizing: border-box;
    margin: 10px 10px;
    display: flex;
  }

  .news-left {
    height: 100%;
    width: 4rem;
    display: inline-block;
  }

  .news-left img {
    width: 100%;
    height: 100%;
  }

  .news-right {
    flex: 1;
    padding-left: 10px;
  }

  .news-title {
    width: 100%;
    height: 62%;
    color: #404040;
    font-size: 15px;
    overflow: hidden;
  }

  .news-message {
    width: 100%;
    height: 38%;
    display: flex;
    align-items: flex-end;
    color: #888;
    justify-content: space-between;
  }

  .news-more {
    /* 以下三行实现文本居中，css3新特性 */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .news-none {
    color: #ccc;
  }

</style>
