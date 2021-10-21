<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import axios from "axios"
  const heading = ref('Hello from the Home page')
  const pageTitle = 'Home Page'
  const pageDescription = 'page description'

  

  const fetchUsers = (async () => {
    // const instance = axios.create({
    //   baseURL: 'http://localhost:3000/api',
    //   timeout: 5000,
    //   data: {xyz: 12345}
    //   // headers: {'X-Custom-Header': 'foobar'}
    // })
    const response = await axios({
      method: "post",
      url: "http://localhost:3000/api/users",
      data: {xyz: 1234}
    })
    console.log(response)
  })


</script>

<script lang="ts">
export default {
  // layout: 'custom',
}
</script>

<template>
  <div id="app">
    <h1>{{ heading }}</h1>
    <Head lang="en-US">
      <Title>{{ pageTitle }}</Title>
      <Meta name="description" :content="`${pageDescription}`" />
      <Link rel="preload" href="#" as="script" />
    </Head>

    <button @click="fetchUsers">Fetch Users</button>
  </div>
</template>

<style></style>
