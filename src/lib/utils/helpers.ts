/* eslint-disable @typescript-eslint/no-explicit-any */
import type { PostgrestFilterBuilder } from '@supabase/postgrest-js';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

import type { AnyProp } from '$lib/types';

export const isValidUrl = (url: string) => {
	try {
		return Boolean(new URL(url));
	} catch (e) {
		return false;
	}
};

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

export const timeFromNow = (dateTime: string) => `${dayjs(dateTime).fromNow(true)} ago`;
