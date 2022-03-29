import { browser } from '$app/env'
import { session } from '$app/stores'

import {
  currentSong,
  currentAlbum,
  isPlayerLoading,
  updateTrack,
  isRepeat
} from '$lib/stores/player'



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