<template lang="html">
  <div>
    <!-- login -->
    <div>
      <!-- 头像 -->
      <div>
        <div class="avatar">
          <img src="{{avatarUrl}}" @click="changeImg">
        </div>
        <span>{{uername}}</span>
      </div>
      <!-- setting -->
      <div>
        <ul>
          <!-- 跳转到收藏页 -->
          <router-link to="">
            <img src="">
            <li>我的收藏</li>
          </router-link>
          <li>
            <img src="">
            <li>关于</li>
          </li>
          <li>
            <img src="" @click="singout">
            <li>注销</li>
          </li>
        </ul>
      </div>
    </div>
    <!-- nologin -->
    <div>
      <input type="text" placeholder="邮箱或手机号">
      <input type="password" placeholder="输入密码">
      <button @click="login">登录</button>
      <div>
        <span>立即注册</span>
        <span>忘记密码</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        avatarUrl: require("./")
      }
    },
    methods: {
      // 退出
      singout: function () {

      },
      // 登录
      login: function () {

      },
      changeImg: function (file) {
      }
    }
  }

</script>
<style lang="css" scoped>
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 20px auto;
    cursor: pointer;
  }

</style>
