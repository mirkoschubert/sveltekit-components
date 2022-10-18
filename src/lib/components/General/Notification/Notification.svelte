<script lang="ts">
  import type { FlyParams } from 'svelte/transition'
  import type { NotificationType } from '$lib/types'
  import { goto } from '$app/navigation'
  import { fly } from 'svelte/transition'
  import { InfoIcon, CheckCircleIcon, AlertTriangleIcon, XCircleIcon, XIcon } from 'svelte-feather-icons'
  import notification from '$lib/stores/notification'

  export let item: NotificationType = undefined

  export let flyInParams: FlyParams = { x: -50 }
	export let flyOutParams: FlyParams = { x: -50 }

  $: item.type = item.type === undefined ? 'info' : item.type
</script>

<div
  in:fly={flyInParams}
	out:fly={flyOutParams}
  class="notification {item?.type}"
  class:clickable={item?.href}
  role={item?.type}
  aria-live="polite"
  {...$$restProps}
  on:click
  on:mouseenter
  on:mouseleave
>
  <div
    class="inner"
    on:click={() => {
      if (item?.href) {
        item.href.startsWith('http') ? window.open(item.href, '_blank') : goto(item.href)
        notification.close(item)
      }
    }}
    on:keydown
    on:keyup
    on:keypress

  >
    <header class="heading">
      <div class="icon">
        {#if item?.type}
          {#if item?.type === 'info'}<InfoIcon size="24" />{/if}
          {#if item?.type === 'success'}<CheckCircleIcon size="24" />{/if}
          {#if item?.type === 'warning'}<AlertTriangleIcon size="24" />{/if}
          {#if item?.type === 'error'}<XCircleIcon size="24" />{/if}
        {/if}
      </div>
      <h4 class="title">{item?.title}</h4>
    </header>
    {#if item?.description}    
      <div class="description">
        {item?.description}
      </div>
    {/if}
  </div>
  {#if item?.closable}
    <button
      type="button"
      class="close"
      aria-label="close notification"
      on:click={() => {
        notification.close(item)
      }}
    >
      <XIcon size="16" />
    </button>
  {/if}
</div>