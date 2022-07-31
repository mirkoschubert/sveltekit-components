<script lang="ts">
  export let title: string = undefined
  export let description: string = undefined
  export let stickyHeader: boolean = false
  export let useStaticWidth: boolean = false
</script>

<div
  class="table-container"
  class:static={useStaticWidth}
  class:sticky={stickyHeader}
>
  {#if title}
    <h3 class="title">{title}</h3>
  {/if}
  {#if description}
    <p class="description">{description}</p>
  {/if}
  <slot />
</div>