<script lang="ts">
	import { onMount } from 'svelte';

	import { signOut } from '$lib/utils/apiClient';

	onMount(async () => {
		await signOut();

		window.location.href = '/';
	});
</script>
