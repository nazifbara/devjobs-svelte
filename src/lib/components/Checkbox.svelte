<script lang="ts">
	export let labelText: string = '';
	export let checked = false;
</script>

<label class="wrapper">
	<input bind:checked type="checkbox" />
	<span class="checkmark" />
	{labelText}
</label>

<style lang="scss">
	.wrapper {
		display: grid;
		position: relative;
		gap: 1rem;
		align-items: center;
		grid-template-columns: auto 1fr;
		cursor: pointer;
		color: var(--accentTextContrast);
		font-weight: 700;

		&:hover .checkmark {
			background-color: var(--primaryBgO25);
		}

		&:hover input:checked ~ .checkmark {
			background-color: var(--primary);
		}
	}

	.checkmark {
		display: inline-block;
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 0.188rem;
		background-color: var(--accentTextContrastO10);
		transition: background-color 0.3s ease-out;

		&::after {
			content: '';
			position: absolute;
			display: none;
			left: calc(0.75rem - 0.1875rem);
			top: calc(45% - 0.375rem);
			width: 0.375rem;
			height: 0.75rem;
			border: solid white;
			border-width: 0 2px 2px 0;
			transform: rotate(45deg);
		}
	}

	input {
		position: absolute;
		opacity: 0;
		width: 0;
		height: 0;

		&:checked ~ .checkmark::after {
			display: block;
		}

		&:checked ~ .checkmark {
			background-color: var(--primary);
		}
	}
</style>
