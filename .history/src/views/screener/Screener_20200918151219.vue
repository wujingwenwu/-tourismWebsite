<template>
 <div>

 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue';
import { useRoute} from "vue-route"
interface Data {
   name: string;
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){

const data: Data = reactive<Data>({
   name: '',
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>