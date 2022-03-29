<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte'
  import { CopyButton } from '$lib/components'

  export let type: 'single' | 'inline' | 'multi' = 'single'
  export let code: string = undefined
  export let hideCopyButton: boolean = false
  export let feedback: string = 'Copied!'
  export let feedbackTimeout: number = 2000
  export let disabled: boolean = false
  export let copyButtonDescription: string = undefined

  export let copy = async (code) => {
    try {
      await navigator.clipboard.writeText(code)
    } catch (e) {
      console.error(e)
    }
  }

  const dispatch = createEventDispatcher()

  function copyCode() {
    copy(code)
    dispatch('copy')
  }
</script>

{#if type === 'inline'}
  {#if hideCopyButton}
    <span
      class="snippet"
      class:inline={type === 'inline'}
      {...$$restProps}
    >
      <code>
        <slot>{code}</slot>
      </code>
    </span>
  {:else}
    <button
      type="button"
      class="btn btn-copy"
      {...$$restProps}
      on:click={() => {
        copyCode()
      }}
    >
      <code>
        <slot>{code}</slot>
      </code>
      <span class="copy-feedback">{feedback}</span>
    </button>
  {/if}
{:else}
  <div
    class="snippet"
    class:single={type === 'single'}
    class:multi={type === 'multi'}
  >
    <div class="snippet-container">
      <pre><code><slot>{code}</slot></code></pre>
    </div>
    {#if !hideCopyButton}
      <CopyButton
        disabled={disabled}
        feedback={feedback}
        feedbackTimeout={feedbackTimeout}
        iconDescription={copyButtonDescription}
        iconSize="20"
        on:click
        on:click={copyCode}
        on:animationend
      />
    {/if}
  </div>
{/if}