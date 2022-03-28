<script>
  import { Header, HeaderLogo } from '$lib/components'
  import { ImageIcon } from 'svelte-feather-icons'
</script>

<Header>
  <svelte:fragment slot="logo">
    <HeaderLogo>
      <ImageIcon size="32" />
    </HeaderLogo>
  </svelte:fragment>
</Header>