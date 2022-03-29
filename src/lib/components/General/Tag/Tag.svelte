<script lang="ts">

  export let type: 'default' | 'dark' = 'default'
  export let size: 'sm' | 'md' = 'md'
  export let title: string = ''
</script>

<span
  class="tag"
  class:tag-sm={size === 'sm'}
  class:tag-md={size === 'md'}
  class:tag-dark={type === 'dark'}
  aria-label={title}
  {...$$restProps}
>
  <slot>
    {title}
  </slot>
</span>