<div class="wrapper">
	<slot />
</div>

<style>
	.wrapper {
		transform: translateY(-3rem);
		border-radius: 0.375rem;
		background-color: var(--accentBg);
		padding: 1.5rem;
		display: flex;
		gap: 1.5rem;
		flex-direction: column;
		max-width: 31.25rem;
		margin-inline: auto;
	}
</style>
