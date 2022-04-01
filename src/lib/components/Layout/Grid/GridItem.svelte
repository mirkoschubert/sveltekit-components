<script lang="ts">

  export let colSpan: string = undefined
  export let rowSpan: string = undefined

  $: colSpan = Number(colSpan) > 6 ? '6' : colSpan
  $: rowSpan = Number(rowSpan) > 3 ? '3' : rowSpan
</script>

<div
  class="grid-item{colSpan ? ` col-${colSpan}`: ''}{rowSpan ? ` row-${rowSpan}`: ''}"
  role="gridcell"
  {...$$restProps}
>
  <slot />
</div>