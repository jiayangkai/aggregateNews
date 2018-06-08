<!--这是预加载组件-->
<template>
        <div>
            <div class="preloader-indicator-overlay loading-overlay"></div>
            <div class="preloader-indicator-modal">
                <!-- <span class="preloader preloader-white"></span> -->
                <vue-loading type="spin" color="black" :size="{ width: '50px', height: '50px' }"></vue-loading>  
            </div>
        </div>
    </template>
    
    <script>
    import vueLoading from "vue-loading-template";
    export default {
      name: "loader",
      props: {
        title: {
          type: String
        }
      },
      methods: {},
      components: {
        vueLoading
      }
    };
    </script>
    
    <style lang="scss" scoped>
    .preloader-indicator-modal {
      background: #fff;
      margin-left: toRem(-25px);
      margin-top: toRem(-50px);
    }
    .loading-overlay {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 13000;
      opacity: 0.5;
      -webkit-transition-duration: 0.4s;
      transition-duration: 0.4s;
    }
    </style>
    
    