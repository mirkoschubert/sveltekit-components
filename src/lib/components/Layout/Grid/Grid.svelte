<script lang="ts">

  export let columns: string = '4'
  export let gap: string = '0'

  $: columns = Number(columns) > 6 ? '6' : columns
</script>

<div
  class="grid col-{columns}"
  role="grid"
  style:gap
  {...$$restProps}
>
  <slot />
</div>
