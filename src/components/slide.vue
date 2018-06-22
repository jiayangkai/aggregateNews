<template lang="html">
  <div class="container">
    <div class="section" v-for="(item,index) in newsList" data-type="0" :key="index" :data-index="index" @touchstart.capture="touchStart"
      @touchend.capture="touchEnd" @click="todetailnews(item,index)">
      <div class="news">
        <div class="news-left">
          <img :src="item.pic || logoImg">
        </div>
        <div class="news-right">
          <div class="news-title">{{item.title}}</div>
          <div class="news-message">
            <span>{{item.time}}</span>
            <span>{{item.src || 'A News'}}</span>
          </div>
        </div>
      </div>
      <div class="event-section" @click="clickEvent" :data-index="index">{{item.eventName}}</div>
    </div>
  </div>
</template>
<script>
  import {
    mapState,
    mapActions,
    mapMutations
  } from 'vuex'
  import tools from '../common/tools'
  export default {
    data() {
      return {
        startX: 0,
        endX: 0
      }
    },
    props: {
      // 0:收藏;1:主页;
      dataType: Number,
      dataList: Array
    },
    computed: {
      logoImg() {
        let src = require('../assets/logo.png')
        return src
      },
      newsList() {
        return this.dataList.slice()
      }
    },
    methods: {
      ...mapActions(['CollectNews']),
      // 判断当前是否有处于滑动状态的滑块
      checkSlide() {
        let itemList = document.querySelectorAll('.section')
        // let tmpList = itemList.filter((x) => {
        //   // 1:滑动；0:默认
        //   x.dataset.type == 1
        // })
        // return tmpList.length > 0
        for (let i = 0; i < itemList.lenth; i++) {
          if (itemList[i].dataset.type == 1) {
            return true
          }
        }
        return false
      },
      // 所有滑块重置为默认状态
      resetSlide() {
        let itemList = document.querySelectorAll('.section')
        itemList.forEach((x) => {
          x.dataset.type = 0
        })
      },
      // 跳转到详情页
      todetailnews(item, index) {
        let that = this
        if (that.checkSlide()) {
          that.resetSlide()
        } else {
          that.$store.state.channelNew = item
          that.$router.push('./detailnews')
        }
      },
      touchStart(e) {
        let that = this
        that.startX = e.touches[0].clientX
      },
      touchEnd(e) {
        let that = this
        let element = e.currentTarget
        that.endX = e.changedTouches[0].clientX
        // 当前滑块状态默认，且鼠标左滑动指定距离
        if (element.dataset.type == 0 && that.startX - that.endX > 30) {
          that.resetSlide()
          // 滑动滑块
          element.dataset.type = 1
        }
        // 当前滑块已滑动，且鼠标右滑动指定距离
        if (element.dataset.type == 1 && that.startX - that.endX < -30) {
          this.resetSlide()
          // 滑块置为默认
          element.dataset.type = 0
        }
        // 变量归零
        that.startX = 0
        that.endX = 0
      },
      clickEvent(e) {
        let that = this
        // 阻止点击事件冒泡，不触发父级元素点击事件
        event.stopPropagation();
        that.resetSlide()
        let index = e.currentTarget.dataset.index
        let item = tools.deepClone(that.newsList[index])
        if (item.eventName == '删除') {
          that.$store.state.collectionNews.splice(index, 1)
          return
        }
        if (item.eventName == '收藏') {
          item.eventName = '删除'
          that.CollectNews(item)
          that.dataList[index].eventName = '取消'
          return
        }
        if (item.eventName == '取消') {
          that.dataList[index].eventName = '收藏'
          let cindex = that.$store.state.collectionNews.indexOf(item)
          that.$store.state.collectionNews.splice(cindex, 1)
          return
        }
      }
    }

  }

</script>
<style scoped>
  .section {
    width: 100%;
    height: 5rem;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    position: relative;
  }

  .section[data-type="0"] {
    transform: translate3d(0, 0, 0);
  }

  .section[data-type="1"] {
    transform: translate3d(-4rem, 0, 0)
  }

  .section::after {
    content: '';
    position: absolute;
    left: 0.2rem;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #ccc;
    color: #ccc;
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }

  .news {
    height: 4.5rem;
    box-sizing: border-box;
    margin: 10px 10px;
    display: flex;
    position: absolute;
    padding: 0.2rem;
  }

  .news-left {
    height: 100%;
    width: 4rem;
    display: inline-block;
  }

  .news-left img {
    width: 4rem;
    height: 4rem;
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
  }

  .news-message {
    width: 100%;
    height: 38%;
    display: flex;
    align-items: flex-end;
    color: #888;
    justify-content: space-between;
  }

  .event-section {
    width: 4rem;
    height: 100%;
    background-color: #ff4949;
    font-size: 25px;
    color: #fff;
    text-align: center;
    /* line-height: 4.5rem; */
    position: absolute;
    right: -4rem;
    /* 以下三行实现文本居中，css3新特性 */
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
