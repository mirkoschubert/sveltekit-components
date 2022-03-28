<script lang="ts">
  import type { DefinitionListType, OrientationType } from '$lib/types'
  import { DefinitionListItem } from '$components/DefinitionList'

  export let orientation: OrientationType = 'vertical'
  export let items: DefinitionListType = []
</script>

<div
  class="list"
  class:horizontal={orientation === 'horizontal'}
  {...$$restProps}
  on:click
  on:mouseenter
  on:mouseleave
>
  <dl>
    <slot>
      {#each items as item}
        <DefinitionListItem title={item.title} description={item.description} />
      {/each}
    </slot>
    </dl>
</div>