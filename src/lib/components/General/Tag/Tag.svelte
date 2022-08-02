<script lang="ts">
  import { Link } from '$lib/components'

  export let type: 'default' | 'dark' = 'default'
  export let size: 'sm' | 'md' = 'md'
  export let title: string = ''
  export let href: string = undefined
</script>

<span
  class="tag"
  class:tag-sm={size === 'sm'}
  class:tag-md={size === 'md'}
  class:tag-dark={type === 'dark'}
  aria-label={title}
  {...$$restProps}
>
  {#if href}
    <Link {href} {title}>
      <slot>{title}</slot>
    </Link>
  {:else}
    <slot>{title}</slot>    
  {/if}
</span>