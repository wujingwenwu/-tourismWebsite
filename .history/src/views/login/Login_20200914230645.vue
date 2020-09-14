<template>
  <div class="login">
    <div class="image d-f j-c-c a-i-c">
      <div class="logins">
        <div class="d-f">
          <div
            class="logins1 d-f j-c-c a-i-c"
            @click="clickLogins"
            :class="[flag===true?'actives':'']"
          >登录</div>
          <div
            class="logins1 d-f j-c-c a-i-c"
            @click="clickRegister"
            :class="[flag===false?'actives':'']"
          >注册</div>
        </div>
        <div v-if="flag===true">
          <div class="d-f a-i-c f-d-c w-100">
            <a-form ref="ruleForm" :model="form" :rules="rules" :wrapper-col="wrapperCol">
              <a-form-item ref="username" name="username">
                <a-input v-model:value="form.username" class="inpit m-t-30" />
              </a-form-item>
              <a-form-item ref="password" name="password">
                <a-input v-model:value="form.password" class="inpit m-t-20" />
              </a-form-item>
            </a-form>
          </div>
          <div class="forget">忘记密码</div>
          <a-button type="primary" class="button">登录</a-button>
          <div class="paddings"></div>
        </div>
        <div v-if="flag===false">
         <div class="d-f a-i-c f-d-c w-100">
            <a-form ref="ruleForms" :model="forms" :rules="ruless" :wrapper-col="wrapperCol">
              <a-form-item ref="telephone" name="telephone">
                <a-input v-model:value="forms.telephone" class="inpit m-t-30" />
              </a-form-item>
              <div class="d-f">
              <a-form-item ref="verification" name="verification">
                <a-input v-model:value="forms.verification" class="inpit m-t-20" />
              </a-form-item>
              <div>发送验证码</div>
              </div>
              <a-form-item ref="name" name="name">
                <a-input v-model:value="forms.name" class="inpit m-t-20" />
              </a-form-item>
               <a-form-item ref="cypher" name="cypher">
                <a-input v-model:value="forms.cypher" class="inpit m-t-20" />
              </a-form-item>
               <a-form-item ref="confirm" name="confirm">
                <a-input v-model:value="forms.confirm" class="inpit m-t-20" />
              </a-form-item>
            </a-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Form } from "ant-design-vue";
import { defineComponent, reactive, toRefs } from "vue";
//登录
interface FormIitem {
  username: string;
  password: string;
}
//注册
interface FormItems {
  telephone: string;
  verification: string;
  name: string;
  cypher: string;
  confirm: string;
}
//登录
interface RuleItem {
  message: string;
  trigger: string;
  required?: boolean;
  min?: number;
  max?: number;
  type?: string;
}
//登录
interface RuleItem {
  message: string;
  trigger: string;
  required?: boolean;
  min?: number;
  max?: number;
  type?: string;
}
//登录
interface Rules {
  username: RuleItem[];
  password: RuleItem[];
}
//注册
interface Ruless {
  telephone: RuleItem[];
  verification: RuleItem[];
   name: RuleItem[];
  cypher: RuleItem[];
   confirm: RuleItem[];
}
interface Data {
  flag: boolean;
  form: FormIitem;
  rules: Rules;
  forms: FormItems;
  ruless: Ruless;
}
export default defineComponent({
  name: "",

  components: {},
  setup() {
    const data: Data = reactive<Data>({
      flag: true,
      form: {
        username: "",
        password: "",
      },
       forms: {
         telephone: "",
  verification: "",
  name: "",
  cypher: "",
  confirm: "",
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 3, max: 8, message: "请输入正确格式", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 8, message: "长度在 6 到 8 位", trigger: "blur" },
        ],
         telephone: [
          { required: true, message: "请输入密码", trigger: "blur" },
        ],
        verification: [
          { required: true, message: "请输入验证码", trigger: "blur" },
        ],
        name: [
          { required: true, message: "昵称不能为空", trigger: "blur" },
          { min: 3, max: 8, message: "请输入正确格式", trigger: "blur" },
        ],
        cypher: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 8, message: "长度在 6 到 8 位", trigger: "blur" },
        ],
         confirm: [
          { required: true, message: "确认密码不能为空", trigger: "blur" },
          { min: 6, max: 8, message: "长度在 6 到 8 位", trigger: "blur" },
        ],
      },
    });
    const clickLogins = (): void => {
      data.flag = true;
    };
    const clickRegister = (): void => {
      data.flag = false;
    };
    return {
      ...toRefs(data),
      clickLogins,
      clickRegister,
    };
  },
});
</script>
<style lang="scss">
.image {
  width: 100%;
  height: 500px;
  background: url(http://157.122.54.189:9095/assets/images/th03.jfif) center 0;
}
.login {
  width: 100%;
}
.logins {
  background: white;
  width: 400px;
  position: relative;
}
.logins1 {
  background: rgb(230, 228, 228);
  width: 200px;
  height: 50px;
  font-size: 18px;
}
.actives {
  background: white;
  color: orange;
  font-weight: 700;
}
.inpit {
  width: 300px;
}
.forget {
  color: rgb(5, 147, 255);
  position: absolute;
  right: 20px;
}
.button{
  margin-top: 40px;
  width: 300px;
  height: 40px;
  margin-left: 50px;
}
.paddings{
  padding: 20px 0px;
}
</style>