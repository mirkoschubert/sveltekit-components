<script lang="ts">
  export let title: string = undefined
  export let href: string = undefined
</script>

<div class="heading">
  {#if href}
    {#if title}
      <a {href} {title}><h3>{title}</h3></a>
    {:else}
      <a {href}><h3><slot /></h3></a>
    {/if}
  {:else}
    {#if title}
      <h3>{title}</h3>
    {:else}
      <h3><slot /></h3>
    {/if}
  {/if}
</div>