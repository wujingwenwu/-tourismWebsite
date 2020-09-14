<template>
    <div class="login">
    <div class="image d-f j-c-c a-i-c">
     <div class="logins">
      <div class="d-f">
      <div class="logins1 d-f j-c-c a-i-c">登录</div>
      <div class="logins1 d-f j-c-c a-i-c">注册</div>
      </div>
      <div v-if="flag===true"></div>
     </div>
    </div>
    </div>
</template>
<style lang="scss">
  .image{
      width: 100%;
      height: 500px;
      background: url(http://157.122.54.189:9095/assets/images/th03.jfif) center 0;
  } 
.login{
    width: 100%;
}
.logins{
    background: white;
    width: 400px;
}
.logins1{
    background: rgb(230, 228, 228);
    width: 200px;
    height: 50px;
    font-size: 18px;
}

</style>