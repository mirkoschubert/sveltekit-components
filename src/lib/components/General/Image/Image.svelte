<!-- <script lang="ts">
  import type { ImageField } from '@prismicio/types'
  import { asImageWidthSrcSet} from '@prismicio/helpers'

  export let image: ImageField = {}
  export let caption: boolean | string = false
  export let isPicture: boolean = false

  let item: { src: string, srcset: string }

  $: item = asImageWidthSrcSet(image)
  $: cpt = caption ? (typeof caption === 'string' ? caption : image.alt) : ''
  $: console.log(item, cpt)
</script>

{#if isPicture}
  <figure class="image">
    <picture>
      <source srcset={item.srcset} sizes="300w 600w 960w 1440w 3000w" />
      <img src={item.src} alt={image.alt} />
    </picture>
    <figcaption>{cpt}</figcaption>
  </figure>
{:else}
  <figure class="image">
    <img src={item.src} srcset={item.srcset} alt={image.alt} />
    <figcaption>{cpt}</figcaption>
  </figure>
{/if} -->