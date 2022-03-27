<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte'
  import { CopyIcon } from 'svelte-feather-icons'

  export let feedback: string = 'Copied!'
  export let feedbackTimeout: number = 2000
  export let iconDescription: string = 'Copy to Clipboard'
  export let text: string = undefined
  export let iconSize: string = '24'

  export let copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch (e) {
      console.log(e)
    }
  }

  const dispatch = createEventDispatcher()

  let animation = undefined
  let timeout = undefined

  onMount(() => {
    return () => clearTimeout(timeout)
  })
</script>

<button
  type="button"
  aria-live="polite"
  class="btn btn-copy"
  class:animating={animation}
  class:fade-in={animation === 'fade-in'}
  class:fade-out={animation === 'fade-out'}
  aria-label={iconDescription}
  title={iconDescription}
  {...$$restProps}
  on:click
  on:click={() => {
    if (text !== undefined) {
      copy(text)
      dispatch('copy')
    }
    if (animation === 'fade-in') return
    animation = 'fade-in'
    timeout = setTimeout(() => {
      animation = 'fade-out'
    }, feedbackTimeout)
  }}
  on:animationend
  on:animationend={({ animationName }) => {
    if (animationName === 'hide-feedback') {
      animation = undefined
    }
  }}
>
  <CopyIcon size="{iconSize}" />
  <span class="copy-feedback">{feedback}</span>
</button>