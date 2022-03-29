<script lang="ts">
  export let image: string
  export let title: string
  export let href: string = undefined
</script>

<div class="image">
  {#if href}
    <a {href} {title}>
      <img src={image} alt={title} loading="lazy" />
      <div class="overlay"></div>
    </a>
  {:else}
    <img src={image} alt={title} loading="lazy" />
    <div class="overlay"></div>
  {/if}
</div>