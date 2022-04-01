<script lang="ts">
  export let id: string = 'section'
  export let isFullWidth: boolean = false
  export let centered: boolean = false
  export let spacing: string = undefined
</script>

<section
  {id}
  class="section"
  class:fullwidth={isFullWidth}
  class:centered= {centered}
  style="{spacing ? `padding: ${spacing} 0` : ''}"
  {...$$restProps}
>
  <div class="inner">
    <slot />
  </div>
</section>