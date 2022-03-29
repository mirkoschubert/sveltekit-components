<!-- <script lang="ts">
  import { CarouselSlide } from '$lib/components'
  import { Splide } from '@splidejs/svelte-splide'
  import '@splidejs/splide/dist/css/splide.min.css'

  export let title: string = undefined
  export let more: string = undefined
  export let perPage: number = 4

</script>

<section class="carousel">
  <header class="header">
    {#if title}      
      <h2 class="title">{title}</h2>
    {/if}
    {#if more && title}
      <a href={more} title={title}>All {title}</a>
    {/if}
  </header>
  <Splide
    options={{
      type: 'loop',
      perPage: perPage,
      gap   : '2rem',
      arrows: 'slider',
      lazyLoad: 'sequential',
      breakpoints: {
		    960: {
			    perPage: perPage - 1,
		    },
        640: {
          perPage: perPage - 2,
        },
        480: {
          perPage: 1
        }
      }
    }}
  >
    <slot>
      <CarouselSlide title="Example" image="https://unsplash.it/400/300" />
    </slot>
  </Splide>
</section>
 -->