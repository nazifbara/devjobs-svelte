<script lang="ts">
	import { theme, common } from '../../theme';
	import { currentTheme } from '../store';
</script>

<div
	style:--primary={common.colors.primary}
	style:--primaryLight={common.colors.primaryLight}
	style:--primaryText={common.colors.primaryText}
	style:--primaryBg={common.colors.primaryBg}
	style:--primaryHover={common.colors.primaryHover}
	style:--primaryBgO10={common.colors.primaryBgO10}
	style:--primaryBgO25={common.colors.primaryBgO25}
	style:--primaryBgO35={common.colors.primaryBgO35}
	style:--accentBase={theme[$currentTheme].colors.accentBase}
	style:--accentBg={theme[$currentTheme].colors.accentBg}
	style:--accentText={theme[$currentTheme].colors.accentText}
	style:--accentTextContrast={theme[$currentTheme].colors.accentTextContrast}
	style:--accentTextContrastO10={theme[$currentTheme].colors.accentTextContrastO10}
	style:--accentTextContrastO50={theme[$currentTheme].colors.accentTextContrastO50}
	style:--btn2bg={theme[$currentTheme].colors.btn2bg}
	style:--btn2bgHover={theme[$currentTheme].colors.btn2bgHover}
>
	<slot />
</div>

<style>
	div {
		min-width: 100vw;
		min-height: 100vh;
		background-color: var(--accentBase);
		color: var(--accentText);
	}
</style>
