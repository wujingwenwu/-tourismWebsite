<template>
    <div class="login">
    <div class="image d-f j-c-c a-i-c">
     <div class="logins">
      <div class="d-f">
      <div class="logins1 d-f j-c-c a-i-c" @click="clickLogins" :class="[flag===true?'actives':'']">登录</div>
      <div class="logins1 d-f j-c-c a-i-c" @click="clickRegister" :class="[flag===false?'actives':'']">注册</div>
      </div>
      <div v-if="flag===true">
      <a-form
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :wrapper-col="wrapperCol"
  >
    <a-form-item ref="username" label="Activity name" name="username">
      <a-input v-model:value="form.username" />
    </a-form-item>
    <a-form-item ref="password" label="Activity name" name="password">
      <a-input v-model:value="form.password" />
    </a-form-item>
      </a-form>
      </div>
     </div>
    </div>
    </div>
</template>
<script lang="ts">
import { Form } from 'ant-design-vue';
import {defineComponent, reactive, toRefs} from 'vue'
interface FormIitem {
    username: string;
    password: string;
    
}
interface RuleItem {
   message: string;
   trigger: string; 
   required: boolean;
   min?: number;
   max?: number;
   type?: string;
}
interface Rules {
    username: RuleItem[];
    password: RuleItem[];
    
}
interface Data {
    flag: boolean;
    from: FormIitem;
    rules: Rules;
}
 export default defineComponent({
   name: '',

   components: {

   },
setup(){

const data: Data = reactive<Data>({
    flag: true;
    form
});
const clickLogins=(): void=>{
  data.flag=true
};
const clickRegister=(): void=>{
  data.flag=false  
}
return {
...toRefs(data),
clickLogins,
clickRegister,
}
},
 })
</script>
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
.actives{
 background: white;
 color: orange;
 font-weight: 700;   
}
</style>