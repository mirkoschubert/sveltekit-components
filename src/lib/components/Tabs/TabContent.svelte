<script>
  import { getContext } from 'svelte'

  export let id = "ccs-" + Math.random().toString(36)

  const { selectedContent, addContent, tabs, contentById } = getContext("Tabs")

  addContent({ id })

  $: selected = $selectedContent === id
  $: index = $contentById[id].index
  $: tabId = $tabs[index].id
</script>

<div
  id="{id}"
  class="tab-content"
  class:hidden={!selected}
  role="tabpanel"
  aria-labelledby={tabId}
  aria-hidden={!selected}
  {...$$restProps}
>
  <slot />
</div>