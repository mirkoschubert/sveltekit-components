<script lang="ts">
  import type { RadioButtonGroupType } from '$lib/types'
  import { RadioButton } from '$lib/components'
  import { AlertCircleIcon, AlertTriangleIcon } from 'svelte-feather-icons'

  // Reactive
  export let ref: HTMLDivElement = undefined
  export let name: string = 'checkbox'
  
  // Content
  export let title: string
  export let data: RadioButtonGroupType | undefined = undefined
  export let invalidText: string = ''
  export let warningText: string = ''

  // States
  export let horizontal: boolean = false
  export let disabled: boolean = false
  export let required: boolean = false
  export let invalid: boolean = false
  export let warning: boolean = false
</script>

<div
  bind:this={ref}
  class="radio-group"
  class:horizontal={horizontal}
  class:invalid
  class:warning
  data-invalid={invalid || undefined}
  aria-invalid={invalid || undefined}
  {...$$restProps}
>
  {#if title}
    <p class="radio-group-title">{title}{#if required}<sup>*</sup>{/if}</p>
  {/if}
  <div class="radio-group-wrapper">

    {#if data}
      {#each data as item}
        <RadioButton
          {name}
          {disabled}
          id={item.id}
          label={item.label} />
      {/each}
    {:else}
      <slot />
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