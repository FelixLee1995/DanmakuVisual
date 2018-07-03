<template>
    <div class="signarea">
      <h1>{{msg}}</h1>
      <div><button class="btn_signup">注册</button></div>
      <div><button class="btn_signin" @click="openLoginDialog">登录</button></div>
      <LoginDialog v-model="sendVal"></LoginDialog>
    </div>

</template>



<script>
  import  LoginDialog from './Login'
    export default {
        name: "SignInUp",
        components: {
          LoginDialog
        },
        data() {
          return {
            msg: "Join Us Now",
            sendVal:false
          }
        },
        methods:{
          openLoginDialog(){
            this.sendVal = true;
          },
          clickCancel(){
            console.log('点击了取消');
          },
          clickDanger(){
            console.log('这里是danger回调')
          },
          clickConfirm(){
            console.log('点击了confirm');
          }
        }

    }
</script>

<style scoped>

  .signarea {
    padding: 20px;

  }

  .btn_signup {
    background: #1DA1F2;
    border-radius: 20px;
    border-width: 0;
    width: 100%;
    color: aliceblue;
    margin-top: 20px;
    height: 35px;
  }

  .btn_signin {
    background: white;
    border-radius: 20px;
    border-width: 1px;
    border-color: #1DA1F2;
    color: #1DA1F2;
    width: 100%;
    margin-top: 20px;
    height: 35px;
  }

</style>
