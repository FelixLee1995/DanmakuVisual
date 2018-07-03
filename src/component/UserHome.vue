<template>
    <div>
      <Navigator></Navigator>
      <Banner v-bind:param="bannerparam"></Banner>
      <h1>用户名：{{username}}</h1>
      <h1>BiliID: {{bilimid}}</h1>
    </div>
</template>

<script>
    import Navigator from './Navigator.vue'
    import Banner from './Banner.vue'
    import axios from 'axios'
    import global_ from '../Global.vue'

    export default {
        name: "UserHome",
        components: {
          Navigator,
          Banner
        },
        computed: {
            username:function() {
              return this.$store.getters.getUsername;
            },
            bilimid: function() {
              return this.$store.getters.getBilimid;
            }
        },
        data() {
          return {
            bannerparam: null
          }
        },
        methods:{
          getbiliuserinfo: function () {
            axios.get(global_.api + 'biliuserinfo/get/' + this.$store.getters.getBilimid).then(res=>{
              this.bannerparam = res.data.data;
              console.log(this.bannerparam);
            })
          }
        },
        mounted: function () {
          this.getbiliuserinfo();

      }
    }




</script>

<style scoped>

</style>
