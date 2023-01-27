<script lang="ts">
	import { signIn } from '$lib/utils/apiClient';
	import Heading from '$lib/components/Heading.svelte';
	import Button from '$lib/components/Button.svelte';
	import Link from '$lib/components/Link.svelte';
	import TextInput from '$lib/components/TextInput.svelte';
	import AuthWrapper from '$lib/components/AuthWrapper.svelte';

	let email = '';
	let password = '';
	let errorMessage: string | undefined = '';
	let submitting = false;

	const handleSignIn = async () => {
		if (submitting) {
			return;
		}

		submitting = true;

		const { error } = await signIn(email, password);
		if (error) {
			errorMessage = error.message;
			submitting = false;
		}

		window.location.href = '/';
	};
</script>

<AuthWrapper>
	<Heading type="h1">Sign In</Heading>

	<form on:submit={handleSignIn}>
		<TextInput bind:value={email} type="email" placeholder="Your email..." required />

		<TextInput bind:value={password} type="password" placeholder="Your password..." required />

		{#if errorMessage}
			<span class="error">{errorMessage}</span>
		{/if}

		<Button>{submitting ? 'Submitting...' : 'Sign In'}</Button>

		<p>Don't have an account? <Link href="/auth/sign-up">Sign Up Now</Link></p>
	</form>
</AuthWrapper>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.error {
		color: var(--danger);
	}
</style>
