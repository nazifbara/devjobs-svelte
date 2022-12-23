<script lang="ts">
	import '../app.css';
	import ThemeProvider from '$lib/components/ThemeProvider.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<ThemeProvider>
	<Header />
	<main class="container">
		<slot />
	</main>
</ThemeProvider>

<style>
	main {
		transform: translateY(-2.5rem);
	}
</style>
