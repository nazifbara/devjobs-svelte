<script>
	import IconButton from './IconButton.svelte';
	import Checkbox from './Checkbox.svelte';
	import Button from './Button.svelte';
	import Icon from './Icon.svelte';
</script>

<form class="wrapper">
	<label>
		<Icon name="search" />
		<input type="search" placeholder="Filter by title..." />
	</label>
	<hr />
	<label class="location">
		<Icon name="location" />
		<input type="search" placeholder="Filter by location..." />
	</label>
	<hr />
	<div class="action">
		<Checkbox labelText="Full Time Only" />

		<Button type="submit">Search</Button>
	</div>

	<div class="mobile-action">
		<IconButton name="filter" />
		<IconButton name="search" type="primary" />
	</div>
</form>

<style>
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

	hr {
		display: none;
		height: 100%;
		margin-block: 0;
		margin-inline: 1.25rem;
		border-right: 1px solid var(--accentText);
		opacity: 0.2;
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

	label :global(svg) {
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

		hr {
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

		label :global(svg) {
			display: initial;
		}
	}

	@media (min-width: 69.375rem) {
		.wrapper {
			padding-inline: 1.25rem;
		}

		hr {
			margin-inline: 1.5rem;
		}
	}
</style>
