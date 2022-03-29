<script lang="ts">
  import type { FlyParams } from 'svelte/transition'
  import { Notify } from '$lib/stores/notification'
  import { Notification } from '$lib/components'
  import Portal from './Portal.svelte'

  export let position: 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left' = 'top-right'
	export let duration: number = 5000
	export let closable: boolean = false
  

  const getFlyParamsFromPosition = (pos: string): FlyParams => {
    if (pos.endsWith('-right')) return { x: 50 }
    if (pos.endsWith('-left')) return { x: -50 }
    if (pos === 'top-center') return { y: -50 }
    if (pos === 'bottom-center') return { y: 50 }
  }

  $: flyParams = getFlyParamsFromPosition(position)
  $: duration && Notify.setDuration(duration)
</script>

{#if $Notify.items.length !== 0}
  <Portal>
    <div class="notification-provider {position}">
      <div class="area">
        {#each $Notify.items as item}
          <slot {item} {closable}>
            <Notification {item} {closable} flyInParams={flyParams} flyOutParams={flyParams} />
          </slot>
        {/each}
      </div>
    </div>
  </Portal>
{/if}