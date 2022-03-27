<script>
  import { Section } from '$lib/components'
  import 'prism-themes/themes/prism-duotone-sea.css'

  export let title
  export let layout
  export let components

  $: console.log('Layout:', layout)
  $: console.log('Components:', components)
</script>

<Section>
  <h1>{title}</h1>
  <slot />
</Section>
