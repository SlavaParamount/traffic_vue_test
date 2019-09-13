<template>
  <div class="wrapper">
    <div id="app">
      <div class="content-wrapper">
        <h1>Traffic lights</h1>
        <p>{{ link }}</p>
        <p>Blink: {{ blink }}</p>
        <p style="font-size: 36px;">{{timeout}}</p>
        <div id="traffic-light">
          <!--  почему не работает v-bind?!?! -->
          <router-link to="./red"  class='color color-red' id="color1" value="color1" v-on:click="changeTo('red')"/></router-link>
          <router-link to = "./yellow" class='color color-yellow blink' id="color2" v-on:click="changeTo('yellow')" value="color2"/><span></span></router-link>
          <router-link to="./green" class='color color-green '  id="color3" value="colors3" v-on:click="changeTo('green')" /><span></span></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default { //это должно быть здесь? почему не работает v-for?
  name: 'app',
  data: function() {
    return {
      timeout: 5,
      interval: undefined,
      blink: 1
    }
  },
  computed: {
    link: function() {
      return this.$route.path;
    }
  },
  methods: {
    changeTo(color) {
      clearInterval(this.interval);
      console.log(color);
      switch(color) {
        case "red":
        this.timeout=10;
        this.$router.push("/red");
        break;
        case "yellow":
        this.timeout=3;
        this.$router.push("/yellow");
        break;
        case "green":
        this.timeout=15;
        this.$router.push("/green");
      }
      this.interval = this.setTimer;
      this.interval();
    },
    nextPath() {
      switch(this.$route.path) {
        case "/red":
          this.changeTo("yellow");
          break;
        case "/yellow":
          this.changeTo("green");
          break;
        default:
          this.changeTo("red");
          break;
      }
    },
    setTimer() {
    var that = this;
     this.interval =  setInterval(function(){
      that.timeout-=1;
      if (that.timeout==0) {
      that.nextPath();
     }
     that.timeout <= 3 ? that.blink = 1 : that.blink = 0;
    }, 1000);
    }
  },
  mounted: function(){
    this.nextPath();
  },
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