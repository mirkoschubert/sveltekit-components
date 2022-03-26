<script lang="ts">
  import HeaderLogo from './HeaderLogo.svelte'

  export let isSticky: boolean = false
  //export let size: string = '4rem'

  
</script>

<header
  class="header"
  class:sticky={isSticky}
>
  <slot name="skip-to-content" />
  <slot name="logo">
    <HeaderLogo />
  </slot>
  <slot />
</header>
