<script lang="ts">
	export let value = '';
</script>

<input bind:value {...$$restProps} class="text-input" />

<style lang="scss">
	.text-input {
		background-color: var(--accentBase);
		border-radius: 0.375rem;
		padding: 1rem;
		color: var(--accentTextContrast);
		border: 1px solid transparent;
		width: 100%;
	}

	.text-input:focus {
		outline: none;
		border: 1px solid var(--primary);
	}
</style>
