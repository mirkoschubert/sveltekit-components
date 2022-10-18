<script lang="ts">
  import {
    Header,
    HeaderLogo,
    HeaderIcon,
    HeaderLeft,
    HeaderCenter,
    HeaderRight,
    Search,
    ThemeProvider,
    Plausible,
    Content,
    Section,
    Button
  } from '$lib/components'
  import { ApertureIcon, GithubIcon } from 'svelte-feather-icons'
</script>

<svelte:head>
  <title>SvelteKit Components by Mirko Schubert</title>
</svelte:head>

<Plausible apiHost="https://plausible.speedynetz.de" domain="sveltekit-components.mirkoschubert.com" />
<ThemeProvider fromSystem />
<Header isSticky>
  <HeaderLeft>
    <HeaderLogo>
      <ApertureIcon size="32" />
    </HeaderLogo>
  </HeaderLeft>
  <HeaderCenter>
    <Search />
  </HeaderCenter>
  <HeaderRight>
    <HeaderIcon
      type="dark"
      href="https://github.com/mirkoschubert/sveltekit-components"
      title="Github SvelteKit Components"
    >
      <GithubIcon size="24" />
    </HeaderIcon>
  </HeaderRight>
</Header>
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
