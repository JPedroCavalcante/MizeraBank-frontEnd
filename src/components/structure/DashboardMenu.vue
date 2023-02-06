<template>
  <aside class="h-screen w-56 bg-green-800 flex flex-col">
    
    <img class="self-center" src="../../assets/simbolo_banco.png" width="100" height="100"/>
    <h1 class="p-3 mb-2 rounded-md">
      <b>Olá! Seja bem vindo ao portal administrativo Mz Bank</b>
    </h1>

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