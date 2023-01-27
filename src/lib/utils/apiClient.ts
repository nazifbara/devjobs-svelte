import { supabase } from '$lib/supabaseClient';

import { searchTermsToFilter } from '$lib/utils/helpers';
import { ENTITIES_COUNT_LIMIT } from '$lib/utils/constants';
import type { Job, EntityWithId, AnyProp } from '$lib/types';

export const signIn = async (email: string, password: string) =>
	supabase.auth.signInWithPassword({ email, password });

export const signUp = async (email: string, password: string) =>
	supabase.auth.signUp({ email, password });

export const signOut = async () => supabase.auth.signOut();

export const upload = async (file: File, bucket: string, path: string) =>
	await supabase.storage.from(bucket).upload(path, file);

export const getPublicUrl = async (bucket: string, path: string) =>
	await supabase.storage.from(bucket).getPublicUrl(path);

export const searchFor = async (path: string, searchTerms: AnyProp) => {
	let filterBuilder = supabase.from(path).select();
	filterBuilder = searchTermsToFilter(filterBuilder, searchTerms);

	const { data } = await filterBuilder.order('created_at').limit(ENTITIES_COUNT_LIMIT);
	return data as Job[];
};

export const postItem = async (path: string, item: unknown) =>
	await supabase.from(path).insert(item);

export const getById = async (path: string, id: string) => {
	const { data } = await supabase.from(path).select().eq('id', id);

	return data ? (data[0] as Job) : null;
};

export const getCurrentSession = async () => await supabase.auth.getSession();

export const getCurrentProfile = async (userId: string) =>
	await supabase.from('profiles').select().eq('userId', userId);

export const getListOf = async (path: string) => {
	const { data } = await supabase
		.from(path)
		.select()
		.order('created_at')
		.limit(ENTITIES_COUNT_LIMIT);

	return data as Job[];
};

export const getMoreOf = async (
	path: string,
	entities: EntityWithId[],
	searchTerms: AnyProp = {}
) => {
	let filterBuilder = supabase.from(path).select();
	filterBuilder = searchTermsToFilter(filterBuilder, searchTerms);

	const { data } = await filterBuilder
		.order('created_at')
		.limit(ENTITIES_COUNT_LIMIT)
		.range(entities.length, entities.length + ENTITIES_COUNT_LIMIT);

	return data as Job[];
};
