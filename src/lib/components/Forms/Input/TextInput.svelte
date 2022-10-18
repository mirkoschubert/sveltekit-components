<script lang="ts">
  import { AlertCircleIcon, AlertTriangleIcon } from 'svelte-feather-icons'

  // Reactive
  export let ref: HTMLInputElement = undefined
  export let value: string = ''

  export let name: string = 'username'
  export let type: 'text' | 'password' | 'email' | 'tel' | 'url' = 'text'
  
  // Content
  export let hideLabel: boolean = false
  export let label: string = undefined
  export let placeholder: string = undefined
  export let description: string = undefined
  export let autocomplete: string = undefined
  export let invalidText: string = ''
  export let warningText: string = ''
  
  // States
  export let disabled: boolean = false
  export let required: boolean = false
  export let invalid: boolean = false
  export let warning: boolean = false
  
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
  class="form-item"
  class:hide-label={hideLabel}
  class:invalid
  class:warning
  class:disabled
  class:required
  data-invalid={invalid || undefined}
  aria-invalid={invalid || undefined}
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
>
  {#if label}
    <label class="form-label" class:hidden={hideLabel} for={name}>{label}{#if required}<sup>*</sup>{/if}</label>
  {/if}
  <div class="text-input-wrapper">
    <input 
      bind:this={ref}
      id={name}
      class="text-input"
      value={value ?? ''}
      {name}
      {placeholder}
      {type}
      {autocomplete}
      {required}
      {disabled}
      {...$$restProps}
      on:change
      on:input
      on:keydown
      on:keyup
      on:focus
      on:blur
      on:paste
    />
    <slot name="input-icon" />
    {#if invalid}
      <div class="text-input-icon invalid">
        <AlertCircleIcon size="16" />
      </div>
    {:else if warning}
      <div class="text-input-icon warning">
        <AlertTriangleIcon size="16" />
      </div>
    {/if}
  </div>
  {#if !invalid && !warning && description}
    <div class="form-item-description">{description}</div>
  {/if}
  {#if invalid}
    <div class="form-requirement invalid">{invalidText}</div>
  {/if}
  {#if warning}
    <div class="form-requirement warning">{warningText}</div>
  {/if}
</div>