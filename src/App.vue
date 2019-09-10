<template>
  <div class="wrapper">
    <div id="app">
      <div class="content-wrapper">
        <h1>Traffic lights</h1>
        <div id="traffic-light">
          <router-link to ="#">aaaa</router-link>
          <input type="radio" name="traffic-light-color" id="color1" value="color1" />
          <input type="radio" name="traffic-light-color" id="color2" value="color2"/>
          <input type="radio" name="traffic-light-color" id="color3" value="colo3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/lights.scss";
.wrapper {
  display: flex;
  justify-content: center;
}
</style>
