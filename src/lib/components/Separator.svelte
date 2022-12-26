<script lang="ts">
	export let type: 'vertical' | 'horizontal' = 'horizontal';
</script>

<hr class:horizontal={type === 'horizontal'} class:vertical={type === 'vertical'} />

<style>
	hr {
		border-style: solid;
		border-color: var(--accentText);
		opacity: 0.2;
	}

	hr.vertical {
		height: 100%;
		border-right-width: 1px;
		margin-inline: 1.25rem;
	}

	hr.horizontal {
		width: 100%;
		border-top-width: 1px;
		margin-block: 1.5rem;
		margin-inline: 0;
	}

	@media (min-width: 69.375rem) {
		hr.vertical {
			margin-inline: 1.5rem;
		}
	}
</style>
