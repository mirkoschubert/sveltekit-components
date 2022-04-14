<script lang="ts">
  import { ChevronRightIcon } from 'svelte-feather-icons'

  export let title: string = ''

  export let open: boolean = false
  export let disabled: boolean = false

  let animation: string = undefined


</script>

<li
  class="item"
  class:active={open}
  class:disabled
  class:expanding={animation === 'expanding'}
  class:collapsing={animation === 'collapsing'}
  {...$$restProps}
  on:animationend
  on:animationend={() => {
    animation = undefined
  }}
>
  <button
    type="button"
    class="heading"
    {disabled}
    {title}
    on:click
    on:click={() => {
      open = !open
      animation = open ? 'expanding' : 'collapsing'
    }}
  >
    <span class="title">{title}</span>
    <ChevronRightIcon size="16" />
  </button>
  <div class="body">
    <slot />
  </div>
</li>