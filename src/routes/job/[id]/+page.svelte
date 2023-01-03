<script lang="ts">
	import type { PageServerData } from './$types';
	import Heading from '$lib/components/Heading.svelte';
	import Button from '$lib/components/Button.svelte';

	export let data: PageServerData;

	const job = data.job;
</script>

<article>
	<header style:--logoBg={job.logoBackground}>
		<picture>
			<img src={job.logo} alt="{job.company} logo" />
		</picture>

		<div>
			<Heading as="span" type="h2">{job.company}</Heading>
			<span style="margin-top: 0.5rem;display: block;">
				{job.company.split(' ').join('').toLocaleLowerCase()}.com
			</span>
		</div>

		<Button as="a" href={job.website} kind="basic">Company Site</Button>
	</header>

	<div>
		<section>
			<span><time>{job.postedAt}</time><span>{job.contract}</span></span>
			<h1>{job.position}</h1>
			<span>{job.location}</span>
			<a href={job.apply}>Apply Now</a>
		</section>

		<section>
			<p>{job.description}</p>
		</section>

		<section>
			<h2>Requirements</h2>
			<p>{job.requirements.content}</p>
			<ul>
				{#each job.requirements.items as requirement}
					<li>
						{requirement}
					</li>
				{/each}
			</ul>
		</section>

		<section>
			<h2>What You Will Do</h2>
			<p>{job.role.content}</p>
			<ol>
				{#each job.role.items as role}
					<li>
						{role}
					</li>
				{/each}
			</ol>
		</section>
	</div>
</article>

<footer>
	<a href={job.apply}>Apply Now</a>
</footer>

<style>
	article {
		transform: translateY(-1rem);
		max-width: 45.625rem;
		margin-inline: auto;
	}

	header {
		display: grid;
		place-content: center;
		align-content: start;
		grid-template-rows: repeat(2, auto);
		gap: 1.5rem;
		padding-top: calc(1.5625rem + 1.5rem);
		padding-inline: 1.5rem;
		text-align: center;
		position: relative;
		background-color: var(--accentBg);
		border-radius: 0.375rem;
		height: 12.813rem;
		margin-bottom: 1.5rem;
	}

	picture {
		position: absolute;
		top: -1.5625rem;
		right: calc(50% - 1.5625rem);
		display: grid;
		place-content: center;
		place-items: center;
		border-radius: 0.938rem;
		background-color: var(--logoBg);
		height: 3.125rem;
		width: 3.125rem;
	}

	@media (min-width: 48rem) {
		article {
			transform: translateY(-3rem);
		}

		header {
			grid-template-columns: 8.75rem repeat(2, 1fr);
			align-items: center;
			justify-items: center;
			grid-template-rows: 1fr;
			gap: 2.5rem;
			padding: 0;
			height: 8.75rem;
			margin-bottom: 2rem;
			overflow: hidden;
			text-align: left;
		}

		header > div {
			justify-self: start;
		}

		picture {
			position: initial;
			border-radius: 0;
			height: 100%;
			width: 100%;
		}

		picture img {
			width: 5rem;
		}
	}
</style>
