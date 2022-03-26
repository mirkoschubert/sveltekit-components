<script>
  import { Section } from '$lib/components'

  export let title
  export let layout

  $: console.log('Layout:', layout)
</script>

<Section>
  <h1>{title}</h1>
  <slot />
</Section>
