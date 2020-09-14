<template>
  <div class="home">
    <a-carousel autoplay="true">
      <div v-for="item in scenics" :key="item.url">
        <img :src="`http://157.122.54.189:9095${item.url}`" alt class="img" />
      </div>
    </a-carousel>
    <div class="p-a search">
        <div class="d-f">
          <div class="box3" :class="[indexs===0?'active':'']" @click="clickStrategys">攻略</div>
          <div class="box3" :class="[indexs===1?'active':'']" @click="clickHotels">酒店</div>
          <div class="box3" :class="[indexs===2?'active':'']" @click="clickTickets">机票</div>
        </div>
      <div class="input d-f">
      <input type="text" placeholder="搜索城市" class="inputs">
      <SearchOutlined class="tlined" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from "vue";
import api from "@/components/http/api";
import { Res, ResItem } from "@/types/index";

interface Data {
  scenics: ResItem[];
  indexs: number;
}
export default defineComponent({
  name: "",

  components: {},
  setup() {
    const data: Data = reactive<Data>({
      scenics: [],
      indexs: 0,
    });
    onMounted(() => {
      api
        .getScenics()
        .then((res: Res) => {
          console.log(res);
          data.scenics = res.data;
          console.log(data.scenics);
        })
        .catch((err) => {
          console.log(err);
        });
    });
    const clickStrategys=(): void=>{
     data.indexs=0
    };
    const clickHotels=(): void=>{
     data.indexs=1
    };
    const clickTickets=(): void=>{
     data.indexs=2
    };
    return {
      ...toRefs(data),
      clickStrategys,
      clickHotels,
      clickTickets,
    };
  },
});
</script>
<style lang="scss">
/* For demo */
.ant-carousel ::v-deep(.slick-slide) {
  text-align: center;
  height: 600px;
  line-height: 600px;

  overflow: hidden;
}

.ant-carousel ::v-deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel ::v-deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel ::v-deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}

.ant-carousel ::v-deep(.slick-slide h3) {
  color: #fff;
}
.img {
  width: 100%;
  height: 600px;
}
.home {
  width: 100%;
  left: 0;
  right: 0;
}

.box3 {
  // position: absolute;
  font-size: 16px;
  display: block;
  color: #ffffff;
  height: 0;
  width: 90px;
  line-height: 42px;
  border-width: 0px 10px 42px 0px;
  border-style: none solid solid;
  border-color: transparent transparent rgba(0, 0, 0, 0.3);
  background: transparent;
  text-align: center;
}
.search {
  left: 30%;
  top: 300px;
}
.input{
  width: 508px;
  height: 50px;
  background: #fff;
  border-radius: 5px;
  position: relative;
}
.inputs{
  outline: none;
  border: none;
  margin-left: 20px;
}
.tlined{
  font-size: 30px;
  margin-top: 10px;
  position: absolute;
  right: 10px;
}
.active{
  border-color: transparent transparent rgb(238,238,238);

  color: black;
}
</style>
