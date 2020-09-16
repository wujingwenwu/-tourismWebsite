<template>
 <div>

 </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue'
interface Data {
    name: string
}
 export default defineComponent({
   name: '',

   components: {

   },
setup(){

let data: Data = reactive<Data>({
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
