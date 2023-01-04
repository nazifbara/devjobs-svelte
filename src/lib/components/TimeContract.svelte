<span><time><slot name="time" /></time><span><slot name="contract" /></span></span>

<style>
	time::after {
		content: '';
		display: inline-block;
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background-color: var(--accentText);
		margin-inline: 0.75rem;
	}
</style>
