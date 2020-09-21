<template>
  <div class="d-f w-100 j-c-c">
    <div class="screener">
      <div class="d-f w-100 m-t-10">
        <div>单程:</div>
        <div class="m-l-10">{{value}}---</div>
        <div>{{value1}}</div>
        <div class="m-l-10">/{{value2}}</div>
        <div class="m-l-20 d-f">
          <div>
            <a-select
              v-model:value="values"
              style="width: 120px"
              placeholder="起飞机场"
              ref="select"
            >
              <a-select-option :value="item" v-for="(item,index) in airport" :key="index">{{item}}</a-select-option>
            </a-select>
          </div>
          <div class="m-l-10">
            <a-select
              v-model:value="values1"
              style="width: 120px"
              placeholder="起飞时间"
              ref="select"
            >
              <a-select-option :value="item" v-for="(item,index) in flightTimes" :key="index">
                <div class="d-f">
                <div>{{item.from}}:00 -</div>
                <div> {{item.to}}:00</div>
                </div>
              </a-select-option>
            </a-select>
          </div>
          <div class="m-l-10">
            <a-select
              v-model:value="values2"
              style="width: 120px"
              placeholder="航空公司"
              ref="select"
            >
              <a-select-option :value="item" v-for="(item,index) in company" :key="index">{{item}}</a-select-option>
            </a-select>
          </div>
          <div class="m-l-10">
            <a-select
              v-model:value="values3"
              style="width: 120px"
              placeholder="机型"
              ref="select"
            >
              <a-select-option :value="item" v-for="(item,index) in arr" :key="index">{{item}}</a-select-option>
            </a-select>
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
        <div v-for="(item,index) in flights.slice((current-1)*pageSize, current*pageSize)" :key="index">
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
              <div class="time">{{item.arr_time}}</div>
              <div class="time1">{{item.dst_airport_name}}{{item.dst_airport_quay}}</div>
            </div>
            <div class="d-f">
              <div class="m-t-5 f-c-he">￥</div>
              <div class="orange">{{item.base_price}}</div>
              <div class="m-t-5 f-c-he">起</div>
            </div>
          </div>
        </div>
      </div>
         <div class="m-t-20">
     <a-pagination
            :page-size-options="pageSizeOptions"
            :total="total"
            show-size-changer
            show-quick-jumper
            v-model:current="current"
            v-model:pageSize="pageSize"
            :show-total="total => `共 ${total} 条`"
          >
            <template v-slot:buildOptionText="props">
              <span>{{ props.value }}条/页</span>
            </template>
          </a-pagination>
        </div>
    </div>
    <div class="m-l-20">
    <div class="right"></div>
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
import dayjs from "dayjs";
import api from "@/components/http/api";
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
  arr: string[];
  values2: string;
   values: string;
    values1: string;
     values3: string;
      pageSizeOptions: string[];
  current: number;
  pageSize: number;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      name: "",
      value: "",
      value1: "",
      value2: "",
      airport: [],
      company: [],
      flightTimes: [],
      total: 0,
      flights: [],
      arr: ["大", "中", "小"],
      values: '',
      values1: '',
      values2: '',
      values3: '',
           pageSizeOptions: ["5", "10", "15", "20"],
      pageSize: 5,
      current: 1,
    });
    const route = useRoute();
    onMounted(() => {
      data.value = route.query.value! as any;
      data.value1 = route.query.value1! as any;
      data.value2 = route.query.value2! as any;
      //获取机票
      api
        .getAirs({
          departCity: data.value,
          destCity: data.value1,
          departDate: data.value2,
        })
        .then((res: any) => {
          data.airport = res.options.airport;
          data.company = res.options.company;
          data.flightTimes = res.options.flightTimes;
          data.total = res.total;
          res.flights.map((item: any) => {
            const a = new Date(item.dep_datetime).getTime();
            const b = new Date(item.arr_datetime).getTime();
                item.timeser = (b - a) / 1000 / 60 / 60;
            item.a = parseInt(item.timeser);
            item.b = (b - a) / 1000 / 60 - item.a * 60;
        
          });
          data.flights = res.flights;          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(data.value2);
    });

    return {
      ...toRefs(data),

    };
  },
});
</script>

<style scoped lang='scss'>
.screener {
  width: 750px;
}
.information {
  height: 38px;
  background: rgb(246, 246, 246);
}
.ant-select-enabled {
  padding: 0px 20px;
}
.dynamic {
  width: 748px;
  height: 100px;
  border: 1px solid #cccccc;
  margin-top: 20px;
}
.time {
  font-size: 24px;
  color: black;
}
.time1 {
  font-size: 12px;
}
.times {
  width: 65px;
  height: 1px;
  background: #cccccc;
  margin-top: 5px;
}
.orange {
  font-size: 20px;
  color: orange;
}
.right{
  width: 218px;
  height: 120px;
  border: 1px solid #cccccc;
  margin-top: 10px;

}
</style>