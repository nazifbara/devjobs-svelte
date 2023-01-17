<script lang="ts">
	import type { PageServerData } from './$types';
	import Heading from '$lib/components/Heading.svelte';
	import Button from '$lib/components/Button.svelte';
	import TimeContract from '$lib/components/TimeContract.svelte';

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

	<div class="content">
		<section class="position">
			<div class="text">
				<TimeContract>
					<span slot="time">{job.created_at}</span>
					<span slot="contract">{job.contract}</span>
				</TimeContract>
				<Heading type="h1">{job.position}</Heading>
				<span class="location">{job.location}</span>
			</div>

			<Button as="a" kind="primary" href={job.apply}>Apply Now</Button>
		</section>

		<section>
			<p>{job.description}</p>
		</section>

		<section>
			<Heading as="h2" type="h3">Requirements</Heading>
			<p>{job.requirements_content}</p>
			<ul>
				{#each job.requirements_items as requirement}
					<li>
						{requirement}
					</li>
				{/each}
			</ul>
		</section>

		<section>
			<Heading as="h2" type="h3">What You Will Do</Heading>
			<p>{job.role_content}</p>
			<ol>
				{#each job.role_items as role, i}
					<li>
						<span>{i + 1}</span>
						{role}
					</li>
				{/each}
			</ol>
		</section>
	</div>
</article>

<footer>
	<div>
		<div>
			<Heading as="h2" type="h3">
				{job.position}
			</Heading>
			<span>So Digital Inc.</span>
		</div>
		<Button as="a" href={job.apply}>Apply Now</Button>
	</div>
</footer>

<style lang="scss">
	@use '$lib/scss/mixins' as *;

	article {
		transform: translateY(-1rem);
		max-width: 45.625rem;
		margin-inline: auto;

		> * {
			border-radius: 0.375rem;
		}

		@include md-bp {
			transform: translateY(-3rem);
		}
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
		height: 12.813rem;
		margin-bottom: 1.5rem;

		@include md-bp {
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

			> div {
				justify-self: start;
			}
		}
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

		@include md-bp {
			position: initial;
			border-radius: 0;
			height: 100%;
			width: 100%;

			img {
				width: 5rem;
			}
		}
	}

	footer {
		background-color: var(--accentBg);
		padding: 1.5rem;
		position: absolute;
		right: 0;
		left: 0;

		> div {
			max-width: 45.625rem;
			margin-inline: auto;

			@include md-bp {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		}

		> div > div {
			display: none;

			@include md-bp {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;
			}
		}
	}
	.content {
		display: grid;
		gap: 2rem;
		background-color: var(--accentBg);
		padding: 1.5rem;
		line-height: 1.625rem;

		:global(h2) {
			margin-bottom: 1.5rem;
		}

		@include md-bp {
			padding: 3rem;
		}
	}

	.position {
		display: grid;
		gap: 3.125rem;

		@include md-bp {
			grid-template-columns: 1fr minmax(auto, 8.75rem);
			align-items: center;
			gap: 1rem;
		}

		.text {
			display: grid;
			gap: 0.25rem;

			@include md-bp {
				gap: 0.5rem;
			}
		}

		.location {
			color: var(--primary);
			font-weight: 700;
		}
	}

	ul,
	ol {
		margin-top: 2rem;
		padding: 0;
		list-style: none;
		display: grid;
		gap: 0.5rem;
	}

	ul li,
	ol li {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 1.5rem;
	}

	ul li::before,
	ol li > *:first-child {
		color: var(--primary);
		font-weight: bold;
		display: inline-block;
	}

	ul li::before {
		content: '\2022';
	}
</style>
