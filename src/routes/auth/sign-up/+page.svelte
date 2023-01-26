<script lang="ts">
	import { signUp } from '$lib/utils/apiClient';
	import Heading from '$lib/components/Heading.svelte';
	import Button from '$lib/components/Button.svelte';
	import Link from '$lib/components/Link.svelte';
	import TextInput from '$lib/components/TextInput.svelte';
	import AuthWrapper from '$lib/components/AuthWrapper.svelte';

	let email = '';
	let password = '';
	let password2 = '';
	let errorMessage: string | undefined = '';

	const handleSignUp = async () => {
		if (password2 === password) {
			const { error } = await signUp(email, password);
			errorMessage = error?.message;
		} else {
			errorMessage = 'The two passwords must match';
		}

		if (!errorMessage) {
			window.location.href = '/auth/email-confirmation-message';
		}
	};
</script>

<AuthWrapper>
	<Heading type="h1">Sign Up</Heading>

	<form on:submit={handleSignUp}>
		<TextInput bind:value={email} type="email" placeholder="Enter your email..." required />

		<TextInput
			bind:value={password}
			type="password"
			placeholder="Enter your password..."
			required
		/>

		<TextInput
			bind:value={password2}
			type="password"
			placeholder="Confirm your password..."
			required
		/>

		{#if errorMessage}
			<span class="error">{errorMessage}</span>
		{/if}

		<Button>Sign up</Button>

		<p>Already have an account? <Link href="/auth/sign-in">Sign In Now</Link></p>
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
