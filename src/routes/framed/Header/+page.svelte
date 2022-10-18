<script>
  import { Header, HeaderLeft, HeaderCenter, HeaderRight, HeaderLogo, Search, ThemeToggle } from '$lib/components'
  import { ImageIcon } from 'svelte-feather-icons'
</script>

<Header>
  <HeaderLeft>
    <HeaderLogo>
      <ImageIcon size="32" />
    </HeaderLogo>
  </HeaderLeft>
  <HeaderCenter>
    <Search />
  </HeaderCenter>
  <HeaderRight>
    <ThemeToggle />
  </HeaderRight>
</Header>