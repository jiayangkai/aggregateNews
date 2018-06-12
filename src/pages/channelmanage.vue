<template>
  <div>
    <div class="header">
      <img :src="backImg" @click="backHome">
      <span>频道管理</span>
      <span></span>
    </div>
    <div class="content">
      <div class="delete-channel">
        <div class="title delete-title">
          点击删除频道
        </div>
        <ul>
          <li v-for="(item,index) in channelArr" :key="index" class="channel-name" :class="{'channel-name-index':item === '头条'}" @click="deleteChannel(item,index)">{{item}}</li>
        </ul>
      </div>
      <div class="add-channel">
        <div class="title add-title">
          点击添加频道
        </div>
        <ul>
          <li v-for="(item,index) in deletedChannels" class="channel-name" @click="addChannel(item,index)">{{item}}</li>
        </ul>
      </div>
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

      }
    },
    computed: {
      ...mapState(['channelArr', 'deletedChannels']),
      backImg() {
        let src = require('../assets/back.png')
        return src
      }
    },
    methods: {
      deleteChannel(item, index) {
        this.channelArr.splice(index, 1)
        this.deletedChannels.push(item)
      },
      addChannel(item, index) {
        this.deletedChannels.splice(index, 1)
        this.channelArr.push(item)
      },
      backHome() {
        this.$router.back(-1)
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
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header img {
    width: 25px;
    height: 25px;
    ;
  }

  .content {
    position: absolute;
    top: 2rem;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
  }

  .title {
    padding-left: .27rem;
    color: #666;
    font-size: 16px;
  }

  .delete-title {
    padding-bottom: 10px;
    padding-top: 4px;
  }

  .add-title {
    padding-top: 20px;
    padding-bottom: 10px;
  }

  li {
    display: inline-block;
  }

  .channel-name {
    width: 2.5rem;
    height: 1.5rem;
    border: 1px solid #ccc;
    margin: .13rem .27rem;
    text-align: center;
    line-height: 1.5rem;
    font-size: 16px;
  }

  .channel-name-index {
    border: 1px solid coral;
    pointer-events: none;
    cursor: default;
    opacity: 0.6;
  }

</style>
