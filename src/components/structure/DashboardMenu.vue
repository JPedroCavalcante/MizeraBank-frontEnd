<template>
  <aside class="h-screen w-56 bg-green-800 flex flex-col">

    <RouterLinkButton btn-text="Clientes"/>
    <RouterLinkButton btn-text="Contas"/>
    <RouterLinkButton btn-text="Agências"/>
    <RouterLinkButton btn-text="Funcionários"/>
    <RouterLinkButton btn-text="Cargos"/>
  </aside>
</template>

<script>
import RouterLinkButton from "../global/RouterLinkButton.vue";

export default {
  name: "DashboardMenu",
  components: {RouterLinkButton},
}
</script>

<style scoped>

</style>