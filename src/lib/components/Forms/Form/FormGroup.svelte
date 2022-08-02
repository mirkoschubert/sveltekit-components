<script lang="ts">
  export let message: string = undefined
  export let legend: string = undefined
  export let legendId: string = undefined
  export let invalid: boolean = false
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<fieldset
  class="form-group"
  data-invalid="{invalid || undefined}"
  aria-labelledby="{$$restProps['aria-labelledby'] || legendId}"
  {...$$restProps}
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
>
  {#if legend}    
    <legend
      class="form-group-legend"
      id="{legendId || $$restProps['aria-labelledby']}"
    >
      {legend}
    </legend>
  {/if}
  <slot />
  {#if message}
    <div class="form-requirement">{message}</div>
  {/if}
</fieldset>