<script setup lang="ts">
// const router = useRouter()
// const navLinks = router.getRoutes()

const navLinks = [
  {
    path: '/',
    name: 'index',
    title: 'Home',
  },
  {
    path: '/about',
    name: 'about',
    title: 'About',
  },
  {
    path: '/admin/login',
    name: 'admin-login',
    title: 'Login / Register',
  },
]
// console.log(navLinks)

const mobile = ref(false)
const mobileNav = ref(false)
const windowWidth = ref(null)

const checkWindowWidth = () => {
  if (window.innerWidth <= 750) {
    mobile.value = true
  } else {
    mobile.value = false
    mobileNav.value = false
  }
}

const toggleMobileNav = () => {
  mobileNav.value = !mobileNav.value
}

onMounted(() => {
  window.addEventListener('resize', checkWindowWidth)
  checkWindowWidth()
})
</script>

<template>
  <header>
    <nav class="navbar">
      <div class="branding">
        <img src="~/assets/img/yrl-logo.png" alt="" />
        <NuxtLink class="header" :to="{ name: `index` }">YRL Consulting</NuxtLink>
      </div>
      <div class="nav-links">
        <ul v-show="!mobile">
          <NuxtLink class="link" v-for="link in navLinks" :index="link.path" :to="{ name: link.name }">
            {{ link.title }}
          </NuxtLink>
        </ul>
      </div>
    </nav>
    <img @click="toggleMobileNav" v-show="mobile" class="menu-icon" src="~assets/icons/menu.svg" />
    <transition name="slide">
      <ul class="mobile-nav" v-show="mobileNav">
        <NuxtLink class="link" v-for="link in navLinks" :index="link.path" :to="{ name: link.name }">
          {{ link.name }}
        </NuxtLink>
      </ul>
    </transition>
  </header>
</template>
