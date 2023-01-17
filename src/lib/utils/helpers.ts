/* eslint-disable @typescript-eslint/no-explicit-any */
import type { PostgrestFilterBuilder } from '@supabase/postgrest-js';

import type { AnyProp } from '$lib/types';

export const searchTermsToFilter = (
	f: PostgrestFilterBuilder<any, any, any>,
	searchTerms: AnyProp
) => {
	Object.entries(searchTerms).forEach((entry) => {
		if (entry[1] !== '') {
			f.ilike(entry[0], `%${entry[1]}%`);
		}
	});
	return f;
};
