<template lang="html">
  <div id="app">
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
  html,
  body {
    overflow-x: hidden;
  }
  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  code,
  form,
  fieldset,
  legend,
  input,
  button,
  textarea,
  p,
  blockquote,
  table,
  th,
  td {
    margin: 0;
    padding: 0;
  }

</style>
