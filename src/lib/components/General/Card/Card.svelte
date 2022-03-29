<script lang="ts">
  import type { CardType } from '$lib/types'
  import { CardHeading, CardImage, CardInfo, DefinitionList } from '$lib/components'

  export let data: CardType = {}
</script>

<div class="card" {...$$restProps}>
  <slot name="image">
    {#if data.image}
    <CardImage image={data.image} title={data.title} href={data.href} />
    {/if}
  </slot>
  <div class="info">
    <slot name="content">
      <CardHeading href={data.href} title={data.title} />
      {#if data.description}
        <CardInfo content={data.description} />
      {/if}
      {#if data.list}
        <DefinitionList items={data.list} />
      {/if}
    </slot>
  </div>
  <div class="buttons">
    <slot name="buttons" />
  </div>
</div>
