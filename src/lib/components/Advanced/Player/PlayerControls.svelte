<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { updateTrack, isRepeat, isShuffle } from '$lib/stores/player'

  import { PlayCircleIcon, PauseCircleIcon, SkipBackIcon, SkipForwardIcon, ShuffleIcon, RepeatIcon } from 'svelte-feather-icons'

  import { Loading } from '$lib/components'

  export let prevBtn
	export let nextBtn
	export let pause
  export let repeat
  export let shuffle
	export let isPlaying: boolean
	export let loading: boolean

  let hovering: boolean = false

  const dispatch = createEventDispatcher()
  const playEvent = () => dispatch('play')

</script>

<div class="controls">
  <button class:active={$isShuffle} class="shuffle" on:click={shuffle}>
    <ShuffleIcon size="16" />
  </button>
  <button class="skip-back" on:click={prevBtn}>
    <SkipBackIcon size="24" />
  </button>
  <button
    class="play"
    class:active={isPlaying}
    on:click={(e) => {
      if (!$updateTrack) return
      if (!isPlaying) {
        playEvent()
      } else {
        pause()
      }
    }}
  >
    {#if loading}
      <Loading size="40" />
    {:else if !isPlaying}
      <PlayCircleIcon size="40" />
    {:else}
      <PauseCircleIcon size="40" />
    {/if}
  </button>
  <button class="skip-forward" on:click={nextBtn}>
    <SkipForwardIcon size="24" />
  </button>
  <button class:active={$isRepeat} class="repeat" on:click={repeat}>
    <RepeatIcon size="16" />
  </button>
</div>
