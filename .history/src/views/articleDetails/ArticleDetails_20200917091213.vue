<template>
 <div>
<div class="d-f">
<!--左边-->
<div>
<div class="d-f">
<div class=" weight f-s-16 c-p" @click="articles">旅游攻略</div>
<div class="f-s-16 c-p">/攻略详情</div>
</div>

</div>
<!--右边-->
</div>
 </div>
</template>

<script lang="ts">
import { useRoute ,useRouter} from 'vue-router';
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
const router=useRouter()
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
const articles=(): void=>{
   router.push('')
};
return {
...toRefs(data),
articles
}
},
 })
</script>

<style scoped lang='scss'>
.weight{
    font-weight: 700;
}
</style>