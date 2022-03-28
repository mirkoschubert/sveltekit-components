<script lang="ts">

  export let type: 'default' | 'dark' = 'default'
  export let size: 'sm' | 'md' | 'lg' = 'md'
  export let title: string = ''
</script>

<span
  class="tag"
  class:tag-sm={size === 'sm'}
  class:tag-md={size === 'md'}
  class:tag-lg={size === 'lg'}
  class:tag-dark={type === 'dark'}
  aria-label={title}
  {...$$restProps}
>
  <slot>
    {title}
  </slot>
</span>