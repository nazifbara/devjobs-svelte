<script lang="ts">
	import { currentTheme } from '$lib/store';
	import Icon from './Icon.svelte';

	$: isDark = $currentTheme === 'dark';
	const toggle = currentTheme.toggle;
</script>

<div class="wrapper">
	<Icon name="sun" />
	<label
		on:click|preventDefault={toggle}
		on:keydown={(e) => e.code === 'Enter' && toggle()}
		class="switch"
	>
		<input checked={isDark} type="checkbox" />
		<span class="slider" />
	</label>
	<Icon name="moon" />
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.switch {
		position: relative;
		display: inline-block;
		height: 1.5rem;
		width: 3rem;

		& input {
			opacity: 0;
			width: 0;
			height: 0;
		}
	}

	.switch:hover .slider::before {
		background-color: var(--primaryLight);
	}

	.slider {
		position: absolute;
		cursor: pointer;
		inset: 0;
		background-color: hsl(0 0% 100%);
		border-radius: 0.75rem;

		&:before {
			position: absolute;
			content: '';
			height: 0.875rem;
			width: 0.875rem;
			left: 0.313rem;
			bottom: 0.313rem;
			border-radius: 50%;
			background-color: var(--primary);
			transition: 0.4s;
		}
	}

	input:checked + .slider::before {
		left: calc(100% - (0.313rem + 0.875rem));
	}
</style>
