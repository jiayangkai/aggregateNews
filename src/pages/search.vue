<template lang="html">
  <div>
    <div class="search-header">
      <div class="header">
        <img :src="backImg" @click="backHome">
        <span>搜索</span>
        <span>占位</span>
      </div>
      <div class="search">
        <input type="text" placeholder="请输入搜索内容" v-model="keywords" @keyup.enter="searchNews(keywords)">
      </div>
    </div>
    <div class="news-content">
      <loading class="loading" v-show="fetchLoading"></loading>
      <div class="section" v-for="(item, index) in result">
        <div class="news" @click="toDetail(item)">
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
  import loading from '../components/loading.vue'
  import {
    mapState,
    mapActions,
    mapMutations
  } from 'vuex'
  export default {
    data() {
      return {
        result: [],
        keywords: ''
      }
    },
    components: {
      loading
    },
    computed: {
      ...mapState(["fetchLoading"]),
      backImg() {
        let src = require('../assets/back.png')
        return src
      }
    },
    methods: {
      ...mapActions(["FetchLoading", "searchnews"]),
      backHome() {
        this.$router.back(-1)
      },
      searchNews(param) {
        let that = this
        if (!param || param == '') {
          return
        }
        // 清空原有结果
        that.result = ''
        that.FetchLoading(true)
        let params = 'keyword=' + param
        that.searchnews(params).then(response => {
          if (response.data.status == '0') {
            that.result = response.data.result.list
            that.FetchLoading(false)
          }
        }, (err) => {
          console.log(err)
          that.FetchLoading(false)
        })
        
      },
      toDetail(params) {
        this.$store.state.channelNew = params
        this.$router.push('/detailnews')
      }
    }
  }

</script>
<style lang="css">
  .search-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  .header {
    width: 100%;
    height: 2rem;
    background-color: coral;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    color: #fff;
  }

  .header span:last-child {
    opacity: 0;
  }

  .header img {
    width: 25px;
    height: 25px;
    padding-left: .1rem;
  }

  .search {
    width: 100%;
    height: 2rem;
    background-color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search input {
    width: 96%;
    height: 20px;
    border-radius: 4px;
    border: #ccc;
    outline: #ccc;
    text-align: center;
  }

  .news-content {
    margin-top: 4.5rem;
  }

  .section {
    width: 100%;
    height: 5rem;
    border-bottom: 1px solid #ccc;
  }

  .news {
    height: 4.75rem;
    box-sizing: border-box;
    margin: 10px 10px;
    display: flex;
  }

  .news-left {
    height: 100%;
    width: 5rem;
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
    overflow: hidden;
    white-space: nowrap;
  }

  .loading{
    position: fixed;
    top: 4rem;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;
    background-color: #fff;
    z-index: 99;
  }

</style>
