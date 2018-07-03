<template>
    <div class="wrapper">
      <div class="back">
        <div class="h-userinfo">
          <div class="h-avator">
            <img class="avator_round" v-bind:src="picurl"/>
          </div>
          <div class="h-basic">
            <span id="h-name">{{biliname}}</span>
            <span id="h-level">{{bililevel}}</span>
            <div class="h-sign-wrapper">
              <span id="h-sign">{{bilisign}}</span>
            </div>

          </div>
        </div>
      </div>
    </div>

</template>

<script>
    export default {
        name: "Banner",
        props: ['param'],
        computed: {
          biliname(){

              return this.param?this.param.name: '';
          },
          bililevel() {
              return this.param?this.param.level_info.current_level: '';
          },
          bilisign() {
            return this.param?this.param.sign: '';
          },
          picurl() {
            return this.param?this.param.face: '';
          }
        }
    }
</script>

<style scoped>

  .wrapper {

    width: 1100px;
    margin: 0 auto;
    position: relative;
    display: block;
  }

  .back {
    display: block;
    position: relative;
    width: 100%;
    height: 200px;
    background: url("http://i0.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png@100Q.webp") no-repeat center center;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  .h-userinfo {
    display: block;
    position: absolute;
    margin-left: 40px;
    bottom: 5px;
    vertical-align: bottom;
    height: 84px;
    line-height: 1.7em;
  }

  .h-avator {
    position: relative;
    float: left;
    width: 64px;
    height: 64px;
    border: 2px solid hsla(0,0%,100%,.4);
    border-radius: 52px;
  }

  .avator_round {
    width: 64px;
    height: 64px;
    background: #fff;
    border-radius: 48px;
  }

  .h-basic {
    float: left;
    color: #fff;
    font-size: 0;
    margin: 10px 0 0 20px;
  }



  #h-name {
    display: inline-block;
    margin-right: 5px;
    font-weight: 700;
    line-height: 18px;
    font-size: 18px;
    vertical-align: middle;
  }

  #h-level {
    display: inline-block;
    margin-right: 5px;
    font-weight: 700;
    line-height: 18px;
    font-size: 10px;
    width: 20px;
    vertical-align: middle;
    background-color: coral;
    text-align: center;
    line-height: 1.2em;
  }

  #h-sign {
    background: transparent;
    border-radius: 4px;
    border: none;
    box-shadow: none;
    color: bisque;
    font-size: 12px;
    font-family: Microsoft Yahei;
    line-height: 26px;
    height: 26px;
    margin-left: -5px;
    padding: 0 5px;
    position: relative;
    top: -1px;
    width: 730px;
  }

  .h-sign-wrapper {
    margin-top: 10px;
  }

</style>
