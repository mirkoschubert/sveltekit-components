<script lang="ts">
  import { Content, Section, Button } from '$lib/components'
</script>

<svelte:head>
  <title>SvelteKit Components by Mirko Schubert</title>
</svelte:head>

<Content>
  <Section centered>
    <div class="heading">
      <h1>SvelteKit Components</h1>
      <p>By Mirko Schubert</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus vel ipsam hic sunt eos accusantium quam, expedita ullam dignissimos quo veniam quae error id dicta quaerat deleniti aut impedit? Inventore.</p>
      <Button size="lg" type="ghost" href="/docs/overview/introduction">Learn More</Button>
      <Button size="lg" href="/docs/overview/getting-started">Get Started</Button>
    </div>
  </Section>
</Content>
