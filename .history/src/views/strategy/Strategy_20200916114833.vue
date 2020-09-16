<template>
  <div class="d-f j-c-c w-100 padings">
    <div>
      <div class="strategy">
        <div v-for="(item,index) in city" :key="index">
        <div>
          <div class="d-f strategy1 a-i-c">
            <div class="m-l-20">{{item.type}}</div>
            <div class="box"></div>
            <div class="box1"></div>
          </div>
          <div class="city">
          <div v-for="(item1,index1) in item.children" :key="index1">
          <div class="d-f">
          <div>{{index1+1}}</div>
          <div>{{item1.city}}</div>
          <div>{{item1.desc}}</div>
          </div>
          </div>
          
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from "vue";
import api from "@/components/http/api";
import { Datas, DatasItem, ChildrenItem } from "@/types/index";
interface Data {
  name: string;
  city: DatasItem[];
}
export default defineComponent({
  name: "",

  components: {},
  setup() {
    const data: Data = reactive<Data>({
      name: "",
      city: [],
    });
    onMounted(() => {
      api
        .getPosts()
        .then((res: Datas) => {
          console.log(res);
          data.city = res.data;
          console.log(data.city);
        })
        .catch((err) => {
          console.log(err);
        });
    });
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
.strategy {
  width: 260px;
  height: 170px;
  border: 1px solid #999;
  border-right: none;
}
.padings {
  padding: 20px 0px;
}
.strategy1 {
  height: 40px;
  width: 260px;
}
.box {
  width: 11px;
  height: 11px;
  border-top: 1px solid #999;
  border-right: 1px solid #999;
  transform: rotate(45deg);
  margin-left: 140px;
}
.box1 {
  height: 50px;
  width: 1px;
  background: #999;
  margin-left: 30px;
  margin-top: 8px;
}
.city{
    width: 300px;
    height: 300px;
}
</style>
