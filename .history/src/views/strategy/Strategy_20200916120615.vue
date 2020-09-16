<template>
  <div class="d-f j-c-c w-100 padings">
    <div>
      <div class="strategy">
        <div v-for="(item,index) in city" :key="index">
        <div class="city1">
          <div class="d-f strategy1 a-i-c">
            <div class="m-l-20 type">{{item.type}}</div>
            <div class="box"></div>
            <div class="box1"></div>
          </div>
          <div class="city">
          <div class="boxs"></div>
          <div v-for="(item1,index1) in item.children" :key="index1">
          <div class="d-f">
          <div class="font">{{index1+1}}</div>
          <div class="font1">{{item1.city}}</div>
          <div class="m-l-10 m-t-5">{{item1.desc}}</div>
          </div>
          </div>
          
          </div>
          </div>
        </div>
        
      </div>
      <div class="s"></div>
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
    width: 350px;
    height: 200px;
    position: absolute;
    margin-left: 258px;
    border: 1px solid #999;
    top: 70px;
    display: none;
    border-left: none;
}
.city1:hover .city{
 display: block;
 cursor: pointer;
 
}
.city1:hover .type {
color: orange;
 
}
.city1:hover .box{
border-top: 1px solid orange;
  border-right: 1px solid orange;
}
.city1:hover .box1{
background: #ffffff;
}
.font{
    font-size: 22px;
    color: orange;
    margin-left: 10px;
}
.font1{
  font-size: 18px;
    color: orange;
    margin-left: 10px;  
}
.boxs{
    width: 1px;
    height: 30px;
    background: #999;
   position: absolute;
   top: 170px;
}
.s{
    height: 400px;
}
</style>
