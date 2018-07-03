<template>
  <div class="dialog" v-show="showMask">
    <div class="loginPage">
      <div>
        <span>登录 </span>
        <button class="btn_cancel" @click="closeMask">取消</button>
      </div>
      <div>
        <div class="wrapper">
          <input class="input_user" type="text" id="user" placeholder="账户名"  ref="user"/>
        </div>
        <div class="wrapper">
          <input class="input_pwd" type="password" id="password"  placeholder="密码" ref="pwd"/>
        </div>

        <div>
          <button class="btn_login" @click="onLogin">登录</button>
        </div>
        <button class="btn_forgetpwd">忘记密码？</button>

      </div>
    </div>
  </div>
</template>

<script>
  import md5 from 'js-md5'
  import axios from 'axios'
  import global_ from '../Global.vue'

  export default {
    name: "LoginDialog",
    props: {
      value: {},
      // 类型包括 defalut 默认， danger 危险， confirm 确认，
      type:{
        type: String,
        default: 'default'
      },
      content: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      dangerText: {
        type: String,
        default: '删除'
      },
      confirmText: {
        type: String,
        default: '确认'
      },
    },
    data(){
      return{
        showMask: false,
      }
    },
    methods:{
      direct2home() {
        window.location.href = global_.basepath + "/";
        //this.$router.replace('/home');
      },
      closeMask(){
        this.showMask = false;
      },
      closeBtn(){
        this.$emit('cancel');
        this.closeMask();
      },
      dangerBtn(){
        this.$emit('danger');
        this.closeMask();
      },
      confirmBtn(){
        this.$emit('confirm');
        this.closeMask();
      },
      onLogin() {
        var user = this.$refs.user.value;
        var pwd = md5(this.$refs.pwd.value);
        axios.get(global_.api +'login/' + user + '&' + pwd).then(res=>{
          this.$store.commit('saveInfo',res.data['username']);
          this.$store.commit('saveMid',res.data['bilimid']);
          //alert(this.$store.getters.getUsername);
          this.direct2home();
        });

      }
    },
    mounted(){
      this.showMask = this.value;
    },
    watch:{
      value(newVal, oldVal){
        this.showMask = newVal;
      },
      showMask(val) {
        this.$emit('input', val);
      }
    },
  }
</script>

<style scoped>
  html,body{
    margin: 0;
    padding: 0;
    position: relative;
  }
  .dialog{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.7);

    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    display: table;
    transition: opacity .3s ease;
  }
  .loginPage{
    position: absolute;
    top: 40%;
    left: 50%;
    margin-top: -150px;
    margin-left: -300px;
    width: 600px;
    min-height: 400px;
    padding: 30px 50px 50px;
    border-radius: 8px;
    box-sizing: border-box;
    background-color: #fff;
  }
  .loginPage p{
    color: red;
  }

  span {
    font-size: 30px;
    display: inline-block;
    font-weight: bold;
    float: left;
  }

  .btn_cancel {
    float: right;
    display: inline-block;
    border-radius: 20px;
    padding: 8px;
    width: 60px;
    border: 0px;
    background-color: #1DA1F2;
    color: white;
  }

  .btn_login {
    background: #1DA1F2;
    border-radius: 20px;
    border-width: 0;
    width: 100%;
    color: aliceblue;
    margin-top: 40px;
    height: 35px;
  }

  .btn_forgetpwd {
    margin-top: 20px;
    float: right;
    border: 0px;
    background-color: white;
    color: #1DA1F2;
  }


  input{
    min-height: 40px;
    width: 100%;
    margin-right: 50px;
    margin-top: 25px;
    border: 0px;
    border-bottom: blue;
    background-color: transparent;
  }

  .wrapper {
    border-bottom: 1px solid grey;
  }

  input::-webkit-input-placeholder {
    text-align: left;
    font-size: 18px;
  }


</style>
