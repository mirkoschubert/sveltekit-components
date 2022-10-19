<script lang="ts">

  // Reactive
  export let ref: HTMLInputElement = undefined
  
  export let id: string = 'option'
  export let name: string = 'checkbox'
  
  // Content
  export let hideLabel: boolean = false
  export let label: string = undefined
  
  // States
  export let disabled: boolean = false
  export let required: boolean = false
</script>

<div
  class="form-item radio"
  class:hide-label={hideLabel}
  class:disabled
  class:required
  on:click
  on:keydown
  on:keyup
  on:keypress
>
  <div class="form-element-wrapper">
    <input
      bind:this={ref}
      {id}
      class="form-element"
      type="radio"
      value={label}
      {name}
      {required}
      {disabled}
      {...$$restProps}
      on:input
      on:keydown
      on:keyup
      on:focus
      on:blur
      on:paste
    >
    {#if label}
      <label class="form-element-label" class:hidden={hideLabel} for={id}>{label}{#if required}<sup>*</sup>{/if}</label>
    {:else}
      <label class="form-element-label" class:hidden={hideLabel} for={id}>
        <slot />{#if required}<sup>*</sup>{/if}
      </label>
    {/if}
  </div>
</div>
