import type { ParamMatcher } from '@sveltejs/kit';

export const match = ((param) =>
	['sign-in', 'sign-up', 'email-confirmation'].includes(param)) satisfies ParamMatcher;
