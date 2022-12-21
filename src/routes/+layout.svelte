<script lang="ts">
	import '../app.css';
	import ThemeProvider from '$lib/components/ThemeProvider.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<ThemeProvider>
	<Header />
	<slot />
</ThemeProvider>
