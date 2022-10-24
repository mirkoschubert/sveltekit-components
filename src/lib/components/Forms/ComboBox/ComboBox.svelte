<script lang="ts">
  import type { DropdownItem, DropdownItems } from '$lib/types'
  import { ChevronDownIcon, XIcon, AlertCircleIcon, AlertTriangleIcon, TargetIcon } from 'svelte-feather-icons'

  // Reactive
  export let ref: HTMLInputElement = undefined
  export let name: string = 'combobox'
  export let open: boolean = false
  export let direction: 'auto' | 'top' | 'bottom' = 'bottom'
  export let inline: boolean = false
  export let value: string = ''

  // Content
  export let hideLabel: boolean = false
  export let label: string = undefined
  export let placeholder: string = ''
  export let description: string = undefined
  export let invalidText: string = ''
  export let warningText: string = ''

  // States
  export let disabled: boolean = false
  export let required: boolean = false
  export let invalid: boolean = false
  export let warning: boolean = false

  export let items: DropdownItems = []
  export let selectedItem: DropdownItem = undefined
  export let selectedId: string = undefined

  export let itemToString = (item: DropdownItem) => item.text || item.id
  export let shouldFilterItem = (item: DropdownItem, value: string) => {
    return item.text.toLowerCase().includes(value.toLowerCase())
  }

  let highlightedIndex = -1


  const change = (dir: number) => {
    let index = highlightedIndex + dir
    let _items = !filteredItems?.length ? items : filteredItems
    if (index < 0) {
      index = _items.length - 1
    } else if (index >= _items.length) {
      index = 0
    }
    let disabled = items[index].disabled;

    while (disabled) {
      index = index + dir

      if (index < 0) {
        index = items.length - 1
      } else if (index >= items.length) {
        index = 0
      }
      disabled = items[index].disabled
    }
    highlightedIndex = index
  }

/*   export const clear = (options = {}) => {
    prevSelectedId = null;
    highlightedIndex = -1;
    highlightedId = undefined;
    selectedId = undefined;
    selectedItem = undefined;
    open = false;
    value = "";
    if (options?.focus !== false) ref?.focus();
  }
 */

  $: selectedItem = items.find((item) => item.id === selectedId)
  $: if (!open) {
    highlightedIndex = -1
  }
  $: filteredItems = items.filter((item) => shouldFilterItem(item, value))
</script>

<div
  class="form-item combobox"
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
  {#if label}
    <div class="form-label" class:hidden={hideLabel} for={name}>{label}{#if required}<sup>*</sup>{/if}</div>
  {/if}
  <div class="form-element-wrapper">
    <input
      bind:this={ref}
      bind:value
      type="text"
      class="form-element"
      class:empty={value === ''}
      id={name}
      {name}
      {placeholder}
      {disabled}
      tabindex="0"
      autocomplete="off"
      aria-autocomplete="list"
      aria-expanded={open}
      aria-disabled={disabled}
      {...$$restProps}
      on:click
      on:click={(e) => {
        if (disabled) return
        open = !open
      }}
      on:input
      on:input={(e) => {
        if (!open && value.length > 0) {
          open = true
        }
        if (!value.length) {
          selectedId = undefined
          open = true
        }
      }}
      on:keydown
      on:keydown|stopPropagation={(e) => {
        if (['Enter', 'ArrowDown', 'ArrowUp'].includes(e.key)) {
          e.preventDefault()
        }
        if (e.key === 'Enter') {
          open = !open
          if (highlightedIndex > -1 && filteredItems[highlightedIndex]?.id !== selectedId) {
            open = false
            if (filteredItems[highlightedIndex]) {
              value = itemToString(filteredItems[highlightedIndex])
              selectedItem = filteredItems[highlightedIndex]
              selectedId = filteredItems[highlightedIndex].id
            }
          } else {
            const matchedItem = filteredItems.find((e) => 
              e.text.toLowerCase() === value?.toLowerCase() && !e.disabled) ?? filteredItems.find((e) => !e.disabled
            )
            if (matchedItem) {
              open = false
              selectedItem = matchedItem
              value = itemToString(selectedItem)
              selectedId = selectedItem.id
            }
          }
          highlightedIndex = -1
        } else if (e.key === 'Tab' || e.key === 'Escape') {
          open = false
        } else if (e.key === 'ArrowDown') {
          change(1)
        } else if (e.key === 'ArrowUp') {
          change(-1)
        }
      }}
    />
    <div class="form-element-icons">
      {#if invalid}
        <div class="form-element-icon invalid">
          <AlertCircleIcon size="16" />
        </div>
      {:else if warning}
        <div class="form-element-icon warning">
          <AlertTriangleIcon size="16" />
        </div>
      {/if}
      <button
        class="form-element-icon reset"
        class:show={value.length > 0}
        on:click={(e) => {
          e.preventDefault()
          value = ''
          selectedId = undefined
          open = false
        }}
      >
        <XIcon size="16" />
      </button>
      <div class="form-element-icon open-icon" class:open>
        <ChevronDownIcon size="16" />
      </div>
    </div>
    {#if open}      
        <ul role="listbox" class="dropdown-list {direction}">
          {#each filteredItems as item, i (item.id)}
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
                open = false
                if (filteredItems[i]) {
                  value = itemToString(filteredItems[i])
                }
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