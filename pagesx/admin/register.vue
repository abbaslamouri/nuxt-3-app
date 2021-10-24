<script setup>
import axios from 'axios'

const user = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
})

const register = async () => {
  const response = await axios({
    method: 'POST',
    url: 'http://localhost:3000/api/v1/register',
    data: user,
  })
  console.log(response.data)
}
</script>

<template>
  <main class="form-wrap">
    <Head lang="en-US"><Title>Register</Title></Head>
    <form class="register" @submit.prevent="register">
      <p class="login-register">
        Already have an account?
        <NuxtLink :to="{ name: `admin-login` }">Login</NuxtLink>
      </p>
      <h2>Register</h2>
      <div class="form-group">
        <img src="~/assets/icons/person.svg" alt="Person Icon" />
        <input type="text" v-model="user.name" placeholder="Name" />
        <label>Name</label>
      </div>
      <div class="form-group">
        <img src="~/assets/icons/envelope.svg" alt="Person Icon" />
        <input type="email" v-model="user.email" placeholder="Email" />
        <label>Email</label>
      </div>
      <div class="form-group">
        <img src="~/assets/icons/lock.svg" alt="Lock Icon" />
        <input type="password" v-model="user.password" />
        <label>Password</label>
      </div>
      <div class="form-group">
        <img src="~/assets/icons/lock.svg" alt="Lock Icon" />
        <input type="password" v-model="user.confirmPassword" />
        <label>Confirm Password</label>
      </div>
      <button>Sign Up</button>
    </form>
    <span class="background"></span>
  </main>
</template>
