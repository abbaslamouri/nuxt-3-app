<script setup>
import axios from 'axios'

const user = reactive({
  email: '',
  password: '',
})

const login = async () => {
  const response = await axios({
    method: 'POST',
    url: 'http://localhost:3000/api/v1/login',
    data: user,
  })
  console.log(response.data)
}
</script>

<template>
  <div class="form-wrap">
    <form class="login" @submit.prevent="login">
      <p class="login-register">
        Don't have an account?
        <NuxtLink :to="{ name: `admin-register` }">Register</NuxtLink>
      </p>
      <h2>Login</h2>
      <div class="form-group">
        <img src="~/assets/icons/person.svg" alt="Person Icon" />
        <input type="email" v-model="user.email" placeholder="Email" />
        <label>Email</label>
      </div>
      <div class="form-group">
        <img src="~/assets/icons/lock.svg" alt="Lock Icon" />
        <input type="password" v-model="user.password" />
        <label>Password</label>
      </div>
      <button>Sign In</button>
      <NuxtLink class="forgot-password" :to="{ name: `admin-forgot-password` }">Forgot Password?</NuxtLink>
    </form>
    <span class="background"></span>
  </div>
</template>
