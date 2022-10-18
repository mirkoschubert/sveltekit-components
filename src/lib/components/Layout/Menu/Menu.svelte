<script lang="ts">
  import { menu } from '$lib/stores/menu'
  import { MenuIcon, XIcon } from 'svelte-feather-icons'
</script>

<aside class="menu" class:menu-hidden={!$menu.opened}>
  <button class="btn btn-close" on:click={() => menu.setOpened(false)}>
    <XIcon size="16"/>
  </button>
  <nav class="menu-items">
    <slot />
  </nav>
</aside>
<button class="btn btn-menu" on:click={() => menu.setOpened(true)}>
  <MenuIcon size="24" />
</button>