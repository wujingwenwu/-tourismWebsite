<template>
  <div class="comment">
  <div class="top d-f j-c-s-a">
  <img src="http://157.122.54.189:9093/images/logo.jpg" alt="" width="240" height="50">
  <div>首页</div>
  <div>旅游攻略</div>
  <div>酒店</div>
  <div>国内机票</div>
  </div>
  <router-view></router-view>
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
</style>
    
