<script lang="ts">
	type headingType = 'h1' | 'h2' | 'h3' | 'h4';
	export let type: headingType = 'h1';
	export let as: string | null = null;
</script>

<svelte:element this={as ?? type} class="heading {type}">
	<slot />
</svelte:element>

<style>
	.heading {
		display: block;
		color: var(--accentTextContrast);
		font-weight: 700;
	}

	.h1 {
		font-size: 1.75rem;
	}

	.h2 {
		font-size: 1.25rem;
	}

	.h3 {
		font-size: 1.25rem;
	}

	.h4 {
		font-size: 0.875rem;
	}

	@media (min-width: 48rem) {
		.h2 {
			font-size: 1.5rem;
		}
	}
</style>
