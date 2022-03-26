<script lang="ts">
  export let id: string = 'section'
  export let isFullWidth: boolean = false
  export let centered: boolean = false
</script>

<section
  {id}
  class="section"
  class:fullwidth={isFullWidth}
  class:centered= {centered}
  {...$$restProps}
>
  <div class="inner">
    <slot />
  </div>
</section>