<script lang="ts">
  import { ApertureIcon } from 'svelte-feather-icons'
  import { Header, HeaderLogo } from '$lib/components'
  import '$lib/sass/main.sass'
</script>

<Header isSticky>
  <svelte:fragment slot="logo">
    <HeaderLogo>
      <ApertureIcon size="32" />
    </HeaderLogo>
  </svelte:fragment>
</Header>
<slot/>
