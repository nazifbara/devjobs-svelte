<script lang="ts">
	export let href = '#';
</script>

<a {href}>
	<slot />
</a>

<style>
	a {
		color: var(--accentTextContrast);
	}

	a:hover {
		color: var(--primary);
	}
</style>
