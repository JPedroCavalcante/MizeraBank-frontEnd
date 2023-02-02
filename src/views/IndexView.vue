<template>
  <DashboardMenu/>
  <Login/>
</template>

<script>
import DashboardMenu from "../components/structure/DashboardMenu.vue";
import Login from "./LoginView.vue";

export default {
  name: "IndexView",
  components: {Login, DashboardMenu}
}
</script>

<style scoped>

</style>