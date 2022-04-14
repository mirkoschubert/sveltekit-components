<script lang="ts">
  import type { ScaleParams } from 'svelte/transition'
  import { scale } from 'svelte/transition'
  import { Button, Portal } from '$lib/components'
  import { XIcon } from 'svelte-feather-icons'

  export let title: string = 'Title'

  export let opened: boolean = false
  //export let draggable: boolean = false
	//export let resizable: boolean = false
  export let unclosable: boolean = false

  export let scaleInParams: ScaleParams = { duration: 250, start: 0.9, opacity: 0.8 }

  export let ref: HTMLElement = null
  let refModal: HTMLElement

  const handleOutsideClick = (e: any) => {
    if (!unclosable) {
      if (!refModal.contains(e.target)) {
        opened = false
      }
    }
	}

	const handleKeydown = (e: KeyboardEvent) => {
		if (opened) {
			switch (e.key) {
				case 'Escape':
					opened = false
					break
				default:
					break
			}
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

{#if opened}
  <Portal>
    <div
      bind:this={ref}
      class="modal"
      role="presentation"
      class:visible={opened}
      on:click={handleOutsideClick}
      {...$$restProps}
    >
      <div
        bind:this={refModal}
        in:scale={scaleInParams}
        class="inner"
      >
        <header class="header">
          <h3 class="title">{title}</h3>
          {#if !unclosable}            
            <Button type="ghost" on:click={() => { opened = false }}>
              <XIcon size="16" />
            </Button>
          {/if}
        </header>
        <div class="body">
          <slot />
        </div>
      </div>
    </div>
  </Portal>
{/if}
