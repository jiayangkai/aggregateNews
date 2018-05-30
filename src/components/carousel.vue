<template>
  <div class="carousel">
    <!-- 图片轮播 -->
    <transition-group tag="ul" name="image" class="clearfix">
      <li v-for="(item,index) in channelNews" :key="index" v-show="index===currentIndex">
        <img :src="item.pic" @click="toDetailNews">
      </li>
    </transition-group>
    <!-- 圆点指示 -->
    <div class="bullet">
      <span v-for="(item,index) in channelNews.length" :class="{active:index === currentIndex}"></span>
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
    data() {
      return {
        channelNews: [],
        currentIndex: 0,
        imgcount: 10
      }
    },
    methods: {
      ...mapActions(['getchannel','getNewsByChannel']),
      getNews() {
        let params = 'channel=' + this.$store.state.channelName +
          '&start=0&num=' + this.imgcount
        this.getNewsByChannel(params).then(response => {
          if (response.data.status == '0') {
            this.channelNews = response.data.result.list.filter((item)=>{
             return item.pic !==''
            })
          }
        }, err => {
          
        })
      },
      toDetailNews() {

      },
      autoPlay() {
        this.currentIndex++
          if (this.currentIndex === this.channelNews.length) {
            this.currentIndex = 0
            return
          }
      },
      play() {
        setInterval(this.autoPlay, 3000)
      }
    },
    created() {
      this.play(),
      this.getNews()
    }

  }

</script>
<style scoped>
  .carousel {
    margin-bottom: 10rem;
  }
  .carousel,
  ul,
  li {
    width: 100%;
    display: inline-block;
  }
  li {
    position: absolute;
  }
  li img {
    width: 100%;
    height: 10rem;
  }
  .image-enter-active {
    transform: translateX(0);
    transition: all 1s ease;
  }
  .image-leave-active {
    transform: translateX(-100%);
    transition: all 1s ease;
  }
  .image-enter {
    transform: translateX(100%);
  }
  .image-leave {
    transform: translateX(0);
  }
  .bullet {
    width: 100%;
    position: absolute;
    top: 10rem;
    margin: 0 auto;
    text-align: right;
    z-index: 10;
  }
  .bullet span {
    width: 10px;
    height: 10px;
    border: 1px solid;
    display: inline-block;
    margin-right: 10px;
    border-radius: 10px;
  }
  .active {
    background-color: #fff;
  }
  .clearfix {
    content: '';
    clear: both;
    display: block;
  }

</style>
