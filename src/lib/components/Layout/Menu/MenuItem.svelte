<script lang="ts">
  import { page } from '$app/stores'
  import { Tag } from '$lib/components'

  export let label: string
  export let href: string
  export let disabled: boolean = false
  export let tag: string = ''

  $: active = $page.url.pathname === href
</script>

{#if disabled}
  <div class="menu-item" aria-disabled="true" data-disabled>
    {label}
    {#if tag}
      <Tag type="dark" size="sm">{tag}</Tag>
    {/if}
  </div>
{:else}
  <div class="menu-item" data-active={active ? true : null}>
    <a {href} title={label}>
      {label}
      {#if tag}
        <Tag type="dark" size="sm">{tag}</Tag>
      {/if}
    </a>
  </div>
{/if}