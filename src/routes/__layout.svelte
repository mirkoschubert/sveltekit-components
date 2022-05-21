<script lang="ts">
  import { ApertureIcon, GithubIcon } from 'svelte-feather-icons'
  import {
    Header,
    HeaderLogo,
    HeaderLeft,
    HeaderCenter,
    HeaderRight,
    Link,
    Search,
    ThemeProvider,
    ThemeToggle,
    Plausible
  } from '$lib/components'
  import '$lib/sass/main.sass'
</script>

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
    <Link type="dark" href="https://github.com/mirkoschubert/sveltekit-components" title="Github SvelteKit Components">
      <GithubIcon size="24" />
    </Link>
    <ThemeToggle />
  </HeaderRight>
</Header>
<slot/>
