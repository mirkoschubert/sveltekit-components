<script lang="ts">
  export let width: string = undefined
</script>

<div
  class="column"
  style="{width ? `width: ${width};` : ''}"
  {...$$restProps}
>
  <slot />
</div>