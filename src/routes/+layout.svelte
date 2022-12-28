<script lang="ts">
	import '../app.css';

	import { onMount } from 'svelte';

	import ThemeProvider from '$lib/components/ThemeProvider.svelte';
	import Header from '$lib/components/Header.svelte';
	import { initializeFirebase } from '$lib/firebase';

	onMount(() => initializeFirebase());
</script>

<ThemeProvider>
	<Header />
	<main class="container">
		<slot />
	</main>
</ThemeProvider>
