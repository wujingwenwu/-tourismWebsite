<template>
 <div>
<div class="d-f">
<!--左边-->
<div>
<div class="d-f">
<div class=" weight f-s-16">旅游攻略</div>
<div >/攻略详情</div>
</div>

</div>
<!--右边-->
</div>
 </div>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
import api from "@/components/http/api";
import {defineComponent, reactive, toRefs,onMounted} from 'vue';
import { Article, ArticleItem } from "@/types/index";
interface Data {
    name: string;
    id: number;
    article: ArticleItem[];
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(){
const data: Data = reactive<Data>({
    name:'',
    id: 0,
    article: [],
});
const route=useRoute()
onMounted(()=>{
 if(route.query.id){
    data.id=route.query.id! as any
  }
  console.log(data.id);
  api.getArticles({id: data.id}).then((res: Article)=>{
      console.log(res);
  }).catch((err)=>{
      console.log(err);
  })
});
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>
.weight{
    font-weight: 700;
}
</style>