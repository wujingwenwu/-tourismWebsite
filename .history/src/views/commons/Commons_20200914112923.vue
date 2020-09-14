<template>
  <div class="comment d-f f-d-c a-i-c">
    <div class="top d-f j-c-s-a">
      <div class="d-f">
        <img src="http://157.122.54.189:9093/images/logo.jpg" alt width="240" height="50" />
        <div class="font m-l-10 login-hover hvr-underline-from-center">首页</div>
        <div class="font m-l-10 login-hover hvr-underline-from-center">旅游攻略</div>
        <div class="font m-l-10 login-hover hvr-underline-from-center">酒店</div>
        <div class="font m-l-10 login-hover hvr-underline-from-center">国内机票</div>
      </div>
      <div class="font login-hover hvr-underline-from-center">登录/注册</div>
    </div>
    <router-view></router-view>
    <div class="bottom d-f f-d-c a-i-c">
      <div class="d-f">
        <div>
          <div>闲云旅游旅游网</div>
          <div>上亿旅行者共同打造的"旅行神器"</div>
          <div class="d-f">
            <div>60,000</div>
            <div>多个全球旅游目的地</div>
          </div>
          <div class="d-f">
          <div>600,000</div>
          <div>个细分目的地新玩法</div>
          </div>
          <div class="d-f">
          <div>760,000,000</div>
          <div>次攻略下载</div>
          </div>
          <div class="d-f">
          <div></div>
          <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang='scss'>
.comment {
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
}
.top {
  width: 1280px;
}
.font {
  font-size: 20px;
  margin-top: 10px;
}
.login-hover:hover {
  cursor: pointer;
  color: rgb(64, 158, 255);
}
.bottom {
  background: black;
  height: 300px;
  width: 100%;
}
</style>
    
