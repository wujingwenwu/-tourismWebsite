<template>
 <div>
12122
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs,onMounted} from 'vue'
interface Data {
    name: string;
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
});
onMounted(()=>{

});
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>