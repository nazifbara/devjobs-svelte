<script lang="ts">
	import type { icons } from '../constants';
	import Icon from './Icon.svelte';

	export let name: keyof typeof icons;
	export let type: 'primary' | '' = '';
</script>

<button class:primary={type === 'primary'}>
	<Icon {name} />
</button>

<style>
	button {
		display: grid;
		place-content: center;
		place-items: center;
		border-radius: 0.313rem;
		padding: 0.875rem;
	}

	button :global(svg path) {
		fill: var(--icon);
	}

	.primary {
		background-color: var(--primary);
	}

	.primary :global(svg path) {
		fill: white;
	}
</style>
