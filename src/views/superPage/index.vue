<template>
  <div class="sucessWrapper">
    <ul class="headers">


      <li @click="toHome">平台</li>
      <li>收银台</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data (){
      return {

      }
    },
    methods:{
      toHome(){
        this.$router.push({path:'/Layout/Home'})
      }
    }
  }
</script>

<style scoped="scoped">
  .sucessWrapper{
    width: 100%;
    height: 100%;
  }
  .headers{
    height: 40px;
    width: 100%;
    display: flex;
    background: #ccc;
  }
  .headers li {
    height: 40px;
    line-height: 40px;
    width: 100px;
    text-align: center;
  }
</style>
