<template lang="html">
  <div class="nav-content">
    <!-- 频道导航 -->
    <div class="nav">
      <div class="channel">
        <ul>
          <li v-for="(channel,index) in channelarr" :key="index" @click="getNews(channel,index)">{{channel}}</li>
        </ul>
      </div>
      <div class="manage-channel">
        <img :src="addImg" @click="managechannel">
      </div>
    </div>
    <!-- 频道新闻 -->
    <div class="news-content">
      <loading v-show="fetchLoading"></loading>
      <carousel v-show="this.$store.state.channelIndex === 0"></carousel>
      <div class="section" v-for="(item,index) in channelNews" :key="index" @click="todetailnews(item,index)">
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
      </div>
    </div>
  </div>
</template>
<script>
  // 引入组件
  import carousel from '@/components/carousel'
  import loading from '@/components/loading'
  import {
    mapState,
    mapActions,
    mapMutations
  } from 'vuex'
  export default {
    data() {
      return {
        channelarr: [],
        channelNews: []
      }
    },
    // 注册组件
    components: {
      carousel,
      loading
    },
    computed: {
      ...mapState(['fetchLoading']),
      addImg: function () {
        var src = require('../assets/add.png')
        return src
      }
    },
    methods: {
      ...mapActions(['getchannel', 'getNewsByChannel','FetchLoading']),
      getchannels() {
        this.getchannel().then(response => {
          if (response.data.status == '0') {
            this.channelarr = response.data.result
          }
        }, (err) => {
          console.log(err)
        })
      },
      managechannel() {

      },
      getNews(channel, index) {
        this.$store.state.channelName = channel
        this.$store.state.channelIndex = index
        let params = 'channel=' + this.$store.state.channelName +
          '&start=0&num=10'
        this.getNewsByChannel(params).then(response => {
          if (response.data.status == '0') {
            this.channelNews = response.data.result.list
          }
        }, (err) => {
          console.log(err)
        })
      },
      getdetailNews() {

      },
      todetailnews(item, index) {

      }
    },
    mounted() {
      this.getchannels(),
      this.getNews(this.$store.state.channelName,0)
      this.FetchLoading(false)
    },
    created(){
      this.FetchLoading(true)
    }

  }

</script>
<style lang="css" scoped>
  .nav-content {
    margin-top: 1.2rem;
  }
  .nav {
    width: 100%;
    height: .96rem;
    background-color: #f4f5f6;
    display: flex;
    position: fixed;
    z-index: 99;
  }
  .channel {
    display: inline-block;
    flex: 1;
    white-space: nowrap;
    display: flex;
    align-items: center;
    overflow-x: scroll;
    font-size: .45rem;
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
    width: .53rem;
    height: .53rem;
  }
  .newsContent {
    padding-top: 0.96rem;
  }
  loading {
  margin-top: 30px;
  width: 50px;
  height: 50px;
  animation: loading .6s linear infinite
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
  font-size: 18px;
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

</style>
