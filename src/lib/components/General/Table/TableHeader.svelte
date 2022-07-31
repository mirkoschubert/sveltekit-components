<script lang="ts">
  import { ArrowUpIcon, ArrowDownIcon } from 'svelte-feather-icons'

  export let sortable = false
  export let sortDirection: 'none' | 'ascending' | 'descending' = 'none'
  export let active: boolean = false
  export let scope = "col"

  /**
   * Override the default id translations
   * @type {() => string}
   */
  export let translateWithId = () => ''

  /** Set an id for the top-level element */
  export let id = "ccs-" + Math.random().toString(36)

  // TODO: translate with id
  $: ariaLabel = translateWithId();
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
{#if sortable}
  <th
    aria-sort="{active ? sortDirection : 'none'}"
    scope="{scope}"
    data-header="{id}"
    {...$$restProps}
    on:mouseover
    on:mouseenter
    on:mouseleave
  >
    <button
      class:sort="{true}"
      class:sort--active="{active}"
      class:sort--ascending="{active &&
        sortDirection === 'descending'}"
      on:click
    >
      <div class:header-label="{true}">
        <slot />
      </div>
      <ArrowUpIcon
        class="sort-icon-asc"
        size="20px"
        aria-label={ariaLabel}
      />
      <ArrowDownIcon
        class="sort-icon-desc"
        size="20px"
        aria-label={ariaLabel}
      />
    </button>
  </th>
{:else}
  <th
    scope="{scope}"
    data-header="{id}"
    {...$$restProps}
    on:click
    on:mouseover
    on:mouseenter
    on:mouseleave
  >
    <div class:table-header-label="{true}">
      <slot />
    </div>
  </th>
{/if}