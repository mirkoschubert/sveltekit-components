<script>
  import { Section } from '$lib/components'
  import 'prism-themes/themes/prism-duotone-sea.css'

  export let title
</script>

<Section>
  <h1>{title}</h1>
  <slot />
</Section>
