<template lang="html">
  <div>
    <!-- 频道导航 -->
    <div>
      <div>
        <ul>
          <li v-for="(channel,index) in channelarr" :key="index" @click="getchannelNews">{{channel}}</li>
        </ul>
      </div>
      <div>
        <img src="" @click="managechannel">
      </div>
    </div>
    <!-- 频道新闻 -->
    <div>
      <!-- 首页滚动图 -->
      <div>
        <carousel></carousel>
      </div>
      <div v-for="" @click="getdetailNews">
        <!-- 缩略图 -->
        <div>
          <img src="">
        </div>
        <!-- 标题 -->
        <div>
          <span>{{}}</span>
        </div>
        <!-- 时间、来源 -->
        <div>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  // 引入组件
  import carousel from '@/components/carousel'
  export default {
    // 注册组件
    components: {
      carousel
    }

  }
</script>
<style scoped>


</style>
