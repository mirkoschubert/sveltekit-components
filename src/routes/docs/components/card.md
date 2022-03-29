---
title: Card Component
layout: component
components: ['Card', 'CardHeading', 'CardImage', 'CardInfo']
---

<script>
  import { Card, CardHeading, CardImage, CardInfo, Button, Preview } from '$lib/components'
</script>

Non eu elit ad eu consectetur quis aute non deserunt sint officia anim. Ea deserunt ex magna sit laborum ipsum aute ex laboris anim. Do reprehenderit tempor quis labore in enim officia elit eiusmod. Quis tempor ad eu ut dolor ut proident id ullamco.

## Examples

### Default Card with Slots

<Card>
  <svelte:fragment slot="image">
    <CardImage image="https://picsum.photos/seed/picsum/400/300" title="SvelteKit" href="https://kit.svelte.dev/" />
  </svelte:fragment>
  <svelte:fragment slot="content">
    <CardHeading href="https://kit.svelte.dev/">SvelteKit</CardHeading>
    <CardInfo>Occaecat veniam amet ullamco commodo veniam ex sit culpa.</CardInfo>
  </svelte:fragment>
  <svelte:fragment slot="buttons">
    <Button href="https://kit.svelte.dev/">Visit</Button>
  </svelte:fragment>
</Card>

### Default Card with data prop

<Card
  data={{
    image: 'https://picsum.photos/seed/picsum/400/300',
    title: 'SvelteKit',
    description: 'Occaecat veniam amet ullamco commodo veniam ex sit culpa.',
    href: 'https://kit.svelte.dev/'
  }}
/>

### Card with List

<Card
  data={{
    title: 'SvelteKit',
    href: 'https://kit.svelte.dev/',
    list: [
      {title: 'Users', description: '24M' },
      {title: 'Net Worth', description: '130B' },
    ]
  }}
/>

### Card with Heading, Description & Buttons

<Card>
  <svelte:fragment slot="content">
    <CardHeading>SvelteKit</CardHeading>
    <CardInfo>Nulla irure commodo enim magna dolore.</CardInfo>
  </svelte:fragment>
  <svelte:fragment slot="buttons">
    <Button>Button 1</Button>
    <Button>Button 2</Button>
  </svelte:fragment>
</Card>
