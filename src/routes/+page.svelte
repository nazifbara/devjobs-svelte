<script lang="ts">
	import SearchBar from '$lib/components/SearchBar.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Button from '$lib/components/Button.svelte';
	import { jobs } from '$lib/store';
</script>

<SearchBar />

<section>
	<ul class="job-list">
		{#each $jobs as job}
			<li style:--logoBg={job.logoBackground}>
				<a href="/job/{job.id}" class="job-card">
					<picture>
						<img src={job.logo} alt="{job.company} logo" />
					</picture>

					<span><time>{job.postedAt}</time><span>{job.contract}</span></span>
					<Heading as="h2" type="h3">{job.position}</Heading>
					<p>{job.company}</p>
					<strong>{job.location}</strong>
				</a>
			</li>
		{/each}
	</ul>

	<Button>Load More</Button>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	section > :global(button) {
		align-self: center;
	}
	.job-list {
		list-style: none;
		margin-top: 3.563rem;
		padding: 0;
		display: grid;
		grid-template-rows: repeat(auto-fill, minmax(14.25rem, 1fr));
		row-gap: 3.063rem;
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
	}

	.job-card picture {
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

	.job-card time::after {
		content: '';
		display: inline-block;
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background-color: var(--accentText);
		margin-inline: 0.75rem;
	}

	.job-card > :global(:not(p)) {
		margin-bottom: 1rem;
	}

	.job-card > p {
		margin-bottom: 2.563rem;
	}

	.job-card > :last-child {
		color: var(--primary);
	}

	.job-card > :global(*) {
		display: block;
	}

	@media (min-width: 48rem) {
		section {
			gap: 3.5rem;
		}
		.job-list {
			grid-template-columns: repeat(auto-fit, minmax(20.438rem, 1fr));
			column-gap: 0.688rem;
			margin-top: 4.375rem;
		}
	}

	@media (min-width: 69.375rem) {
		section {
			gap: 3.5rem;
		}

		.job-list {
			column-gap: 1.875rem;
		}
	}
</style>
