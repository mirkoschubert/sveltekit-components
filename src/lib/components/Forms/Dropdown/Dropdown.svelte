<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import type { DropdownItem, DropdownItems } from '$lib/types'
  import { ChevronDownIcon, AlertCircleIcon, AlertTriangleIcon } from 'svelte-feather-icons'

  // Reactive
  export let ref: HTMLButtonElement = undefined
  export let name: string = 'dropdown'
  export let open: boolean = false
  export let direction: 'top' | 'bottom' = 'bottom'
  export let inline: boolean = false

  // Content
  export let hideLabel: boolean = false
  export let label: string = undefined
  export let description: string = undefined
  export let invalidText: string = ''
  export let warningText: string = ''
  
  // States
  export let disabled: boolean = false
  export let required: boolean = false
  export let invalid: boolean = false
  export let warning: boolean = false

  export let items: DropdownItems = []
  export let selectedItem: DropdownItem
  export let selectedId: string = undefined
  export let itemToString = (item: DropdownItem) => item.text || item.id

  const dispatch = createEventDispatcher();

  let highlightedIndex = -1;

  function change(dir: number) {
    let index = highlightedIndex + dir;

    if (index < 0) {
      index = items.length - 1;
    } else if (index >= items.length) {
      index = 0;
    }
    let disabled = items[index].disabled;
    while (disabled) {
      index = index + dir;
      if (index < 0) {
        index = items.length - 1;
      } else if (index >= items.length) {
        index = 0;
      }
      disabled = items[index].disabled;
    }
    highlightedIndex = index;
  }

  $: if (selectedId !== undefined) {
    dispatch("select", { selectedId, selectedItem })
  }
  $: selectedItem = items.find((item) => item.id === selectedId)
  $: if (!open) {
    highlightedIndex = -1;
  }
</script>

<!-- <svelte:window
  on:click="{({ target }) => {
    if (open && ref && !ref.contains(target)) {
      open = false;
    }
  }}"
/> -->

<div
class="form-item dropdown"
class:hide-label={hideLabel}
class:inline
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
    {#if label}
      <label class="form-label" class:hidden={hideLabel} for={name}>{label}{#if required}<sup>*</sup>{/if}</label>
    {/if}
    <div class="dropdown-wrapper">

      <button
        bind:this={ref}
        type="button"
        class="form-element"
        id={name}
        tabindex="0"
        aria-expanded="{open}"
        on:click={() => {
          if (disabled) return
          open = !open
        }}
        on:keydown={(e) => {
          const { key } = e
          if (['Enter', 'ArrowDown', 'ArrowUp'].includes(key)) {
            e.preventDefault()
          }
          if (key === 'Enter') {
            open = !open
            if (highlightedIndex === -1 && selectedId) highlightedIndex = items.findIndex(x => x.id === selectedId)
            if (
              highlightedIndex > -1 &&
              items[highlightedIndex].id !== selectedId
            ) {
              selectedId = items[highlightedIndex].id
              open = false
            }
          } else if (key === 'Tab') {
            open = false
            ref.blur()
          } else if (key === 'ArrowDown') {
            change(1)
          } else if (key === 'ArrowUp') {
            change(-1)
          } else if (key === 'Escape') {
            open = false
          }
        }}
        {disabled}
      >
        <span class="dropdown-label">
          {#if selectedItem}{itemToString(selectedItem)}{:else}<span class="not-selected">Select</span>{/if}
        </span>
        {#if invalid}
          <div class="form-element-icon invalid">
            <AlertCircleIcon size="16" />
          </div>
        {:else if warning}
          <div class="form-element-icon warning">
            <AlertTriangleIcon size="16" />
          </div>
        {/if}
        <div class="dropdown-list-icon" class:open>
          <ChevronDownIcon size="16" />
        </div>
      </button>
      {#if open}      
        <ul role="listbox" class="dropdown-list {direction}">
          {#each items as item, i (item.id)}
            <li
              role="option"
              aria-selected={item.id === selectedId}
              class="dropdown-list-item"
              class:active={item.id === selectedId}
              class:highlighted={highlightedIndex === i}
              class:disabled={item.disabled}
              id={item.id}
              on:click={(e) => {
                if (item.disabled) {
                  e.stopPropagation()
                  return
                }
                selectedId = item.id
                ref.focus()
                open = false
              }}
              on:mouseenter={() => {
                if (item.disabled) return
                highlightedIndex = i
              }}
              on:keydown
            >
              {itemToString(item)}
            </li>
          {/each}
        </ul>
      {/if}
    </div>
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
  </div>
</div>