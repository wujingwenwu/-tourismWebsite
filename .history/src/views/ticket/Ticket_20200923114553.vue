<template>
  <div class="w-100 d-f f-d-c a-i-c">
    <div class="d-f">
      <div>
        <div class="d-f">
          <img src="../../img/t.png" alt class="img" />
          <div class="m-l-10 orange">国内机票</div>
        </div>
        <div class="ticket p-r">
          <div class="p-a ticket1">
            <div class="barter d-f j-c-c a-i-c" @click="barter">换</div>
          </div>

          <div class="d-f">
            <div class="way d-f j-c-c a-i-c">
              <div class="tlineds d-f j-c-c a-i-c">
                <SwapRightOutlined />
              </div>
              <div>单程</div>
            </div>
            <div class="ways d-f j-c-c a-i-c" @click="returns">
              <div class="tlineds d-f j-c-c a-i-c">
                <SwapOutlined />
              </div>
              <div>往返</div>
            </div>
          </div>
          <div class="d-f m-t-10">
            <div class="m-l-10 m-t-5">出发城市</div>
            <div class="input m-l-10">
              <a-input v-model:value="valuee" placeholder="请搜索出发城市" allow-clear />
            </div>
          </div>
          <div class="d-f m-t-10">
            <div class="m-l-10 m-t-5">到达城市</div>
            <div class="input m-l-10">
              <a-input v-model:value="value1" placeholder="请搜索到达城市" allow-clear />
            </div>
          </div>
          <div class="d-f m-t-10">
            <div class="m-l-10 m-t-5">出发时间</div>
            <div class="input m-l-10">
              <a-date-picker
                v-model:value="value2"
                @change="onChange"
                placeholder="请选择日期"
                :allowClear="allowClear"
                :disabled-date="disabledDate"
              />
            </div>
          </div>
          <div class="button">
            <a-button type="primary" class="button" block @click="search">
              搜索
              <template v-slot:icon>
                <SearchOutlined />
              </template>
            </a-button>
          </div>
        </div>
      </div>
      <img
        src="http://157.122.54.189:9093/images/pic_sale.jpeg"
        alt
        width="620"
        height="350"
        class="img1"
      />
    </div>
    <div class="d-f ensure j-c-s-a a-i-c">
      <div class="d-f">
        <img src="../../img/1.png" alt />
        <div class="m-t-5">100%航协认证</div>
      </div>
      <div class="show"></div>
      <div class="d-f">
        <img src="../../img/2.png" alt />
        <div class="m-t-10">出行保证</div>
      </div>
      <div class="show"></div>
      <div class="d-f">
        <img src="../../img/3.png" alt />
        <div class="m-t-10">7x24小时服务</div>
      </div>
    </div>
    <div class="d-f special1">
      <img src="../../img/4.png" alt />
      <div class="special">特价机票</div>
    </div>
    <div class="passenger m-t-20 d-f j-c-c a-i-c">
      <div v-for="(item,index) in specialTicket" :key="index" class="c-p">
        <div v-if="index===0">
          <img :src="item.cover" alt="图片加载失败" width="225" height="150" @click="clickLogo(item)" />
          <div class="destCity">
            <div class="d-f departCity m-l-10">
              <div class="color">{{item.departCity}}---</div>
              <div class="color">{{item.destCity}}</div>
              <div class="color m-l-20">￥{{item.price}}</div>
            </div>
          </div>
        </div>
      </div>
      <div v-for="(item,index) in specialTicket" :key="index" class="m-l-5 c-p">
        <div v-if="index===0">
          <img :src="item.cover" alt="图片加载失败" width="225" height="150" @click="clickLogo(item)" />
          <div class="destCity">
            <div class="d-f departCity m-l-10">
              <div class="color">{{item.departCity}}---</div>
              <div class="color">{{item.destCity}}</div>
              <div class="color m-l-20">￥{{item.price}}</div>
            </div>
          </div>
        </div>
      </div>
      <div v-for="(item,index) in specialTicket" :key="index" class="m-l-5 c-p">
        <div v-if="index===0">
          <img :src="item.cover" alt="图片加载失败" width="225" height="150" @click="clickLogo(item)" />
          <div class="destCity">
            <div class="d-f departCity m-l-10">
              <div class="color">{{item.departCity}}---</div>
              <div class="color">{{item.destCity}}</div>
              <div class="color m-l-20">￥{{item.price}}</div>
            </div>
          </div>
        </div>
      </div>
      <div v-for="(item,index) in specialTicket" :key="index" class="c-p">
        <div v-if="index===0">
          <img :src="item.cover" alt="图片加载失败" width="225" height="150" @click="clickLogo(item)" />
          <div class="destCity">
            <div class="d-f departCity m-l-10">
              <div class="color m-l-10">{{item.departCity}}---</div>
              <div class="color">{{item.destCity}}</div>
              <div class="color m-l-20">￥{{item.price}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import moment from 'moment';
import { defineComponent, reactive, toRefs, onMounted } from "vue";
import { Modal } from "ant-design-vue";
import { useRouter } from "vue-router";
import api from "@/components/http/api";
import dayjs from "dayjs";
interface Item {
  value: string;
  value1: string;
  value2: string;
}
interface Data {
  name: string;
  value2: string;
  valuee: string;
  value1: string;
  specialTicket: any[];
  allowClear: boolean;
  obj: any;
  arr: Item[];
  obj1: any;
  arr1: Item[];
}
export default defineComponent({
  name: "",
  components: {},
  setup() {
    const data: Data = reactive<Data>({
      name: "",
      value2: "",
      value1: "",
      valuee: "",
      specialTicket: [],
      allowClear: false,
      obj: {},
      arr: [],
      arr1: [],
      obj1: {},
    });
    const router = useRouter();
    onMounted(() => {
      api
        .getSale()
        .then((res: any) => {
          data.specialTicket = res.data;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    });
    const onChange = (value: string): void => {
      //    console.log(dayjs(value).format('YYYY-MM-DD'));
      data.value2 = dayjs(value).format("YYYY-MM-DD");
    };
    const search = (): void => {
      console.log(data.value2);
      router.push({
        path: "/screener",
        query: { value: data.valuee, value1: data.value1, value2: data.value2 },
      });

    //  const obj={
    //      value:data.valuee,
    //      value1: data.value1,
    //      value2: data.value2
    //  } 
    //  data.arr.push(obj)
    //  localStorage.setItem("arr",JSON.stringify(data.arr))
    //   data.arr = JSON.parse(localStorage.getItem("arr")! as any);
      if (localStorage.getItem("arr")) {
       const arr=JSON.parse(localStorage.getItem("arr")!)
       const ass= arr.map((item: any)=>{
        return (
             item.value == data.valuee&&
        item.value1 == data.value1&&
        item.value2 == data.value2
        );

       });
       if(ass.length===0){
             const obj={
         value:data.valuee,
         value1: data.value1,
         value2: data.value2
     }
        arr.push(obj)
       }
      } else {
          const arr=[]
      const obj={
         value:data.valuee,
         value1: data.value1,
         value2: data.value2
     } 
         arr.push(obj);
        localStorage.setItem("arr", JSON.stringify(arr));
      }
    };
    const clickLogo = (item: any) => {
      console.log(item);
      router.push({
        path: "/screener",
        query: {
          value: item.departCity,
          value1: item.destCity,
          value2: item.departDate,
        },
      });
      const obj={
         value: item.departCity,
         value1: item.destCity,
         value2: item.departDate
     } 
     data.arr.push(obj)
     localStorage.setItem("arr",JSON.stringify(data.arr))
    //   data.obj.value = item.departCity;
    //   data.obj.value1 = item.destCity;
    //   data.obj.value2 = item.departDate;
    //   data.arr.push(data.obj);
    //   localStorage.setItem("arr", JSON.stringify(data.arr));
    };
    const returns = (): void => {
      Modal.warning({
        title: "提示",
        content: "目前暂不支持往返，请使用单程选票！",
      });
    };
    const barter = (): void => {
      console.log(data.valuee);
      const city = data.valuee;
      const city1 = data.value1;
      data.value1 = city;
      data.valuee = city1;
    };
    const disabledDate=(current: any)=>{
            // Can not select days before today and today
      return current && current <= moment().subtract('day', 1); 
    }
    //   disabledDate(current) {
    //   // Can not select days before today and today
    //   return current && current < moment().endOf('day');
    // },
    return {
      ...toRefs(data),
      returns,
      barter,
      search,
      onChange,
      clickLogo,
      disabledDate,
    };
  },
});
</script>

<style scoped lang='scss'>
.img {
  width: 27px;
  height: 27px;
}
.orange {
  color: orange;
  font-size: 20px;
}
.ticket {
  width: 360px;
  height: 350px;
  border: 1px solid #cccccc;
  margin-top: 20px;
}
.way {
  width: 180px;
  height: 50px;
  color: black;
}
.ways {
  width: 181px;
  height: 50px;
  background: #e6e3e3;
  color: black;
}
.tlineds {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid black;
}
.input {
  width: 215px;
}
.ant-input {
  width: 215px;
  z-index: 9999;
}
.button {
  width: 215px;
  margin-left: 38px;
  height: 40px;
}
.ticket1 {
  width: 40px;
  height: 67px;
  border: 2px solid #cccccc;
  border-left: none;
  right: 27px;
  top: 72px;
}
.barter {
  color: white;
  background: #cccccc;
  padding: 2px 10px;
  margin-left: 10px;
  position: absolute;
  margin-left: 20px;
  top: 15px;
}
.img1 {
  margin-top: 50px;
  margin-left: 20px;
}
.ensure {
  width: 1000px;
  height: 58px;
  background: rgb(245, 245, 245);
  margin-top: 20px;
}
.show {
  width: 1px;
  height: 30px;
  background: rgb(173, 171, 171);
}
.special {
  color: rgb(67, 149, 255);
  font-size: 20px;
}
.special1 {
  width: 1000px;
}
.passenger {
  width: 1000px;
  padding: 20px 0px;
  border: 1px solid #cccccc;
  flex-wrap: wrap;
  position: relative;
}
.departCity {
  position: absolute;
  bottom: 30px;
  margin-left: 30px;
}
.color {
  font-size: 18px;
  color: black;
}
.destCity {
  width: 230px;
}
</style>