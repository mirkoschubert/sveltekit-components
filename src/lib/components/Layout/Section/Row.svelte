<script lang="ts">
  export let gap: string = undefined
</script>

<div
  class="row"
  style="{gap ? ` gap: ${gap}` : ''}"
  {...$$restProps}
>
  <slot />
</div>