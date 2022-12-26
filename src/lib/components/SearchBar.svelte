<script>
	import { fly, fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	import IconButton from './IconButton.svelte';
	import Checkbox from './Checkbox.svelte';
	import Button from './Button.svelte';
	import Icon from './Icon.svelte';
	import Separator from './Separator.svelte';

	let filtering = true;
	const closeDialog = () => (filtering = false);
</script>

<form class="wrapper main-bar">
	<label>
		<Icon name="search" />
		<input type="search" placeholder="Filter by title..." />
	</label>
	<Separator type="vertical" />
	<label class="location">
		<Icon name="location" />
		<input type="search" placeholder="Filter by location..." />
	</label>
	<Separator type="vertical" />
	<div class="action">
		<Checkbox labelText="Full Time Only" />

		<Button type="submit">Search</Button>
	</div>

	<div class="mobile-action">
		<IconButton on:click={() => (filtering = true)} name="filter" />
		<IconButton name="search" type="primary" />
	</div>
</form>

{#if filtering}
	<div
		transition:fade={{ easing: cubicOut }}
		on:click={closeDialog}
		on:keydown={closeDialog}
		class="dialog"
	>
		<div
			transition:fly={{ y: 200, easing: cubicOut }}
			on:click|stopPropagation
			on:keydown|stopPropagation
			class="dialog-content"
		>
			<label>
				<Icon name="location" />
				<input type="search" placeholder="Filter by location..." />
			</label>
			<Separator />
			<Checkbox labelText="Full Time Only" />
			<Button type="submit" on:click={closeDialog}>Search</Button>
		</div>
	</div>
{/if}

<style>
	.dialog {
		z-index: 2;
		position: fixed;
		display: grid;
		padding-inline: 1.5rem;
		place-items: center;
		background-color: hsl(0 100% 0% / 0.5);
		inset: 0;
	}

	.dialog-content {
		display: grid;
		background-color: var(--accentBg);
		width: 100%;
		max-width: 450px;
		margin-block: auto;
		border-radius: 6px;
		padding-block: 1.5rem;
	}

	.dialog-content > :global(:not(hr)) {
		margin-inline: 1.5rem;
	}

	.dialog-content > :global(button) {
		margin-block-start: 1.5rem;
	}

	.wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: var(--accentBg);
		height: 5rem;
		border-radius: 0.375rem;
		padding-inline: 1.5rem;
	}

	.mobile-action {
		display: flex;
	}

	.wrapper > :global(hr) {
		display: none;
	}

	input[type='search'] {
		background-color: transparent;
		padding: 0;
		height: 1.5rem;
		width: 100%;
	}

	label {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 1rem;
	}

	.wrapper label :global(svg) {
		display: none;
	}

	label,
	.action {
		flex: 1;
	}

	.location,
	.action {
		display: none;
	}

	.action {
		align-items: center;
		justify-content: space-between;
		gap: 1.75rem;
	}

	.action > :global(label) {
		flex: 3;
	}

	.action > :global(button) {
		flex: 2;
	}

	@media (min-width: 48rem) {
		.wrapper {
			padding-inline: 1rem;
		}

		.wrapper > :global(hr) {
			display: block;
		}

		.mobile-action {
			display: none;
		}

		.location {
			display: grid;
		}

		.action {
			display: flex;
		}

		.wrapper label :global(svg) {
			display: initial;
		}

		.dialog {
			display: none;
		}
	}

	@media (min-width: 69.375rem) {
		.wrapper {
			padding-inline: 1.25rem;
		}
	}
</style>
