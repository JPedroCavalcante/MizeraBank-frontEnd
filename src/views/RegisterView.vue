<template>
  <section id="Register">
    <div class="w-full p-6 flex justify-center items-center">
      <form>
        <div class="mb-6 flex justify-between items-center">
          <h1 class=" text-lg text-black font-bold">
            Cadastro
          </h1>
          <p class="text-md  text-gray-800">
            Já possui uma conta?
            <router-link to="Login" class="text-blue-600 no-underline hover:underline"> Logar</router-link>
          </p>
        </div>
        <TextInput placeHolder="Nome"
                   v-model:input="name"
                   inputType="text"/>

        <TextInput placeHolder="N° de documento"
                   v-model:input="identifier"
                   inputType="text"/>

        <TextInput placeHolder="E-mail"
                   v-model:input="email"
                   inputType="text"/>

        <TextInput placeHolder="Senha"
                   v-model:input="password"
                   inputType="text"/>

        <TextInput placeHolder="Confirmar Senha"
                   v-model:input="confirmPassword"
                   inputType="text"/>

        <div class="flex justify-between items-center mb-6">
          <div class="form-group form-check">
          </div>

        </div>

        <div class="text-center lg:text-left">
          <button
              type="submit"
              class="inline-block px-7 py-3 bg-green-300 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-400 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Registrar
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import TextInput from "../components/global/TextInput.vue";
import {ref} from 'vue';
import {useUserStore} from "../store/user-store";
import RegisterService from "../services/registerService";

export default {
  name: "RegisterView",
  components: {TextInput},

  setup() {

    const userStore = useUserStore();

    const errors = ref([]);
    const name = ref('');
    const identifier = ref('');
    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');

    const register = () => {
      errors.value = []
      const params = {
        name: name.value,
        identifier: identifier.value,
        email: email.value,
        password: password.value,
        password_confirmation: confirmPassword.value,
      }
      try {
        RegisterService.registerUser(params)
            .then(response => userStore.setUserDetails(response));
      } catch (error) {
        errors.value = error.response.data.errors;
      }
    }

    return {
      errors,
      name,
      identifier,
      email,
      password,
      confirmPassword,
      register,
    }
  }
}
</script>

<style scoped>

</style>