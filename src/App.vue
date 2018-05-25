<template lang="html">
  <div>
      <router-view></router-view>
      <loading v-show="fetchLoading"></loading>
  </div>
</template>

<script>
  import {
    mapState,
    mapGetters,
    mapActions
  } from "vuex"
  import loading from "./components/loading"
  export default {
    data() {
      return {}
    },
    computed: {
      ...mapState(["fetchLoading"])
    },
    components: {
      loading
    },
    created() {},
    methods: {
      ...mapActions(["FetchLoading"])
    },
    beforeRouteEnter(to, from, next) {
      next()
    },
    beforeRouteUpdate(to, from, next) {
      next(vm => {})
    },
    afterRouteEnter(to, from, next) {
      next(vm => {})
    }
  }

</script>

<style>

</style>
