<script lang="ts">
	import { searchFor, getMoreOf } from '$lib/utils/apiClient';
	import type { PageServerData } from './$types';
	import SearchBar from '$lib/components/SearchBar.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Button from '$lib/components/Button.svelte';
	import TimeContract from '$lib/components/TimeContract.svelte';
	import type { AnyProp } from '$lib/types';
	import { timeFromNow } from '$lib/utils/helpers';

	export let data: PageServerData;

	let jobs = data.jobs;
	let hasMoreJobs = true;
	let isLoadingMoreJobs = false;
	let isSearching = false;
	let errorMessage = '';
	let searchTerms: AnyProp = {};

	const loadMore = async () => {
		isLoadingMoreJobs = true;
		errorMessage = '';
		try {
			const newJobs = await getMoreOf('jobs', jobs, searchTerms);
			if (newJobs.length === 0) {
				hasMoreJobs = false;
			}
			jobs = [...jobs, ...newJobs];
		} catch (error) {
			console.error(error);
			errorMessage = 'Something went wrong. Please try again.';
		}
		isLoadingMoreJobs = false;
	};

	const handleSearch = async (e: CustomEvent) => {
		isSearching = true;
		jobs = await searchFor('jobs', e.detail.searchTerms);
		searchTerms = e.detail.searchTerms;
		hasMoreJobs = true;
		isSearching = false;
	};
</script>

<SearchBar on:search={handleSearch} />

<section>
	{#if jobs.length !== 0 && !isSearching}
		<ul class="job-list">
			{#each jobs as job}
				<li style:--logoBg={job.logoBackground}>
					<a href="/job/{job.id}" class="job-card">
						<picture>
							<img src={job.logo} alt="{job.company} logo" />
						</picture>

						<TimeContract>
							<span slot="time">{timeFromNow(job.created_at)}</span>
							<span slot="contract">{job.contract}</span>
						</TimeContract>
						<Heading as="h2" type="h3">{job.position}</Heading>
						<p>{job.company}</p>
						<strong>{job.location}</strong>
					</a>
				</li>
			{/each}
		</ul>

		{#if errorMessage}
			<span style="color: red;">{errorMessage}</span>
		{/if}
		{#if hasMoreJobs}
			<Button on:btn-click={loadMore}>
				{#if isLoadingMoreJobs}
					Loading...
				{:else}
					Load More
				{/if}
			</Button>
		{/if}
	{:else if isSearching}
		<span>Searching...</span>
	{:else}
		<span>No jobs found for this search terms</span>
	{/if}
</section>

<style lang="scss">
	@use '$lib/scss/mixins' as *;

	section {
		display: flex;
		flex-direction: column;
		gap: 2rem;

		& > :global(button) {
			align-self: center;
		}

		@include md-bp {
			gap: 3.5rem;
		}
	}

	.job-list {
		list-style: none;
		margin-top: 3.563rem;
		padding: 0;
		display: grid;
		grid-template-rows: repeat(auto-fill, minmax(14.25rem, 1fr));
		row-gap: 3.063rem;

		@include md-bp {
			grid-template-columns: repeat(auto-fit, minmax(20.438rem, 1fr));
			column-gap: 0.688rem;
			margin-top: 4.375rem;
		}

		@include lg-bp {
			column-gap: 1.875rem;
		}
	}

	.job-card {
		position: relative;
		display: block;
		text-decoration: none;
		color: inherit;
		background-color: var(--accentBg);
		padding: 3.063rem 2rem 2rem 2rem;
		border-radius: 0.375rem;
		height: 100%;

		& picture {
			position: absolute;
			top: -1.5625rem;
			display: grid;
			place-content: center;
			place-items: center;
			border-radius: 0.938rem;
			background-color: var(--logoBg);
			height: 3.125rem;
			width: 3.125rem;
		}

		& > :global(:not(p)) {
			margin-bottom: 1rem;
		}

		& > p {
			margin-bottom: 2.563rem;
		}

		& > :last-child {
			color: var(--primary);
		}

		& > :global(*) {
			display: block;
		}
	}
</style>
