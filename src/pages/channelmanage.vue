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
          已启用频道(拖动排序/禁用频道)
        </div>
        <!-- <ul>
          <li v-for="(item,index) in channelArr" :key="index" class="channel-name" :class="{'channel-name-index':item === '头条'}" @click="deleteChannel(item,index)">{{item}}</li>
        </ul> -->
        <div class="channel-min">
          <draggable v-model="channelList" :options="{group:'name'}" @add="updateChannel" @end="updateChannel">
            <transition-group class="channel-manage" tag="ul">
              <li class="channel-name" :class="{'channel-name-index':item.name === '头条'}" v-for="(item,index) in channelList" :key="index">{{item.name}}</li>
            </transition-group>
          </draggable>
        </div>
      </div>
      <div class="add-channel">
        <div class="title add-title">
          禁用频道
        </div>
        <!-- <ul>
          <li v-for="(item,index) in deletedChannels" class="channel-name" @click="addChannel(item,index)">{{item}}</li>
        </ul> -->
        <div class="channel-min">
          <draggable v-model="deletedList" :options="{group:'name'}">
            <transition-group class="channel-manage" tag="ul">
              <li class="channel-name" v-for="(item,index) in deletedList" :key="index">{{item.name}}</li>
            </transition-group>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import draggable from 'vuedraggable'
  import {
    mapState,
    mapActions,
    mapMutations
  } from 'vuex'
  export default {
    data() {
      return {
        channelList: [],
        deletedList: []
      }
    },
    components: {
      draggable
    },
    computed: {
      ...mapState(['channelArr', 'deletedChannels']),
      backImg() {
        let src = require('../assets/back.png')
        return src
      }
    },
    methods: {
      updateChannel(){
        this.$store.state.channelArr = this.channelList.slice()
      },
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
      },
      setChannelData() {
        this.channelList = this.channelArr.slice()
      }
    },
    mounted() {
      this.setChannelData()
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

  .channel-manage {
    width: 100%;
    /* display: flex; */
    min-height: 2rem;
  }

  .channel-min {
    min-height: 2rem;
  }

  .channel-name {
    width: 2.5rem;
    height: 1.5rem;
    border: 1px solid #ccc;
    margin: .13rem .27rem;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    text-align: center;
    line-height: 1.5rem;
    font-size: 16px;
    /* float: left; */
  }

  .channel-name-index {
    border: 1px solid coral;
    pointer-events: none;
    cursor: default;
    opacity: 0.6;
  }

</style>
