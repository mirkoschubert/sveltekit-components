<script lang="ts">
  import type { FlyParams } from 'svelte/transition'
  import { fly } from 'svelte/transition'
  import { goto } from '$app/navigation'

  import type { NotificationType } from '$lib/types'
  import { Notify } from '$lib/stores/notification'
  import { InfoIcon, CheckCircleIcon, AlertTriangleIcon, XCircleIcon, XIcon } from 'svelte-feather-icons'

  export let item: NotificationType = undefined
  export let closable: boolean = false

  export let flyInParams: FlyParams = { x: -50 }
	export let flyOutParams: FlyParams = { x: -50 }


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
  on:click={() => {
    if (item?.href) {
      goto(item.href)
    }
  }}
  on:mouseenter
  on:mouseleave
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
  {#if closable && !item?.href}
    <button
      type="button"
      class="close"
      aria-label="close notification"
      on:click={() => {
        Notify.close(item)
      }}
    >
      <XIcon size="16" />
    </button>
  {/if}
</div>