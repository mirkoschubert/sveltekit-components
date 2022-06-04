import type { NotificationType, NotificationOptionsType, NotificationPositionsType } from '$lib/types'
import { writable } from 'svelte/store'



const createStore = () => {
  let id = 0
  const { update, subscribe } = writable({
    duration: 5000,
    position: 'top-right',
    items: []
  })

  return {
    subscribe: subscribe,
    add: (item: NotificationType, options?: NotificationOptionsType) => update((n) => {
      id++
      item.id = id
      if (!item.closable && !item.href) {
        setTimeout(() => {
          update((n) => ({ ...n, items: n.items.filter((i) => i !== item) }))
        }, options?.duration ?? n.duration)
      }
      return { ...n, items: [item, ...n.items] }
    }),
    setDuration: (duration: number) => update((n) => ({ ...n, duration })),
    setPosition: (position: NotificationPositionsType) => update((n) => ({ ...n, position })),
    close: (item: NotificationType) => update((n) => ({ ...n, items: n.items.filter((i) => i !== item) }))
  }
}

export default createStore()