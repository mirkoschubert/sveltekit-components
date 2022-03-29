import type { NotificationType, NotificationOptionsType } from '$lib/types'
import { writable } from 'svelte/store'

function createNotificationStore() {
  let id = 0
  const { update, subscribe } = writable({
    duration: 5000,
    items: []
  })

  return {
    subscribe: subscribe,
    show: (item: NotificationType, options?: NotificationOptionsType) =>
      update((n) => {
        id++
        item.id = id
        setTimeout(() => {
          update((n) => ({ ...n, items: n.items.filter((i) => i !== item) }))
        }, options?.duration ?? n.duration)
        return { ...n, items: [item, ...n.items] }
      }),
    setDuration: (duration: number) => update((n) => ({ ...n, duration })),
    close: (item: NotificationType) =>
      update((n) => ({ ...n, items: n.items.filter((i) => i !== item) }))
  }
}

export const Notify = createNotificationStore()