<template>
 <div>
12122
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
    article: ArticleItem;
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
    article
});
const route=useRoute()
onMounted(()=>{
 if(route.query.id){
    data.id=route.query.id! as any
  }
  console.log(data.id);
  api.getArticles({id: data.id}).then((res)=>{
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

</style>