<script lang="ts">

  export let type: 'unordered' | 'ordered' = 'unordered'
  export let nested: boolean = false
</script>

{#if type === 'unordered'}
  <ul
    class="list"
    class:nested
    {...$$restProps}
    on:click
    on:focus
    on:mouseenter
    on:mouseover
    on:mouseleave
  >
    <slot />
  </ul>
{:else if type === 'ordered'}
  <ol
    class="list"
    class:nested
    {...$$restProps}
    on:click
    on:focus
    on:mouseenter
    on:mouseover
    on:mouseleave
  >
    <slot />
  </ol>
{/if}