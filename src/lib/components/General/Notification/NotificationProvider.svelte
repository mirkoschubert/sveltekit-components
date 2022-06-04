<script lang="ts">
  import type { FlyParams } from 'svelte/transition'
  import type { NotificationPositionsType } from '$lib/types'
  import Notification from './Notification.svelte'

  import notification from '$lib/stores/notification'

  export let duration: number = 5000
  export let position: NotificationPositionsType = 'top-right'

  const getFlyParamsFromPosition = (pos: string): FlyParams => {
    if (pos.endsWith('-right')) return { x: 50 }
    if (pos.endsWith('-left')) return { x: -50 }
    if (pos === 'top-center') return { y: -50 }
    if (pos === 'bottom-center') return { y: 50 }
  }

  $: flyParams = getFlyParamsFromPosition(position)
  $: position && notification.setPosition(position)
  $: duration && notification.setDuration(duration)
</script>

{#if $notification.items.length > 0}  
  <div
    class="notification-provider {position}"
    data-duration={duration}
    data-position={position}
  >
    <div class="area">
      {#each $notification.items as item}
        <slot {item}>
          <Notification {item} flyInParams={flyParams} flyOutParams={flyParams} />
        </slot>
      {/each}
    </div>
  </div>
{/if}