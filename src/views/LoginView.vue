<template>
  <section class="place">
    <form @submit.stop.prevent="login()">
      <div class="mb-6 flex justify-between items-center">
        <h1 class=" text-lg text-black font-bold">
          Login
        </h1>
      </div>
      <TextInput placeHolder="E-mail"
                 v-model:input="email"
                 inputType="email"
                 :error="errors.email ? errors.email[0] : ''"
      />

      <TextInput placeHolder="Senha"
                 v-model:input="password"
                 inputType="password"
                 :error="errors.password ? errors.password[0] : ''"
      />

      <div class="flex justify-between items-center mb-6">
        <div class="form-group form-check">
          <input
              type="checkbox"
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              id="exampleCheck2"
          />
          <label class="form-check-label inline-block text-gray-800" for="exampleCheck2"
          >Lembre-me</label
          >
        </div>
        <a href="#!" class="text-gray-800">Esqueceu sua senha?</a>
      </div>

      <div class="text-center lg:text-left">
        <button
            type="submit"
            class="inline-block px-7 py-3 bg-green-300 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-400 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Logar
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import TextInput from "../components/global/TextInput.vue";
import {ref} from "vue";
import LoginService from "../services/loginService";
import {useUserStore} from "../store/user-store";

export default {
  name: 'Login',
  components: {TextInput},

  setup() {
    const errors = ref([]);
    const email = ref('');
    const password = ref('');
    const userStore = useUserStore();
    const login = async () => {
      const params = {
        email: email.value,
        password: password.value,
      }

      try {
        let res = await LoginService.loginUser(params);
        await userStore.setUserDetails(res);
      } catch (error) {
        errors.value = error.response.data.errors
      }
    }

    return {
      errors,
      login,
      email,
      password
    }
  }
}

</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>