<template>
  <div class="comment">
  <div class="top d-f j-c-s-a">
  <div class="d-f">
  <img src="http://157.122.54.189:9093/images/logo.jpg" alt="" width="240" height="50">
  <div class="font m-l-10 login-hover">首页</div>
  <div class="font m-l-10 login-hover">旅游攻略</div>
  <div class="font m-l-10 login-hover">酒店</div>
  <div class="font m-l-10 login-hover">国内机票</div>
  </div>
  <div class="font login-hover">登录/注册</div>
  </div>
  <router-view></router-view>
  <div></div>
  </div>  
</template>
<script>
export default {
    
}
</script>
<style scoped lang='scss'>
.comment{
    width: 1280px;
    left: 0;
    right: 0;
    top: 0;
}
.top{
    width: 100%;
}
.font{
    font-size: 20px;
    margin-top: 10px;
}
.login-hover:hover{
    cursor: pointer;
    color: rgb(64,158,255);
}
</style>
    
