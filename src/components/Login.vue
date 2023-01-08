<template>
  <section class="h-full">
    <div class="self-auto text-gray-800">
      <form @submit.stop.prevent="login">

        <!-- Email input -->
        <div class="mb-6">
          <input
              type="email"
              v-model="email"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput1"
              placeholder="Email"
          />
        </div>

        <!-- Password input -->
        <div class="mb-6">
          <input
              type="password"
              v-model="password"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Senha"
          />
        </div>

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
            Login
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import Cookie from 'js-cookie'

export default {
  name: 'Login',

  data() {
    return {
      email: '',
      password: '',
    };
  },

  created() {
    Cookie.remove('login-token');
  },

  methods: {
    login() {
      const payload = {
        email: this.email,
        password: this.password,
      }
      fetch(`http://localhost:8000/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })
          .then(response => response.json())
          .then(res => {
            Cookie.set('login-token', res)
          })
    },
  }
};
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>