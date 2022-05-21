<script lang="ts">
  export let name: string = undefined
  export let description: string = undefined
  export let image: string
  export let href: string = undefined
  export let size: 'sm' | 'md' | 'lg' = 'md'
  export let permanent: boolean = false
</script>

{#if href}
  <a
    class="avatar avatar-{size}"
    class:permanent
    {href}
    rel={href.startsWith('http') ? 'noreferrer noopener' : ''}
    target={href.startsWith('http') ? '_blank' : ''}
    {...$$restProps}
    on:click
  >
    <div class="avatar-image">
      <img src={image} alt={name ? name : ''}>
    </div>
    {#if name}
      <div class="avatar-content">
        <span class="name">{name}</span>
        {#if description}
          <span class="description">{description}</span>
        {/if}
      </div>
    {/if}
  </a>
{:else}
  <div
    class="avatar avatar-{size}"
    class:permanent
    {...$$restProps}
  >
    <div class="avatar-image">
      <img src={image} alt={name ? name : ''}>
    </div>
    {#if name}
      <div class="avatar-content">
        <span class="name">{name}</span>
        {#if description}
          <span class="description">{description}</span>
        {/if}
      </div>
    {/if}
  </div>
{/if}