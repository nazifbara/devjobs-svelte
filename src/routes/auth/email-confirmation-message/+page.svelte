<script lang="ts">
	import Heading from '$lib/components/Heading.svelte';
	import Link from '$lib/components/Link.svelte';
	import AuthWrapper from '$lib/components/AuthWrapper.svelte';
</script>

<AuthWrapper>
	<Heading>Thank you for signing up</Heading>
	<p>
		We've sent you an email, please check it out to confirm your email address. Then <Link
			href="/auth/sign-in">Sign In</Link
		>.
	</p>
</AuthWrapper>
