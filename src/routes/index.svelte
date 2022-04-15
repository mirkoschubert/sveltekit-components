<script lang="ts">
  import { Content, Section, Button } from '$lib/components'
</script>

<svelte:head>
  <title>SvelteKit Components by Mirko Schubert</title>
</svelte:head>

<Content centered>
  <Section centered>
    <div class="heading">
      <h1>SvelteKit Components</h1>
      <p>By Mirko Schubert</p>
      <p>An opinionated UI library with a lot of components exclusively for SvelteKit.</p>
      <Button size="lg" type="ghost" href="/docs/overview/introduction">Learn More</Button>
      <Button size="lg" href="/docs/overview/getting-started">Get Started</Button>
    </div>
  </Section>
</Content>
