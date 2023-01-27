<script lang="ts">
	import { onMount } from 'svelte';

	import '$lib/scss/globals.scss';

	import { auth } from '$lib/store';
	import ThemeProvider from '$lib/components/ThemeProvider.svelte';
	import Header from '$lib/components/Header.svelte';
	import { getCurrentProfile, getCurrentSession } from '$lib/utils/apiClient';
	import { supabase } from '$lib/supabaseClient';

	let loading = true;

	onMount(() => {
		supabase.auth.onAuthStateChange(async (e, session) => {
			if (e === 'SIGNED_IN' && session) {
				const { data, error } = await getCurrentProfile(session.user.id);

				if (error || !data || !data[0]) {
					console.error('No profile found');
					return;
				}

				auth.login(session, data[0]);
			} else if (e === 'SIGNED_OUT') {
				auth.logout();
			}
		});

		getCurrentSession()
			.then(({ data, error }) => {
				if (error || !data.session) {
					throw new Error();
				}

				return { session: data.session };
			})
			.then(async (result) => {
				const { data, error } = await getCurrentProfile(result.session.user.id);

				if (error || !data || !data[0]) {
					throw new Error();
				}

				return { ...result, profile: data[0] };
			})
			.then(({ session, profile }) => {
				auth.login(session, profile);
			})
			.catch(() => {
				auth.logout();
			})
			.finally(() => (loading = false));
	});
</script>

<ThemeProvider>
	{#if loading}
		<span>loading...</span>
	{:else}
		<Header />
		<main class="container">
			<slot />
		</main>
	{/if}
</ThemeProvider>
