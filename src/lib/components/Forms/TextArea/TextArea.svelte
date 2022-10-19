<script lang="ts">
  import { AlertCircleIcon, AlertTriangleIcon } from 'svelte-feather-icons'

  // Reactive
  export let ref: HTMLTextAreaElement = undefined
  export let name: string = 'username'

  // Content
  export let rows: number = 5
  export let maxLength: number = undefined
  export let hideLabel: boolean = false
  export let label: string = undefined
  export let placeholder: string = undefined
  export let description: string = undefined
  export let warningText: string = ''
  export let invalidText: string = ''

  // States
  export let disabled: boolean = false
  export let required: boolean = false
  export let invalid: boolean = false
  export let warning: boolean = false

  let length: number = 0
  let value: string

  $: count = value ? value.length : 0

</script>

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
  on:keydown
  on:keyup
  on:keypress
>
  {#if label}
    <label class="form-label" class:hidden={hideLabel} for={name}>{label}{#if required}<sup>*</sup>{/if}</label>
  {/if}
  <div class="form-element-wrapper">
    <textarea
      bind:this={ref}
      bind:value={value}
      id={name}
      class="form-element textarea"
      maxlength={maxLength}
      {name}
      {placeholder}
      {rows}
      {disabled}
      {...$$restProps}
    ></textarea>
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
    {#if !invalid && !warning && description}
      <div class="form-item-description">{description}</div>
    {/if}
    {#if invalid}
      <div class="form-requirement invalid">{invalidText}</div>
    {/if}
    {#if warning}
      <div class="form-requirement warning">{warningText}</div>
    {/if}
    {#if maxLength}
      <div
        class="form-item-length"
        class:warning={count >= maxLength * .8 && count < maxLength}
        class:full={count >= maxLength}
      >{count}/{maxLength}</div>
    {/if}
  </div>
</div>