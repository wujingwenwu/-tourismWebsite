<template>
  <div class="w-100 d-f j-c-c">
    <!--左边-->
    <div class="left">
      <div class="f-c-he f-s-18">乘机人</div>
      <div class="m-t-20">乘机人</div>
      <div class="m-t-10">
        <a-input v-model:value="value" placeholder="姓名" allow-clear />
      </div>
      <div>证件类型</div>
      <div class="d-f m-t-10">
        <a-select v-model:value="values" style="width: 120px" ref="select">
          <a-select-option value="身份证">身份证</a-select-option>
          <a-select-option value="护照">护照</a-select-option>
        </a-select>
        <a-input v-model:value="value1" placeholder="证件号码" allow-clear />
      </div>
      <div class="m-t-20">
        <a-button type="primary" :size="size">添加乘机人</a-button>
      </div>
      <div class="show m-t-20"></div>
      <div class="m-t-20 f-s-18 f-c-he">保险</div>
      <div class="accident d-f j-c-c a-i-c">
        <a-checkbox v-model:checked="checked" @change="onChange">航空意外险：￥30/份×1 最高赔付260万</a-checkbox>
      </div>
      <div class="accident d-f j-c-c a-i-c">
        <a-checkbox v-model:checked="checked" @change="onChange">航空延误险：￥30/份×1 最高赔付300元</a-checkbox>
      </div>
      <div class="m-t-20 f-s-18 f-c-he">联系人</div>
      <div class="means">
        <a-form
          ref="ruleForm"
          :model="form"
          :rules="rules"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-form-item ref="username" name="username">
            <div class="d-f m-t-10">
              <div class="means1">姓名</div>
              <a-input v-model:value="form.username" />
            </div>
          </a-form-item>
          <a-form-item ref="phone" name="phone">
            <div class="d-f m-t-10">
              <div class="means1">手机</div>
              <a-input v-model:value="form.phone" />
              <div class="verification d-f j-c-c a-i-c" @click="verifications">发送验证码</div>
            </div>
          </a-form-item>
          <a-form-item ref="verification" name="verification">
            <div class="d-f m-t-10">
              <div class="means1">验证码</div>
              <a-input v-model:value="form.verification" />
            </div>
          </a-form-item>
        </a-form>
        <div class="submit d-f j-c-c a-i-c">提交订单</div>
        <div class="show m-t-20"></div>
        <div class="show1"></div>
      </div>
    </div>
    <!--右边-->
    <div class="right m-t-20 m-l-20">
      <div class="d-f w-100 j-c-s-a m-t-10">
        <div class="f-s-18 f-c-he">{{item.dep_date}}</div>
        <div class="f-s-18 f-c-he">{{item.org_city_name}} - {{item.dst_city_name}}</div>
      </div>
      <div class="d-f w-100 j-c-s-a m-t-10">
        <div>
          <div class="f-s-18 f-c-he">{{item.dep_time}}</div>
          <div class="f-s-12">{{item.org_airport_name}}{{item.org_airport_quay}}</div>
        </div>
        <div class="d-f">
          --
          <div>
            <div class="f-s-12">{{item.a}}小时{{item.b}}分</div>
            <div class="f-s-12">{{item.airline_name}}{{item.flight_no}}</div></div>--
        </div>
        <div>
          <div class="f-s-18 f-c-he">{{item.arr_time}}</div>
          <div class="f-s-12">{{item.dst_airport_name}}{{item.dst_airport_quay}}</div>
        </div>
      </div>
      <div class="shower"></div>
      <div class="d-f w-100 j-c-s-a m-t-10">
      <div>订单总价</div>
      <div>金额</div>
      <div>数量</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  SetupContext,
  onMounted,
} from "vue";
import { useRoute } from "vue-router";
import { message } from "ant-design-vue";
interface FormIitem {
  username: string;
  phone: string;
  verification: string;
}
//登录
interface RuleItem {
  message: string;
  trigger: string;
  required?: boolean;
  min?: number;
  max?: number;
  type?: string;
  pattern?: any;
}

//登录
interface Rules {
  username: RuleItem[];
  phone: RuleItem[];
  verification: RuleItem[];
}
interface Data {
  name: string;
  item: any;
  item1: any;
  values: string;
  checked: boolean;
  form: FormIitem;
  rules: Rules;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      name: "",
      item: {},
      item1: {},
      values: "身份证",
      checked: false,
      form: {
        username: "",
        phone: "",
        verification: "",
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          {
            message: "手机号格式不对",
            trigger: "blur",
            pattern: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/,
          },
        ],
        phone: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 8, message: "长度在 6 到 8 位", trigger: "blur" },
        ],
        verification: [
          { required: true, message: "验证码不能为空", trigger: "blur" },
          { min: 6, max: 8, message: "验证码是6位数", trigger: "blur" },
        ],
      },
    });
    const route = useRoute();
    onMounted(() => {
      data.item = JSON.parse(route.query.item! as any);
      data.item1 = JSON.parse(route.query.item1! as any);
      console.log(data.item);
      console.log(data.item1);
    });
    const verifications = (): void => {
      message.success("验证码发送成功:000000");
    };
    return {
      ...toRefs(data),
      verifications,
    };
  },
});
</script>

<style scoped lang='scss'>
.left {
  width: 700px;
  margin-top: 20px;
}
.show {
  width: 699px;
  border: 1px dashed #cccccc;
}
.accident {
  width: 320px;
  height: 40px;
  border-radius: 3px;
  border: 1px solid #cccccc;
  margin-top: 20px;
}
.means {
  width: 300px;
}
.means1 {
  width: 60px;
}
.verification {
  width: 135px;
  height: 32px;
  background: rgb(245, 247, 250);
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}
.submit {
  width: 250px;
  height: 50px;
  background: rgb(230, 162, 60);
  color: white;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 100px;
}
.show1 {
  padding: 20px 0;
}
.right {
  width: 350px;
  height: 350px;
  border: 1px solid #cccccc; 
}
.shower{
  width: 349px;
  border: 1px dashed #cccccc;
  margin-top: 20px;
}
</style>