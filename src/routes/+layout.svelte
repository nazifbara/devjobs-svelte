<script lang="ts">
	import '../app.css';
	import ThemeProvider from '$lib/components/ThemeProvider.svelte';
	import { currentTheme } from '$lib/store';
</script>

<ThemeProvider>
	<button on:click={currentTheme.toggle}>toggle theme</button>
	<slot />
</ThemeProvider>
