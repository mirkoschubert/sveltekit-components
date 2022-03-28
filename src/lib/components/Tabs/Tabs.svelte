<script lang="ts">
  import { createEventDispatcher, afterUpdate, setContext } from 'svelte'
  import { writable, derived } from 'svelte/store'

  export let selected: number = 0

  const dispatch = createEventDispatcher()
  
  const tabs = writable([])
  const tabsById = derived(tabs, (_) =>
    _.reduce((a, c) => ({ ...a, [c.id]: c }), {})
  )
  const selectedTab = writable(undefined)
  
  const content = writable([])
  const contentById = derived(content, (_) =>
    _.reduce((a, c) => ({ ...a, [c.id]: c }), {})
  )
  const selectedContent = writable(undefined)

  setContext("Tabs", {
    tabs,
    contentById,
    selectedTab,
    selectedContent,
    add: (data) => {
      tabs.update((_) => [..._, { ...data, index: _.length }])
    },
    addContent: (data) => {
      content.update((_) => [..._, { ...data, index: _.length }])
    },
    update: (id) => {
      currentIndex = $tabsById[id].index
      dispatch("change", currentIndex)
    }
  })

  afterUpdate(() => {
    selected = currentIndex
  })

  let currentIndex = selected

  $: currentIndex = selected
  $: currentTab = $tabs[currentIndex] || undefined
  $: currentContent = $content[currentIndex] || undefined

  $: {
    if (currentTab) {
      selectedTab.set(currentTab.id)
    }
    if (currentContent) {
      selectedContent.set(currentContent.id)
    }
  }

</script>

<div role="navigation" class="tabs" {...$$restProps}>
  <ul role="tablist" class="tabs-nav">
    <slot />
  </ul>
</div>
<slot name="content" />