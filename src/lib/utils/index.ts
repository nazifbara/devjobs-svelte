export const getThemeFromLT = (): 'light' | 'dark' => {
	return localStorage.getItem('themeName') as 'light' | 'dark';
};

export const setThemeToLT = (name: 'light' | 'dark') => {
	return localStorage.setItem('themeName', name);
};
