<script lang="ts">
  import type { ImageType, AspectRatioType } from '$lib/types'
  import { AspectRatio } from '$lib/components'

  export let item: ImageType | string = ''
  export let alt: string = ''
  export let caption: string = ''
  export let ratio: AspectRatioType = '4x3'
  export let picture: boolean = false
</script>

<figure class="image">
  <AspectRatio {ratio}>
    {#if picture}
      <picture {...$$restProps}>
        {#if typeof item === 'string'}
          <img src={item} {alt} />
        {:else}
          <source srcset={item.responsive?.srcset} sizes="300w 600w 960w 1440w 3000w" />
          <img src={item.url} alt={item.alt} />
        {/if}
      </picture>
    {:else}
      {#if typeof item === 'string'}
        <img src={item} {alt}  {...$$restProps} />
      {:else}
        <img src={item.url} srcset={item.responsive?.srcset} alt={item.alt}  {...$$restProps} />
      {/if}
    {/if}
  </AspectRatio>
  {#if caption !== ''}
    <figcaption class="caption">{caption}</figcaption>
  {/if}
</figure>
