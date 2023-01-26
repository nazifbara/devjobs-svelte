<script lang="ts">
	import { page } from '$app/stores';
	import { signUp, signIn } from '$lib/utils/apiClient';
	import Heading from '$lib/components/Heading.svelte';
	import Button from '$lib/components/Button.svelte';
	import Link from '$lib/components/Link.svelte';
	import TextInput from '$lib/components/TextInput.svelte';

	$: type = $page.params.type;
	$: signingIn = type === 'sign-in';
	$: signingUp = type === 'sign-up';
	$: askConfirmation = type === 'email-confirmation';

	let email = '';
	let password = '';
	let password2 = '';
	let errorMessage: string | undefined = '';

	const handleSubmit = () => {
		signingIn ? handleSignIn() : handleSignUp();
	};

	const handleSignIn = async () => {
		const { data, error } = await signIn(email, password);
		errorMessage = errorMessage = error?.message;

		if (!errorMessage) {
			window.location.href = '/';
		}
	};

	const handleSignUp = async () => {
		if (password2 === password) {
			const { error } = await signUp(email, password);
			errorMessage = error?.message;
		} else {
			errorMessage = "The two passwords don't match";
		}

		if (!errorMessage) {
			window.location.href = '/auth/email-confirmation';
		}
	};
</script>

<div class="wrapper">
	{#if !askConfirmation}
		<Heading type="h1">{signingIn ? 'Sign In' : 'Sign Up'}</Heading>

		<form on:submit={handleSubmit}>
			<TextInput
				value={email}
				type="email"
				placeholder="Enter your email..."
				required
				class="text-input"
			/>

			<TextInput
				value={password}
				type="password"
				placeholder="Enter your password..."
				required
				class="text-input"
			/>

			{#if signingUp}
				<TextInput
					value={password2}
					type="password"
					placeholder="Confirm your password..."
					required
					class="text-input"
				/>
				<Button>Sign up</Button>

				<p>Already have an account? Please <Link href="/auth/sign-in">sign in</Link>.</p>
			{:else}
				<Button>Sign in</Button>

				<p>Don't have an account? Please <Link href="/auth/sign-up">sign up</Link>.</p>
			{/if}

			{#if errorMessage}
				<span class="error">{errorMessage}</span>
			{/if}
		</form>
	{:else}
		<Heading>Thank you for signing up</Heading>
		<p>We've sent you an email, please check it out to confirm your email address.</p>
	{/if}
</div>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.wrapper {
		transform: translateY(-3rem);
		border-radius: 0.375rem;
		background-color: var(--accentBg);
		padding: 1.5rem;
		display: flex;
		gap: 1.5rem;
		flex-direction: column;
		max-width: 31.25rem;
		margin-inline: auto;
	}
	.error {
		color: var(--danger);
	}
</style>
