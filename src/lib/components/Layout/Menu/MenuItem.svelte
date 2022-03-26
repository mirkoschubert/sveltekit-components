<script lang="ts">
  import { page } from '$app/stores'

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
      <span class="tag">{tag}</span>
    {/if}
  </div>
  {:else}
  <div class="menu-item" data-active={active ? true : null}>
    <a {href} title={label}>
      {label}
      {#if tag}
        <span class="tag">{tag}</span>
      {/if}
    </a>
  </div>
{/if}