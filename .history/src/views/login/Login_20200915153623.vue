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
                <a-input v-model:value="form.username" placeholder="请输入用户名" class="inpit m-t-30" />
              </a-form-item>
              <a-form-item ref="password" name="password">
                <a-input-password
                  v-model:value="form.password"
                  placeholder="请输入密码"
                  class="inpit m-t-20"
                />
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
              <a-form-item ref="username" name="username">
                <a-input v-model:value="forms.username" placeholder="请输入手机号" class="inpit m-t-30" />
              </a-form-item>
              <div class="d-f">
                <a-form-item ref="verification" name="verification">
                  <a-input
                    v-model:value="forms.verification"
                    placeholder="请输入验证码"
                    class="inpits m-t-20"
                  />
                </a-form-item>
                <div class="code d-f j-c-c a-i-c" @click="clickCode">{{time}}</div>
              </div>
              <a-form-item ref="name" name="name">
                <a-input v-model:value="forms.name" placeholder="请输入昵称" class="inpit m-t-20" />
              </a-form-item>
              <a-form-item ref="cypher" name="cypher">
                <a-input-password
                  v-model:value="forms.cypher"
                  placeholder="请输入密码"
                  class="inpit m-t-20"
                />
              </a-form-item>
              <a-form-item ref="confirm" name="confirm">
                <a-input-password
                  v-model:value="forms.confirm"
                  placeholder="请再次确认密码"
                  class="inpit m-t-20"
                />
              </a-form-item>
               <a-button type="primary" class="buttons" @click="clickRegisters">注册</a-button>
            </a-form>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {Form} from "ant-design-vue/types/form/form"
import api from "@/components/http/api";
import { Ress } from "@/types/index";
import { defineComponent, reactive, ref, toRefs } from "vue";

//登录
interface FormIitem {
  username: string;
  password: string;
}
//注册
interface FormItems {
  username: string;
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
interface Rules {
  username: RuleItem[];
  password: RuleItem[];
}
//注册
interface RuleItems {
  message?: string;
  trigger: string;
  required?: boolean;
  min?: number;
  max?: number;
  type?: string;
  pattern?: any;
  validator?: any;
}
//注册
interface Ruless {
  username: RuleItems[];
  verification: RuleItems[];
  name: RuleItems[];
  cypher: RuleItems[];
  confirm: RuleItems[];
}
interface Data {
  flag: boolean;
  form: FormIitem;
  rules: Rules;
  forms: FormItems;
  ruless: Ruless;
  flags: boolean;
  time: string;
  codes: string;
 
}
export default defineComponent({
  name: "",
  components: {},
  setup() {
    const forms=ref<Form | null>(null) 
    const data: Data = reactive<Data>({
       flags: true,
      flag: true,
      time: '发送验证码',
      codes: '',
      form: {
        username: "",
        password: "",
      },
      forms: {
        username: "",
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
      },

      ruless: {
        username: [
          { required: true, message: "手机号不能为空", trigger: "blur" },
          {
            message: "手机号格式不对",
            trigger: "blur",
            pattern: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/,
          },
        ],
        verification: [
         
          { required: true,  validator: () => {
              if (data.forms.verification === "") {
                return Promise.reject("验证码不能为空");
              } else if (data.forms.verification !== data.codes) {
                return Promise.reject("验证码错误");
              } else {
                return Promise.resolve();
              }
            }, trigger: "blur" },
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
          {
            required: true,
            validator: () => {
              if (data.forms.confirm === "") {
                return Promise.reject("确认密码不能为空");
              } else if (data.forms.confirm !== data.forms.cypher) {
                return Promise.reject("两次密码不一致");
              } else {
                return Promise.resolve();
              }
            },
            trigger: "blur",
          },
        ],
      },
    });

    const clickLogins = (): void => {
      data.flag = true;
    };
    const clickRegister = (): void => {
      data.flag = false;
    };
    const clickCode=(): void=>{
      if (data.flags) {
        data.flags = false;
        let langtime = 60;
        
        const a = setInterval(() => {
          if (langtime == 0) {
            data.flags = true;
            data.time = "发送验证码";
            clearInterval(a);
          } else {
            // console.log(data.forms.telephone);
            if(data.forms.username !==''){
            api.postCaptchas({tel:data.forms.username}).then((res: Ress)=>{
              data.codes=res.code!
              // console.log(data.codes);
              // console.log(res);
            }).catch((err)=>{
              // console.log(err);
            })
          }
            langtime--;
            data.time = `倒计时${langtime}秒`;
          }
        }, 1000);
      } else {
        console.log("不能点了");
      }
    };
    const clickRegisters=(): void=>{
     forms.value!.validate().then(()=>{
       api.postRegister({username: data.forms.username,nickname: data.forms.name,captcha: data.forms.verification,password: data.forms.confirm}).then((res)=>{
       console.log(res);
     }).catch((err)=>{
       console.log(err);
     })
      }).catch((err)=>{
     console.log(err);
      }) 
    };
    return {
      ...toRefs(data),
      clickLogins,
      clickRegister,
      clickCode,
      clickRegisters,
      forms,
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
.button {
  margin-top: 40px;
  width: 300px;
  height: 40px;
  margin-left: 50px;
}
.buttons {
  margin-top: 40px;
  width: 300px;
  height: 40px;
 
}
.paddings {
  padding: 20px 0px;
}
.inpits{
  width: 200px;
}
.code{
  width: 100px;
  height: 34px;
  background: rgb(245,247,250);
  border-radius: 5px;
  color: #999;
  margin-top: 2px;
  cursor: pointer;
}
</style>