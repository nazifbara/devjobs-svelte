<script lang="ts">
	import '$lib/scss/globals.scss';

	import ThemeProvider from '$lib/components/ThemeProvider.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<ThemeProvider>
	<Header />
	<main class="container">
		<slot />
	</main>
</ThemeProvider>
