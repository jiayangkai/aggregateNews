<template lang="html">
  <div>
    <div class="mask" @click="toHome"></div>
    <transition name='fade'>
      <!-- login -->
      <div class="login-info" v-if="islogin">
        <!-- 头像 -->
        <div class="login-content" v-show="showcontent">
          <div class="login-head">
            <div class="avatar">
              <img id="avatarImg" :src="avatarUrl" @click="changeImg">
              <input id="upload_image" style="display: none" type="file" name="image" accept="image/*" @change="selectImg($event)">
            </div>
            <div class="username">{{username}}</div>
          </div>
          <!-- setting -->
          <div class="login-list">
            <ul>
              <!-- 跳转到收藏页 -->
              <router-link to="/collection">
                <li>
                  <img :src="collectionImg"> 我的收藏</li>
              </router-link>
              <li>
                <img :src="aboutImg"> 关于
              </li>
              <li @click="singout">
                <img :src="singoutImg"> 注销
              </li>
            </ul>
          </div>
        </div>
        <!-- nologin -->
        <div class="nologin" v-show="!showcontent">
          <div class="nologin-content">
            <input type="text" placeholder="邮箱或手机号">
            <input type="password" placeholder="输入密码">
            <button @click="login">登录</button>
            <div class="register">
              <span>立即注册</span>
              <span>忘记密码</span>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        username: 'kaiqingjia',
        flag: true,
      }
    },
    computed: {
      avatarUrl() {
        let src = require('../assets/logo.png')
        return src
      },
      islogin() {
        return this.$store.state.islogin
      },
      showcontent: {
        get: function () {
          return this.flag
        },
        set: function (value) {
          this.flag = value
        }
      },
      collectionImg() {
        let src = require('../assets/collection.png')
        return src
      },
      aboutImg() {
        let src = require('../assets/aboutme.png')
        return src
      },
      singoutImg() {
        let src = require('../assets/cancel.png')
        return src
      }
    },
    methods: {
      toHome() {
        this.$store.state.islogin = false
      },
      // 退出
      singout() {
        this.flag = false
      },
      // 登录
      login() {
        this.flag = true
      },
      changeImg() {
        document.getElementById('upload_image').click()
      },
      selectImg(source) {
        var file = source.target.files[0];
        if (file.size > 1024 * 1024 * 2) {
          return
        }
        if (window.FileReader) {
          var fr = new FileReader();
          fr.onloadend = function (e) {
            document.getElementById('avatarImg').src = e.target.result;
          };
          fr.readAsDataURL(file);
        }
      }
    }
  }

</script>
<style lang="css" scoped>
  .mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .8);
    z-index: 100;
  }

  .login-info {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 5rem;
    background-color: #fff;
    display: flex;
    justify-content: center;
    z-index: 101;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all .5s ease;
  }

  .fade-enter {
    transform: translateX(-100%);
  }

  .login-content,
  .nologin {
    width: 80%;
    height: 100%;
  }

  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 20px auto;
    cursor: pointer;
  }

  .login-head {
    width: 100%;
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 5rem;
    color: #888;
  }

  .avatar img {
    width: 100%;
    height: 100%;
  }

  .login-list {
    margin-top: 5rem;
    font-size: 1rem;
    color: #404040;
  }

  .login-list ul li {
    height: 2rem;
    line-height: 2rem;
    display: block;
    border-bottom: 1px solid #ccc;
  }

  .login-list img {
    width: 1rem;
    height: 1rem;
    vertical-align: middle;
    margin-right: .8rem;
  }

  .nologin-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }

  .nologin-content input {
    width: 80%;
    height: 2rem;
    margin-bottom: 1rem;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 3px;
    color: #888;
  }

  .nologin-content button {
    width: 80%;
    height: 2rem;
    background-color: #f33;
    border: 1px solid #f33;
    color: #fff;
    letter-spacing: 5px;
    border-radius: 3px;
  }

  .register {
    width: 90%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
  }

  .register span:last-child {
    color: red;
  }

  a {
    text-decoration: none;
  }

</style>
