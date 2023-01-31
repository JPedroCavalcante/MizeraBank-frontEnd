<template>
  <!--  <ModalHolderCreate class="z-10" v-if="showModalCreate" @close="closeModal()"></ModalHolderCreate>-->
  <section class="m-1">
    <h1 class="text-black text-2xl leading-tight font-extrabold">Clientes</h1>
    <div v-if="loading">
      <LoadingIcon></LoadingIcon>
    </div>
    <div class="grid grid-cols-3 gap-2">
      <div class="block justify-center" v-for="holder in holders" :key="holder.identifier">
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">{{ holder.name }}</h5>
          <p class="text-gray-500 text-base mb-4">
            CPF: {{ holder.identifier }} <br/>
            Phone: {{ holder.phone }} <br/>

          </p>
          <div class="flex justify-end">
            <button type="button"
                    class="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs
                  leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg
                  focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800
                  active:shadow-lg transition duration-150 ease-in-out">
              Exibir
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {onMounted, ref} from 'vue';
import HoldersService from '../services/holdersService';
import LoadingIcon from "../components/icons/LoadingIcon.vue";
import ModalHolderCreate from "../components/holder/ModalHolderCreate.vue";

export default {
  name: 'Holders',
  components: {ModalHolderCreate, LoadingIcon},
  setup() {
    const holders = ref([]);

    const loading = ref(false);

    const showModalCreate = ref(true);

    onMounted(async () => {
      loading.value = true;

      HoldersService.getAll()
          .then(response => {
            holders.value = response.data.data
          })
          .catch(error => {
            console.log(error)
          })
          .finally(() => loading.value = false);

    });

    function closeModal() {
      this.showModalCreate = false;
    }

    return {
      holders,
      loading,
      showModalCreate,
      closeModal
    }
  }

}
</script>

<style scoped>

</style>