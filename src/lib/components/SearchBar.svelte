<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	import IconButton from './IconButton.svelte';
	import Checkbox from './Checkbox.svelte';
	import Button from './Button.svelte';
	import Icon from './Icon.svelte';
	import Separator from './Separator.svelte';

	const dispatch = createEventDispatcher();

	let filtering = false;
	let position = '';
	let location = '';
	let fullTime = false;

	$: contract = fullTime === true ? 'Full Time' : '';
	$: searchTerms = {
		position,
		location,
		contract
	};

	const onSearch = () => {
		dispatch('search', {
			searchTerms
		});
		closeDialog();
	};
	const closeDialog = () => (filtering = false);
</script>

<form class="wrapper main-bar">
	<label>
		<Icon name="search" />
		<input bind:value={position} type="search" placeholder="Filter by title..." />
	</label>
	<Separator type="vertical" />
	<label class="location">
		<Icon name="location" />
		<input bind:value={location} type="search" placeholder="Filter by location..." />
	</label>
	<Separator type="vertical" />
	<div class="action">
		<Checkbox bind:checked={fullTime} labelText="Full Time Only" />

		<Button type="submit" on:btn-click={onSearch}>Search</Button>
	</div>

	<div class="mobile-action">
		<IconButton on:click={() => (filtering = true)} name="filter" />
		<IconButton on:click={onSearch} name="search" type="primary" />
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
				<input bind:value={location} type="search" placeholder="Filter by location..." />
			</label>
			<Separator />
			<Checkbox bind:checked={fullTime} labelText="Full Time Only" />
			<Button type="submit" on:btn-click={onSearch}>Search</Button>
		</div>
	</div>
{/if}

<style lang="scss">
	@use '$lib/scss/mixins' as *;

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

		& > :global(:not(hr)) {
			margin-inline: 1.5rem;
		}

		& > :global(button) {
			margin-block-start: 1.5rem;
		}
	}

	.wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: var(--accentBg);
		height: 5rem;
		border-radius: 0.375rem;
		padding-inline: 1.5rem;
		& > :global(hr) {
			display: none;
		}

		& > label {
			grid-template-columns: 1fr;
		}

		& label :global(svg) {
			display: none;
		}
	}

	.mobile-action {
		display: flex;
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

	label,
	.action {
		flex: 1;
	}

	.wrapper .location,
	.action {
		display: none;
	}

	.action {
		align-items: center;
		justify-content: space-between;
		gap: 1.75rem;

		& > :global(label) {
			flex: 3;
		}

		& > :global(button) {
			flex: 2;
		}
	}

	@include md-bp {
		.wrapper {
			padding-inline: 1rem;

			& > :global(hr) {
				display: block;
			}

			& > label {
				grid-template-columns: auto 1fr;
			}

			& label :global(svg) {
				display: initial;
			}

			& .location {
				display: grid;
			}
		}

		.mobile-action {
			display: none;
		}

		.action {
			display: flex;
		}

		.dialog {
			display: none;
		}
	}

	@include lg-bp {
		.wrapper {
			padding-inline: 1.25rem;
		}
	}
</style>
