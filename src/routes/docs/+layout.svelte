<script lang="ts">
  import { afterNavigate } from '$app/navigation'
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
    Menu,
    MenuSection,
    MenuItem,
    Content,
    NotificationProvider
  } from '$lib/components'
  import { ApertureIcon, GithubIcon } from 'svelte-feather-icons'
  import { menu } from '$lib/stores/menu'
  import '$lib/sass/main.sass'
  
  afterNavigate(() => {
    if ($menu.opened) {
      menu.setOpened(false)
    }
  })

</script>

<Plausible apiHost="https://plausible.speedynetz.de" domain="sveltekit-components.mirkoschubert.com" />
<ThemeProvider fromSystem />
<NotificationProvider />
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
<Menu>
  {#each $menu.map as section}
    <MenuSection label={section.label}>
      {#if section.items}          
        {#each section.items as item}
          <MenuItem label={item.label} href={item.href} disabled={item.disabled ? true : null} tag={item.tag ? item.tag : null} />
        {/each}
      {/if}
    </MenuSection>
  {/each}
</Menu>
<Content>
  <slot />
</Content>
