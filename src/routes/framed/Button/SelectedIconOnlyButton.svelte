<script>
  import { Button } from '$lib/components'
  import { BoldIcon, ItalicIcon, UnderlineIcon } from 'svelte-feather-icons'

  let index = 1;
</script>

<Button
  hasIcon
  selected="{index === 0}"
  type="ghost"
  on:click="{() => (index = 0)}"
>
  <svelte:fragment slot="icon">
    <BoldIcon size="16" />
  </svelte:fragment>
</Button>
<Button
  hasIcon
  selected="{index === 1}"
  type="ghost"
  on:click="{() => (index = 1)}"
>
  <svelte:fragment slot="icon">
    <ItalicIcon size="16" />
  </svelte:fragment>
</Button>
<Button
  hasIcon
  selected="{index === 2}"
  type="ghost"
  on:click="{() => (index = 2)}"
>
  <svelte:fragment slot="icon">
    <UnderlineIcon size="16" />
  </svelte:fragment>
</Button>