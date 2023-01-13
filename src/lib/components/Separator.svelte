<script lang="ts">
	export let type: 'vertical' | 'horizontal' = 'horizontal';
</script>

<hr class:horizontal={type === 'horizontal'} class:vertical={type === 'vertical'} />

<style lang="scss">
	@use '$lib/scss/mixins' as *;

	hr {
		border-style: solid;
		border-color: var(--accentText);
		opacity: 0.2;

		&.vertical {
			height: 100%;
			border-right-width: 1px;
			margin-inline: 1.25rem;
		}

		&.horizontal {
			width: 100%;
			border-top-width: 1px;
			margin-block: 1.5rem;
			margin-inline: 0;
		}
	}

	@include lg-bp {
		hr.vertical {
			margin-inline: 1.5rem;
		}
	}
</style>
