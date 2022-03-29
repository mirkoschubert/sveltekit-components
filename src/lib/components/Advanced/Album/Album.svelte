<script lang="ts">
  import type { AlbumType } from '$lib/types'
  import { Hero } from '$lib/components'

  export let album: AlbumType = undefined
</script>

<Hero image={album.image.hero} alignment="bottomleft" class="hero album-hero">
  <div class="album">
    <div class="cover">
      <img src={album.cover.main} alt={album.title}>
    </div>
    <div class="details">
      <p class="type">{album.type}</p>
      <h1>{album.title}</h1>
      <p class="meta">
        <span class="artist">{album.artist}</span> &bull; 
        <span class="published">{album.published}</span> &bull; 
        <span class="genres">{album.genres.join(', ')}</span>
      </p>
      <a href="/portfolio/music" title="Music">&ltrif; Back to Music</a>
    </div>
  </div>
</Hero>
