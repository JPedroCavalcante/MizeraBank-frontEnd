<template>
  <div class="mb-6">
    <input
        :placeholder="placeHolder"
        class="form-control block w-full px-4 py-2 text-xl font-normal
                     text-gray-700 bg-white bg-clip-padding border border-solid
                     border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                     focus:bg-white focus:border-green-300 focus:outline-none"
        :type="inputType"
        v-model="inputComputed"
    />
    <span v-if="error" class="text-red-500">
    {{ error }}
  </span>
  </div>
</template>

<script setup>

import {computed, defineEmits, defineProps, toRefs} from 'vue';

const emit = defineEmits(['update:input']);

const props = defineProps({
  input: String,
  placeHolder: {type: String, default: ''},
  inputType: String,
  error: String
});

const {input, placeHolder, inputType, error} = toRefs(props);

const inputComputed = computed({
  get: () => input.value,
  set: (val) => emit('update:input', val),
});


</script>

<style scoped>

</style>