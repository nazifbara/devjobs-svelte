<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	const job = data.job;
</script>

<article>
	<header>
		<picture>
			<img src={job.logo} alt="{job.company} logo" />
			<span>{job.company.split(' ').join('').toLocaleLowerCase()}.com</span>
			<a href={job.website}>Company Site</a>
		</picture>
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
