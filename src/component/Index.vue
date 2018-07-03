
<template>
  <div id="index">
    <div class="navigate-bar"></div>
    <img class="banner" src="//i0.hdslb.com/bfs/archive/30d45ce269948eae8ed650e5ce03a2ca463a5d77.png">
    <h1>{{ msg }}</h1>
    <h2>Just Link with your BliliID and SYNC!</h2>

    <sign_area class="area_sign"></sign_area>
  </div>
</template>

<script>
  import  SignInUp from './SignInUp'

  export default {
    name: 'index',
    components: {"sign_area":SignInUp

    },
    data () {
      return {
        msg: 'Preserve your favourite Danmaku 4ever'
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;

  }

  a {
    color: #42b983;
  }

  .banner {
    width: 100%;
    height: 100%;
  }

  .area_sign {
    width: 30%;
    margin-top: 0;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 0;
  }

</style>
