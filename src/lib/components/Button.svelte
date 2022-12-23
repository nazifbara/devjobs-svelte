<script lang="ts">
	export let kind: 'primary' | 'basic' = 'primary';
	export let type: string = 'button';
</script>

<button {type} class:primary={kind === 'primary'} class="btn">
	<slot />
</button>

<style>
	.btn {
		height: 3rem;
		padding-inline: 0.875rem;
		display: grid;
		place-items: center;
		place-content: center;
		background-color: var(--btn2bg);
		border-radius: 0.313rem;
		color: white;
		font-weight: 700;
		transition: background-color 0.3s ease-out;
	}

	.btn:hover {
		background-color: var(--btn2bgHover);
	}

	.btn.primary {
		background-color: var(--primary);
	}

	.btn.primary:hover {
		background-color: var(--primaryLight);
	}
</style>
