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

<style lang="scss">
	@use '$lib/scss/mixins' as *;

	header {
		background-image: url(/assets/mobile/bg-pattern-header.svg);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		padding-block: 2rem 4.5rem;

		@include md-bp {
			& {
				background-image: url(/assets/tablet/bg-pattern-header.svg);
				background-position: left;
				padding-block: 2.625rem 5.375rem;
			}
		}

		@include lg-bp {
			& {
				background-image: url(/assets/desktop/bg-pattern-header.svg);
				background-position: left;
				padding-block: 2.813rem 5.313rem;
			}
		}
	}

	.app-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
