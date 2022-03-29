<script lang="ts">
  import type { SongType } from '$lib/types'
  import { Song } from '$lib/components'

  export let items: SongType[] = []
  //export let hasData: boolean = false
  //export let isLoading: boolean = false
</script>

<div class="songs">
  <slot>
    {#each items as item}
      <Song {item} />
    {/each}
  </slot>
</div>