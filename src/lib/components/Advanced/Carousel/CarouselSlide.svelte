<!-- <script lang="ts">
  import { SplideSlide } from '@splidejs/svelte-splide'
  //import '@splidejs/splide/dist/css/splide.min.css'

  export let image: string = ''
  export let title: string = 'Title'
  export let href: string = undefined
</script>

<SplideSlide>
  <div class="inner">
    <img src={image} data-splide-lazy={image} alt={title}>
    {#if href}
      <a {href} {title}><span class="title">{title}</span></a>
    {:else}
      <div class="title">{title}</div>
    {/if}
  </div>
</SplideSlide>
 -->