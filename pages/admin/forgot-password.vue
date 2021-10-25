<script setup>
// import { reactive } from 'vue'
const email = ref('')
</script>

<template>
  <div class="form-wrap">
    <form class="register">
      <p class="login-register">Forgot your password? Enter your email to reset it</p>
      <h2>Reset Password</h2>
      <div class="form-group">
        <img src="~/assets/icons/envelope.svg" alt="Person Icon" />
        <input type="email" v-model="email" placeholder="Email" />
        <label>Email</label>
      </div>
      <button>Reset Password</button>
    </form>
    <span class="background"></span>
  </div>
</template>
