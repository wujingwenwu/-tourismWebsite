<template>
 <div>
12122
 </div>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
import {defineComponent, reactive, toRefs,onMounted} from 'vue'
interface Data {
    name: string;
    id: string;
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
    id: ""
});
const route=useRoute()
onMounted(()=>{
 if(route.query.id){
    data.id=route.query.id!as string
  }
  console.log(data.id);
  api.getArticles().then((res)=>{
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