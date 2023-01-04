<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let as: string = 'button';
	export let kind: 'primary' | 'basic' = 'primary';

	const dispatch = createEventDispatcher();

	const handleClick = () => {
		dispatch('btn-click');
	};
</script>

<svelte:element
	this={as}
	on:click={handleClick}
	class:primary={kind === 'primary'}
	class="btn"
	{...$$restProps}
>
	<slot />
</svelte:element>

<style>
	.btn {
		text-decoration: none;
		height: 3rem;
		padding-inline: 0.875rem;
		display: grid;
		place-items: center;
		place-content: center;
		background-color: var(--btn2bg);
		border-radius: 0.313rem;
		color: var(--btn2Text);
		font-weight: 700;
		transition: background-color 0.3s ease-out;
	}

	.btn:hover {
		background-color: var(--btn2bgHover);
	}

	.btn.primary {
		background-color: var(--primary);
		color: white;
	}

	.btn.primary:hover {
		background-color: var(--primaryLight);
	}
</style>
