<script lang="ts">
  import type { SongType } from '$lib/types'

  import { PlayIcon } from 'svelte-feather-icons'

  import { Tag } from '$lib/components'


  export let item: SongType = undefined
  export let index: number = 0
  export let isPlaying: boolean = false
</script>

<div
  class="item"
  class:playing={isPlaying}
  on:click|preventDefault
  {...$$restProps}
>
  {#if item}    
    <div class="number">
      {#if isPlaying}
        <PlayIcon size="14" />
      {:else}
        {index + 1}
      {/if}
    </div>
    <div class="thumbnail"></div>
    <div class="column">
      <span class="title">{item.title}</span>
      <span class="artist">&bull; {item.artist}</span>
    </div>
    {#if item.explicit}
      <div class="explicit">
        <Tag title="Explicit" size="sm" />
      </div>
    {/if}
    <div class="length">{item.length}</div>
  {/if}
</div>