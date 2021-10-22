<script setup lang="ts">
	const router = useRouter()
	const navLinks = router.getRoutes()
	console.log(navLinks)
</script>

<template>
	<div class="navbar">
		<ul>
			<li v-for="link in navLinks" :index="link.path">
				<NuxtLink :to="link.path">{{ link.name }}</NuxtLink>
			</li>
		</ul>
	</div>
</template>
