export const common = {
	colors: {
		primary: 'hsl(235 69% 61%)',
		primaryLight: 'hsl(235 82% 77%)',
		primaryText: 'hsl(235 69% 61%)',
		primaryBg: 'hsl(235 69% 61%)',
		primaryHover: 'hsl(235 82% 77%)',
		primaryBgO10: 'hsl(235 69% 61% / 0.1)',
		primaryBgO25: 'hsl(235 69% 61% / 0.25)',
		primaryBgO35: 'hsl(235 69% 61% / 0.35)'
	}
};

export const theme = {
	light: {
		colors: {
			accentBase: 'hsl(210 22% 96%)',
			accentBg: 'hsl(0 0% 100%)',
			accentText: 'hsl(214 17% 51%)',
			accentTextContrast: 'hsl(219 29% 14%)',
			accentTextContrastO10: 'hsl(219 29% 14% / 0.135)',
			accentTextContrastO50: 'hsl(219 29% 14% / 0.50)',
			btn2bg: common.colors.primaryBgO10,
			btn2bgHover: common.colors.primaryBgO35,
			btn2Text: common.colors.primary,
			icon: 'hsl(214 17% 51%)'
		}
	},
	dark: {
		colors: {
			accentBase: 'hsl(220 29% 10%)',
			accentBg: 'hsl(219 29% 14%)',
			accentText: 'hsl(214 17% 51%)',
			accentTextContrast: 'hsl(0 0% 100%)',
			accentTextContrastO10: 'hsl(0 0% 100% / 0.135)',
			accentTextContrastO50: 'hsl(0 0% 100% / 0.50)',
			btn2bg: 'hsl(0 0% 100% / 0.1)',
			btn2bgHover: 'hsl(0 0% 100% / 0.35)',
			btn2Text: 'hsl(0 0% 100%)',
			icon: 'hsl(0 0% 100%)'
		}
	}
};
