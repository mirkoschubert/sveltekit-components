<script lang="ts">
  import { ApertureIcon } from 'svelte-feather-icons'
  import {
    Header,
    HeaderLogo,
    HeaderLeft,
    HeaderCenter,
    HeaderRight,
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
    <ThemeToggle />
  </HeaderRight>
</Header>
<slot/>
