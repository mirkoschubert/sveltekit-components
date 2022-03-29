<script lang="ts">
import Button from "../Button/Button.svelte"

  export let href: string = undefined
  export let title: string = ''
</script>

<li
  class="list-item"
  {...$$restProps}
  on:click
  on:mouseenter
  on:mouseleave
>
  {#if href}
    <a
      {href}
      {title}
      target={href.startsWith('http') ? '_blank' : ''}
    >
      <slot />
    </a>
  {:else}
    <slot />
  {/if}
</li>