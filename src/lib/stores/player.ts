import { browser } from '$app/env'
import { get, writable } from 'svelte/store'
import type { AlbumType } from '$lib/types'

export const currentAlbum = writable<AlbumType>()
export const currentAlbumId = writable<string>('')
export const currentSong = writable<number>(0)

export const isPlayerLoading = writable<boolean>(false)
export const isPlaying = writable<boolean>(false)

export const isRepeat = writable<boolean>(false)
export const isShuffle = writable<boolean>(false)

export const updateTrack = writable<{ originalUrl?: string; url?: string }>({
  url: null,
  originalUrl: null
})

export const iOS = _verifyUserAgent()

function _verifyUserAgent() {
  const { subscribe, set, update } = writable(undefined)
  let CheckiOS: boolean
  let isApple: boolean
  if (browser) {
    CheckiOS = /i(Phone|Pad|Pod)/i.test(navigator.userAgent)
    isApple = CheckiOS ? true : false
  }
  //browser ? console.log(isApple, CheckiOS) : null

  return {
    subscribe,
    set,
    update,
    get: () => get(iOS),
    init: () => {
      if (!browser) return
      set(isApple)
      browser ? localStorage.setItem('iOSClient', String(isApple)) : null
    },
    reset: () => {
      if (!browser) return
      set(undefined)
      browser ? localStorage.removeItem('iOSClient') : null
    }
  }
}