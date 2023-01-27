<script lang="ts">
	import { v4 as uuid } from 'uuid';

	import { getPublicUrl, signUp, upload, postItem } from '$lib/utils/apiClient';
	import Heading from '$lib/components/Heading.svelte';
	import Button from '$lib/components/Button.svelte';
	import Link from '$lib/components/Link.svelte';
	import TextInput from '$lib/components/TextInput.svelte';
	import AuthWrapper from '$lib/components/AuthWrapper.svelte';
	import { isValidUrl } from '$lib/utils/helpers';

	let company = '';
	let website = '';
	let files: FileList;
	let logo = '';
	let logoBackground = '#000000';
	let location = '';
	let email = '';
	let password = '';
	let password2 = '';
	let errorMessage: string | undefined = '';
	let submitting = false;

	const handleSignUp = async () => {
		if (submitting) {
			return;
		}

		submitting = true;

		if (password2 !== password) {
			errorMessage = 'The two passwords must match';
		} else if (!isValidUrl(website)) {
			errorMessage = 'Please provide a valid URL of your website';
		} else {
			upload(files[0], 'profiles', `logos/${files[0].name}-${uuid()}`)
				.then(({ data, error }) => {
					if (error) {
						throw new Error(error.message);
					}

					return { uploadData: data };
				})
				.then(async (result) => {
					logo = (await getPublicUrl('profiles', result.uploadData.path)).data.publicUrl;

					return { ...result, logo };
				})
				.then(async (result) => {
					const { data, error } = await signUp(email, password);

					if (error) {
						throw new Error(error.message);
					}

					return { ...result, userId: data.user?.id };
				})
				.then(async (result) => {
					const { error } = await postItem('profiles', {
						company,
						userId: result.userId,
						website,
						logoBackground,
						location,
						logo
					});

					if (error) {
						throw new Error(error.message);
					}

					window.location.href = '/auth/email-confirmation-message';
				})
				.catch((error) => {
					errorMessage = error.message;
					submitting = false;
				});
		}
	};
</script>

<AuthWrapper>
	<Heading type="h1">Sign Up</Heading>

	<form on:submit|preventDefault={handleSignUp}>
		<TextInput bind:value={company} placeholder="Company Name..." required />

		<label for="logo">Pick your logo (SVG only): </label>

		<input accept=".svg" id="logo" type="file" bind:files />

		{#if files}
			<picture style:--logoBg={logoBackground}>
				<img src={URL.createObjectURL(files[0])} alt="logo" />
			</picture>

			<label for="color">Select a background color for your logo: </label>

			<input id="color" bind:value={logoBackground} type="color" />
		{/if}

		<TextInput bind:value={location} placeholder="Location..." required />

		<TextInput bind:value={website} placeholder="Website..." required />

		<TextInput bind:value={email} type="email" placeholder="Email..." required />

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

		<Button>{submitting ? 'Submitting...' : 'Sign up'}</Button>

		<p>Already have an account? <Link href="/auth/sign-in">Sign In Now</Link></p>
	</form>
</AuthWrapper>

<style lang="scss">
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	picture {
		display: grid;
		place-items: center;
		border-radius: 0.938rem;
		background-color: var(--logoBg);
		height: 5rem;
		width: 5rem;

		img {
			width: 70%;
		}
	}

	.error {
		color: var(--danger);
	}
</style>
