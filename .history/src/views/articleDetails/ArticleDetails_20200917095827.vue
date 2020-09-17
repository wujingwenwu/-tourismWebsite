<template>
 <div>
<div class="d-f">
<!--左边-->
<div>
<div class="d-f">
<div class=" weight f-s-16 c-p" @click="articles">旅游攻略</div>
<div class="f-s-16 c-p m-l-5">/攻略详情</div>
</div>
<div class="p-r item1">
<div v-for="(item,index) in article" :key="index">
<div class="title m-t-10">{{item.title}}</div>
<div class="m-t-10 show"></div>
<div class="d-f p-a item">
<div>攻略:</div>
<div class="m-l-10">{{item.account.createdAt}}</div>
<div class="m-l-10">阅读:</div>
<div>{{item.watch}}</div>
</div>
</div>
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
import dayjs from 'dayjs'
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
      res.data.map(item=>{
          item.account.createdAt=dayjs(item.account.createdAt).format('YYYY-MM-DD HH-mm-ss')
      })
      data.article=res.data

  }).catch((err)=>{
      console.log(err);
  })
});
const articles=(): void=>{
   router.push('/strategy')
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
.title{
    font-weight: 700;
    color: black;
    font-size: 28px;
    width: 700px;
}
.show{
    width: 700px;
    height: 1px;
    background: #9999;
}
.item{
    color: blanchedalmond;
    right: 47px;
}
.item1{
    width: 700px;
}
</style>