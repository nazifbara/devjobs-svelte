<script lang="ts">
	import Icon from './Icon.svelte';
	import ThemeSwitcher from './ThemeSwitcher.svelte';
</script>

<header>
	<div class="container app-bar">
		<a href="/"><Icon name="logo" /></a>

		<ThemeSwitcher />
	</div>
</header>

<style>
	header {
		background-image: url(/assets/mobile/bg-pattern-header.svg);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		padding-block: 2rem 4.5rem;
	}

	.app-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	@media (min-width: 48rem) {
		header {
			background-image: url(/assets/tablet/bg-pattern-header.svg);
			background-position: left;
			padding-block: 2.625rem 5.375rem;
		}
	}

	@media (min-width: 69.375rem) {
		header {
			background-image: url(/assets/desktop/bg-pattern-header.svg);
			background-position: left;
			padding-block: 2.813rem 5.313rem;
		}
	}
</style>
