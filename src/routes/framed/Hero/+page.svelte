<script>
  import { Header, HeaderLeft, HeaderLogo, Hero } from '$lib/components'
  import { ImageIcon } from 'svelte-feather-icons'
</script>

<Header isSticky>
  <HeaderLeft>
    <HeaderLogo>
      <ImageIcon size="32" />
    </HeaderLogo>
  </HeaderLeft>
</Header>
<Hero
  image="https://picsum.photos/seed/picsum/1440/900"
  alignment="bottomleft"
  height="100vh"
>
  <h1>Headline</h1>
  <h2>Subheadline</h2>
</Hero>