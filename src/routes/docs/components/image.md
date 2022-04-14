---
title: Image Component
layout: component
components: ['Image']
---

<script>
  import { Image, Preview } from '$lib/components'
</script>

Non reprehenderit laborum commodo culpa sit reprehenderit. Reprehenderit commodo aute nostrud est adipisicing fugiat cillum aliqua. Et qui consectetur officia fugiat minim excepteur ad ut nulla ut fugiat pariatur. Dolore labore anim excepteur ipsum qui.

## Examples

### Default Image

Nostrud elit cupidatat anim fugiat.

<Image
  item="https://picsum.photos/seed/picsum/800/600"
  alt="Alt Text"
  ratio="16x9"
/>

### Image as picture element

Eiusmod quis officia laboris quis adipisicing.

<Image
  picture
  item="https://picsum.photos/seed/picsum/800/600"
  alt="Alt Text"
  ratio="16x9"
/>

### Image as picture element and caption

Eiusmod quis officia laboris quis adipisicing.

<Image
  picture
  item="https://picsum.photos/seed/picsum/800/600"
  alt="Alt Text"
  ratio="16x9"
  caption="&copy; by Picsum & Unsplash"
/>
