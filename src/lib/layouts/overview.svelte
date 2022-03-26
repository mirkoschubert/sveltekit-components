<script>
  import { Section } from '$lib/components'
  import 'prism-themes/themes/prism-duotone-sea.css'

  export let title
  export let layout

  $: console.log('Layout:', layout)
</script>

<Section>
  <h1>{title}</h1>
  <slot />
</Section>
