<template>
 <div class="d-f w-100 j-c-c">
<div class="screener">
<div class="d-f w-100 m-t-10">
<div>单程:</div>
<div class="m-l-10">{{value}}---</div>
<div>{{value1}}</div>
<div class="m-l-10">/{{value2}}</div>
<div class="m-l-20 d-f">
<div class="m-l-20">
 <a-select
      v-model:value="values"
      style="width: 120px"
      @focus="focus" placeholder="起飞机场"
      ref="select" 
      @change="handleChange"
    >
    <a-select-option :value="item" v-for="(item,index) in airport" :key="index">
        {{item}}
      </a-select-option>
    </a-select>
</div>
    <div class="m-l-20">
     <a-select
      v-model:value="values"
      style="width: 120px" 
      @focus="focus" placeholder="起飞时间"
      ref="select"
      @change="handleChange" 
    ></a-select>
    </div>
   <div class="m-l-20">
     <a-select
      v-model:value="values"
      style="width: 120px"
      @focus="focus" placeholder="机型"
      ref="select"
      @change="handleChange"
    ></a-select>
   </div>
</div>
</div>
<div class="w-100 a-i-c j-c-s-a d-f information m-t-10">
<div>航班信息</div>
<div>起飞时间</div>
<div>到达时间</div>
<div>价格</div>
</div>
<div>
<div v-for="(item,index) in flights" :key="index">
<div class="dynamic d-f a-i-c j-c-s-a">
<div>{{item.airline_name}}{{item.flight_no}}</div>
<div>
<div class="time">{{item.dep_time}}</div>
<div class="time1">{{item.org_airport_name}}{{item.org_airport_quay}}</div>
</div>
<div>
<div>{{item.a}}小时{{item.b}}分</div>
<div class="times"></div>
</div>
<div>
<div class="time">{{item.dep_time}}</div>
<div class="time1">{{item.dst_airport_name}}{{item.dst_airport_quay}}</div>
</div>
</div>
</div>
</div>
</div>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext,onMounted} from 'vue';
import { useRoute} from "vue-router";
import dayjs from 'dayjs';
import api from '@/components/http/api'
interface Data {
   name: string;
   value: string; 
   value1: string; 
   value2: string;
   airport: any[];
   company: any[];
   flightTimes: any[];
   total: number;
   flights: any[];
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){

const data: Data = reactive<Data>({
   name: '',
   value: '',
   value1: '',
   value2: '',
   airport: [],
   company: [],
   flightTimes: [],
   total: 0,
   flights: [],
});
const route=useRoute()
onMounted(()=>{
 data.value=route.query.value! as any
 data.value1=route.query.value1! as any
 data.value2=route.query.value2! as any
 //获取机票
 api.getAirs({departCity: data.value,destCity: data.value1,departDate: data.value2}).then((res: any)=>{
   data.airport=res.options.airport
   data.company=res.options.company
   data.flightTimes=res.options.flightTimes
   data.total=res.total
   res.flights.map((item: any)=>{
     const strr = item.dep_datetime
      // const strrs =  strr.replace(/-/g,'/'); 
     const a = new Date(item.dep_datetime).getTime(); 

     const str = item.arr_datetime
      // const strs =  str.replace(/-/g,'/'); 
     const b = new Date(item.arr_datetime).getTime(); 
       item. timeser=(b-a)/1000/60/60
       item.a=parseInt(item.timeser)
       item.b=((b-a)/1000/60)-(item.a*60)
   })
   data.flights=res.flights

   console.log(res);
 }).catch((err)=>{
   console.log(err);
 })
 console.log(data.value2);
});
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>
.screener{
    width: 750px;
}
.information{
  height: 38px;
  background: rgb(246,246,246);
}
.ant-select-enabled {
 padding: 0px 20px;
}
.dynamic{
  width: 748px;
  height: 100px;
  border: 1px solid #cccccc;
  margin-top: 20px;
}
.time{
  font-size: 24px;
  color: black;
}
.time1{
  font-size: 12px;
}
.times{
  width: 65px;
  height: 1px;
  background: #cccccc;
  margin-top: 5px;
}
</style>