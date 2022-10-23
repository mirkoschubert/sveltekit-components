<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  // Reactive
  export let ref: HTMLInputElement = undefined
  export let name: string = 'toggle'
  export let checked: boolean = false
  export let inline: boolean = false
  export let size: 'md' | 'sm' = 'md'

  // Content
  export let hideLabel: boolean = false
  export let label: string = undefined
  export let offLabel: string = 'Off'
  export let onLabel: string = 'On'

  // States
  export let disabled: boolean = false
  export let required: boolean = false


  const dispatch = createEventDispatcher()

  $: dispatch('toggle', { checked })
  $: console.log('Checked:', checked)
</script>

<div
  class="form-item toggle {size}"
  class:hide-label={hideLabel}
  class:inline
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
    id={name}
    class="form-element"
    role="switch"
    type="checkbox"
    {checked}
    {name}
    {required}
    {disabled}
    {...$$restProps}
    on:change
    on:change={() => {
      checked = !checked
    }}
    on:keyup
    on:keyup={(e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        checked = !checked
      }
    }}
    on:focus
    on:blur
    />
    <label class="form-toggle-label" for={name}>
      {#if label}
        <span class="form-label" class:hidden={hideLabel}>{label}{#if required}<sup>*</sup>{/if}</span>
      {/if}
      
      <span class="toggle-switch">
        {#if !inline}
          <span class="off-label">{offLabel}</span>
          <span class="on-label">{onLabel}</span>
        {/if}
      </span>
    </label>
  </div>
</div>