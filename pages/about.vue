<script setup>
const heading = 'Hello from About page'
const pageTitle = 'About Page'
const pageDescription = 'About page descriptio'
</script>

<template>
  <main>
    <h1>{{ heading }}</h1>
    <Head lang="en-US">
      <Title>{{ pageTitle }}</Title>
      <Meta name="description" :content="`${pageDescription}`" />
      <Link rel="preload" href="#" as="script" />
    </Head>
  </main>
</template>

<style></style>
