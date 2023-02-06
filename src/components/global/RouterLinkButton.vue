<template>
  <router-link
      class="
      box-content
      p-3
      rounded-md
      w-auto
      text-center
      m-2
      bg-green-400
      text-black
      hover:text-white

      "
      :to="url">
    <b>{{btnText}}</b>
  </router-link>
</template>

<script setup>
import {defineProps, toRefs} from "vue";

const props = defineProps({
  btnText: String,
  url: {type: String, default: ''},
  color: String,
});

const {btnText, url, color} = toRefs(props);

</script>

<style scoped>

</style>