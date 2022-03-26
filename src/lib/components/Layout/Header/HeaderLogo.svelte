<script lang="ts">
  export let title: string = undefined
  export let image: string = undefined
</script>

<div class="logo">
  <a href="/" title={title}>
  <slot>
    {#if image}
      <img class="image" src={image} alt={title} />
    {/if}
    {#if title}
      <span class="title">{title}</span>
    {/if}
  </slot>
  </a>
</div>
