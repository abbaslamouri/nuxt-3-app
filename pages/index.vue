<script setup lang="ts">
// import { ref, onMounted } from 'vue'
import axios from 'axios'

const heading = ref('Hello from the Home page')
const pageTitle = 'Home Page'
const pageDescription = 'page description'

const fetchUsers = async () => {
  const response = await axios({
    method: 'post',
    url: 'http://localhost:3000/api/users',
    data: { name: 'Abbas Lamouri', email: 'abbaslamouri@yrlus.com' },
  })
  console.log(response)
}
</script>

<script lang="ts">
export default {
  // layout: 'custom',
}
</script>

<template>
  <main>
    <h1>{{ heading }}</h1>
    <!-- <h1>{{ router }}</h1> -->
    <Head lang="en-US">
      <Title>{{ pageTitle }}</Title>
      <Meta name="description" :content="`${pageDescription}`" />
      <Link rel="preload" href="#" as="script" />
    </Head>

    <button @click="fetchUsers">Fetch Users</button>
  </main>
</template>
