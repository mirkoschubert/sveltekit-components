<script lang="ts">
  import { AlertCircleIcon, AlertTriangleIcon } from 'svelte-feather-icons'

  // Reactive
  export let ref: HTMLInputElement = undefined
  
  export let name: string = 'checkbox'
  
  // Content
  export let hideLabel: boolean = false
  export let label: string = undefined
  export let invalidText: string = ''
  export let warningText: string = ''
  
  // States
  export let disabled: boolean = false
  export let required: boolean = false
  export let invalid: boolean = false
  export let warning: boolean = false
</script>

<div
  class="form-item checkbox"
  class:hide-label={hideLabel}
  class:invalid
  class:warning
  class:disabled
  class:required
  data-invalid={invalid || undefined}
  aria-invalid={invalid || undefined}
  on:click
  on:keydown
  on:keyup
  on:keypress
>
  <div class="form-element-wrapper">
    <input
      bind:this={ref}
      id={name}
      class="form-element"
      type="checkbox"
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
      <label class="form-element-label" class:hidden={hideLabel} for={name}>{label}{#if required}<sup>*</sup>{/if}</label>
    {:else}
      <label class="form-element-label" class:hidden={hideLabel} for={name}>
        <slot />{#if required}<sup>*</sup>{/if}
      </label>
    {/if}
    {#if invalid}
      <div class="form-element-icon invalid">
        <AlertCircleIcon size="16" />
      </div>
    {:else if warning}
      <div class="form-element-icon warning">
        <AlertTriangleIcon size="16" />
      </div>
    {/if}
  </div>
  <div class="form-item-footer">
    {#if invalid}
      <div class="form-requirement invalid">{invalidText}</div>
    {/if}
    {#if warning}
      <div class="form-requirement warning">{warningText}</div>
    {/if}
  </div>
</div>
