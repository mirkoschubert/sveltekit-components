<script lang="ts">
  import { afterNavigate } from '$app/navigation'
  import { Menu, MenuSection, MenuItem, Content, NotificationProvider } from '$lib/components'
  import { menu } from '$lib/stores/menu'
  import '$lib/sass/main.sass'
  
  afterNavigate(() => {
    if ($menu.opened) {
      menu.setOpened(false)
    }
  })

</script>

<NotificationProvider />
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
