<script lang="ts">
  import { InfoIcon } from 'svelte-feather-icons'

  export let cover: string = 'https://picsum.photos/seed/picsum/300/300'
  export let title: string = 'Title'
  export let artist: string = 'Artist'
  export let uid: string = ''
</script>


<div class="details">
  <a class="cover" href="/portfolio/music/{uid}">
    <img src={cover} alt={title}>
  </a>
  <div class="song">
    <span class="title">{title}</span>
    <span class="artist">{artist}</span>
  </div>
  <div class="info">
    <InfoIcon size="24" />
  </div>
</div>