<template>
  <div class="flex">
    <DashboardMenu/>
    <Login class="ml-72" v-if="logged"/>
  </div>
</template>

<script>
import DashboardMenu from "../components/structure/DashboardMenu.vue";
import Login from "./LoginView.vue";
import { ref } from 'vue';

export default {
  name: "IndexView",
  components: {Login, DashboardMenu},

  setup() {
    const logged = ref(false);

    const user = JSON.parse(window.localStorage.getItem('user'));

    if (user) {
      logged.value = true;
    }

    return {
      logged
    }
  }

}

</script>

<style scoped>

</style>