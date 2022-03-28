<script lang="ts">
  import { onMount, afterUpdate, getContext, tick } from 'svelte'

  export let label: string = 'Tab 1'
  export let href: string = '#'
  export let ref: HTMLAnchorElement = null
  export let disabled: boolean = false

  export let id = "ccs-" + Math.random().toString(36)

  const { selectedTab, add, update, change } = getContext('Tabs')

  add({ id, label, disabled })

  let didMount = false

  $: selected = $selectedTab === id

  onMount(() => {
    tick().then(() => {
      didMount = true
    })
  })

  afterUpdate(() => {
    if (didMount && selected && ref) {
      ref.focus()
    }
  })
</script>

<li
  tabindex="-1"
  role="tab"
  aria-selected={selected}
  aria-disabled={disabled}
  class="tabs-nav-item"
  class:disabled
  class:selected
  {...$$restProps}
  on:click|preventDefault
  on:click|preventDefault="{() => {
    if (!disabled) {
      update(id);
    }
  }}"
>
  <a
    bind:this={ref}
    {href}
    {id}
  >
    <slot>{label}</slot>
  </a>
</li>