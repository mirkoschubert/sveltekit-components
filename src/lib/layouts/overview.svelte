<script>
  import { onMount } from 'svelte'
  import { Section } from '$lib/components'
  import 'prism-themes/themes/prism-duotone-sea.css'

  export let title
  export let layout

  onMount(() => {
    const content = document.getElementById('content')
    const toc = document.querySelector('.toc')

    if (toc) {
      content.classList.add('has-toc')
    }
    //console.log(content, toc)
  })

  $: console.log('Layout:', layout)
</script>

<Section id="overview">
  <h1>{title}</h1>
  <div class="toc">
    <h3>Table of Contents</h3>
    <slot name="aside" />
  </div>
  <slot />
</Section>
