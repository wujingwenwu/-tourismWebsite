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
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Form } from "ant-design-vue";
import { defineComponent, reactive, toRefs } from "vue";
interface FormIitem {
  username: string;
  password: string;
}
interface RuleItem {
  message: string;
  trigger: string;
  required?: boolean;
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
  form: FormIitem;
  rules: Rules;
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
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 8, message: "请输入正确格式", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
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
  width: 100px;
}
</style>