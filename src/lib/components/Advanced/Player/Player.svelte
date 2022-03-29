<script lang="ts">
  import { browser } from '$app/env'
  import { session } from '$app/stores'
  import { currentSong, currentAlbum, isPlayerLoading, updateTrack, isRepeat, isShuffle, iOS } from '$lib/stores/player'
  
  import { tick } from 'svelte'
  import { cubicOut } from 'svelte/easing'
	import { tweened } from 'svelte/motion'
  import { fly } from 'svelte/transition'

  import { PlayerDetails, PlayerControls, PlayerOptions, PlayerProgress } from '$lib/components'

  /**
   * Player
   */

  class NodeAudio {
		constructor() {}
		addEventListener(arg0: string, play: any) {
			//
		}
	}
  const player: HTMLAudioElement = browser ? new Audio() : new NodeAudio()
  
  $: player.autoplay = $updateTrack.url !== null ? true : false
  // $: player.preload = $updateTrack.url !== null && 'metadata'
  // $: browser && console.log($updateTrack.url, $updateTrack.originalUrl)
  $: player.src = $updateTrack.url !== null ? $updateTrack.url : ''


  /**
   * Variables
   */

  let isPlaying: boolean = false
  let once: boolean = true

  /**
   * Reactive
   */
  $: isWebkit = $session.iOS

  $: autoId = $currentSong

  $: time = player.currentTime
  $: duration = 0
	$: remainingTime = 0

  $: volume = 0.5
	$: player.volume = volume

  // Metadata
  $: cover = $currentAlbum ? $currentAlbum.cover.thumbnail : 'https://picsum.photos/seed/picsum/300/300'
  $: title = $currentAlbum ? $currentAlbum.songs[$currentSong].title : 'Title'
  $: artist = $currentAlbum ? $currentAlbum.artist : 'Artist'
  $: uid = $currentAlbum ? $currentAlbum.uid : ''

  /**
   * Player Controls
  **/

  const play = () => {
		if ('mediaSession' in navigator) {
			navigator.mediaSession.playbackState = 'playing'
		}
		isPlaying = true;
		//metaDataHandler()
	}

	const pause = () => {
		if ('mediaSession' in navigator) {
			navigator.mediaSession.playbackState = 'paused'
		}
		isPlaying = false
		player.pause()
	}

  const setPosition = () => {
		if ('mediaSession' in navigator) {
			navigator.mediaSession.setPositionState({
				duration: isWebkit ? player.duration / 2 : player.duration,
				position: player.currentTime
			})
		}
	}

  /**
   * Event Listeners
  **/

  player.addEventListener('loadedmetadata', () => {
		setPosition()
		isPlaying = true
		window.bbPlayer = {
			src: $updateTrack.originalUrl,
			duration: player.duration,
			title: $currentAlbum.songs[autoId].title
		};

		metaDataHandler()
	})

  player.addEventListener('timeupdate', async () => {
		time = player.currentTime
		duration = player.duration
		remainingTime = duration - time
		if (document.visibilityState !== 'hidden') {
			$progress = isWebkit == true ? time * 2 : time
		}
		/* This checks if the user is on an iOS device
		 	 due to the length of a song being doubled on iOS,
			 we have to cut the time in half. Doesn't effect other devices.
		*/
		if (isWebkit && remainingTime <= duration / 2 && once == false) {
			// await getNext()
			player.currentTime = player.currentTime * 2
		}
	})

  player.addEventListener('pause', () => {
		isPlaying = false
		pause()
	})

	player.addEventListener('play', () => play())
	player.addEventListener('ended', () => getNext())


	/**
	 *	Metadata Handler
	**/

	function metaDataHandler() {
		// <!-- if (!player.src) return -->
		
		if ('mediaSession' in navigator) {
			navigator.mediaSession.metadata = new MediaMetadata({
				title: $currentAlbum.songs[autoId]?.title,
				artist: $currentAlbum.songs[autoId]?.artist || null,
				album: $currentAlbum.title ?? undefined,
				artwork: [{
          src: $currentAlbum.cover.thumbnail,
          sizes: '192x192',
          type: 'image/jpeg'
        }]
			})
			navigator.mediaSession.setActionHandler('play', (session) => {
				const _play = player.play()

				if (_play !== undefined) {
					_play
						.then(() => {
							play()
						})
						.catch((error) => {
							console.error(error)
						})
				}
			})
			navigator.mediaSession.setActionHandler('pause', pause);
			navigator.mediaSession.setActionHandler('seekto', (session) => {
				if (session.fastSeek && 'fastSeek' in player) {
					player.fastSeek(session.seekTime)
					setPosition()
					return
				}
				player.currentTime = session.seekTime
				setPosition()
			})
			navigator.mediaSession.setActionHandler('previoustrack', prevBtn)
			navigator.mediaSession.setActionHandler('nexttrack', () => getNext())
		}
	}


  /**
   * Player Track Management
  */

  const getNext = async () => {
		if (autoId == $currentAlbum.songs.length - 1) {
			if ($isRepeat) {
				autoId = 0
				currentSong.set(autoId)
				await tick()
        getTrack(autoId)
			} else {
        // stop
        player.pause()
      }
		} else {
      autoId++
      currentSong.set(autoId)
      getTrack(autoId)
		}
	}

  const getTrack = (id: number = 0) => {
    const url = $currentAlbum.songs[id].file

    updateTrack.set({
      originalUrl: url,
      url: url
    })
  }

  /**
   * Controls
   */

  const prevBtn = () => {
    if ($currentAlbum.songs.length === 0) return
    if (!autoId || autoId < 0) return
    if ($isRepeat && autoId === 0) {
      autoId = $currentAlbum.songs.length - 1
    } else {
      autoId--
    }
    currentSong.set(autoId)
    getTrack(autoId)
  }

  const nextBtn = () => {
    if ($currentAlbum.songs.length === 0) return
		getNext()
  }

  const shuffle = () => {
    isShuffle.set(!$isShuffle)
  }

  const repeat = () => {
    isRepeat.set(!$isRepeat)
  }

  /**
   * UI
   */

  const progress = tweened(0, {
		duration: duration,
		easing: cubicOut
	})

  //$: console.log('updateTrack:', $updateTrack)
  $: if ($currentAlbum) console.log('Playing ' + $currentAlbum.songs[$currentSong].title + ' by ' + $currentAlbum.songs[$currentSong].artist )
</script>

<svelte:window />

{#if $currentAlbum && once}  
  <section class="player" transition:fly="{{y: 100, duration: 500, opacity: 1 }}">
    <PlayerDetails
      {cover}
      {title}
      {artist}
      {uid}
    />
    <div class="center">
      <PlayerControls
        bind:isPlaying
        bind:loading={$isPlayerLoading}
        on:play={ () => {
          play()
          player.play()
        }}
        {pause}
        {nextBtn}
        {prevBtn}
        {shuffle}
        {repeat}
      />
      <PlayerProgress
        bind:current={$progress}
        {duration}
      />
    </div>
    <PlayerOptions />
  </section>
{/if}
