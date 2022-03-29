<script lang="ts">
  import type { FlexAlignmentType } from '$lib/types'
  import { Section } from '$lib/components'

  export let id: string = 'hero'
  export let image: string = undefined
  export let alignment: FlexAlignmentType = 'center'
  export let height: string = '61.8vh'
</script>

{#if image}
  <Section {id} class="hero" isFullWidth={true} style="height: calc({height} - var(--header-size)); background-image: url({image});" {...$$restProps}>
    <div class="hero-content {alignment}">
      <slot />
    </div>
  </Section>
{:else}
  <Section {id} class="hero" isFullWidth={true} style="height: calc({height} - var(--header-size));" {...$$restProps}>
    <div class="hero-content {alignment}">
      <slot />
    </div>
  </Section>
{/if}
