<template>
  <div class="home">
    <a-carousel autoplay="true">
      <div v-for="item in scenics" :key="item.url">
        <img :src="`http://157.122.54.189:9095${item.url}`" alt class="img" />
      </div>
    </a-carousel>
    <div class="p-a search">
        <div class="d-f">
          <div class="box3">攻略</div>
          <div class="box3">酒店</div>
          <div class="box3">机票</div>
        </div>
        <a-input-search
          v-model:value="value"
          placeholder="搜索城市"
          style="width: 508px" class="input"
          @search="onSearch"
        />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from "vue";
import api from "@/components/http/api";
import { Res, ResItem } from "@/types/index";

interface Data {
  scenics: ResItem[];
}
export default defineComponent({
  name: "",

  components: {},
  setup() {
    const data: Data = reactive<Data>({
      scenics: [],
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
    return {
      ...toRefs(data),
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
  left: 40%;
  top: 300px;
}
.ant-input{
  width: 508px;
  z-index: 9999;
}
</style>
