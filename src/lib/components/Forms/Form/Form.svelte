<script lang="ts">
  export let ref: HTMLFormElement = null
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<form
  class="form"
  bind:this={ref}
  {...$$restProps}
  on:click
  on:keydown
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:submit
>
  <slot />
</form>