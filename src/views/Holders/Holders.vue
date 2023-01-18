<template>
  <h1>Clientes</h1>
  <ul>
    <li v-for="holder in holders" :key="holder.identifier">
      {{ holder.name }}
    </li>
  </ul>
</template>

<script>
import { onMounted, ref } from 'vue';
import HoldersService from '../../services/holdersService';

export default {
  name: 'Holders',
  setup() {
    const holders = ref([])
    onMounted(() => {
      HoldersService.getAll()
          .then(response => {
            holders.value = response.data.data
          })
          .catch(error => {
            console.log(error)
          })
    });
    return {
      holders
    }
  }

}
</script>

<style scoped>

</style>