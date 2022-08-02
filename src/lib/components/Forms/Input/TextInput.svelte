<script lang="ts">

  export let ref: HTMLInputElement = undefined
  export let name: string = 'username'
  export let type: 'text' | 'password' | 'email' | 'tel' | 'url' = 'text'

  export let label: string = undefined
  export let placeholder: string = undefined
  export let description: string = undefined
  export let autocomplete: string = undefined
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
  class="form-item"
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
>
  {#if label}
    <label class="form-label" for={name}>{label}</label>
  {/if}
  <div class="text-input-wrapper">
    <input 
      bind:this={ref}
      id={name}
      {name}
      {placeholder}
      {type}
      {autocomplete}
      class="text-input"
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
  </div>
  {#if description}
    <div class="form-item-description">{description}</div>
  {/if}
</div>