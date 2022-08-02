<script lang="ts">

  export let type: 'default' | 'light' = 'default'
  export let sup: boolean = false
  export let title: string = ''
</script>

<span
  class="badge"
  class:badge-light={type === 'light'}
  class:badge-super={sup}
  aria-label={title}
  {...$$restProps}
>
  <slot>
    {title}
  </slot>
</span>