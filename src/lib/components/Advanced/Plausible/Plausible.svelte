<script context="module" lang="ts">
  interface PlausibleTracker {
		(event: string, options?: any): void
	}
	interface PlausibleWindow extends Window {
		plausible: PlausibleTracker
	}
	declare let window: PlausibleWindow;
	const tracker: PlausibleTracker = (event, options) => window.plausible(event, options)
</script>

<script lang="ts">
  import { onMount } from 'svelte'
  import { dev } from '$app/env'
  import { page } from '$app/stores'
  import { plausible } from '$lib/stores/plausible'

  export let apiHost: string = 'https://plausible.io'
  export let domain: string | string[] = $page.url.hostname
  export let enabled: boolean = true
  export let compat: boolean = false
  export let hash: boolean = false
  export let local: boolean = enabled && dev

  onMount(() => {
    plausible.subscribe((events) => {
      let next = events.length && events.shift()
      while (next) {
        const { event, data } = next
        tracker(event, data)
        next = events.shift()
      }
    })
  })

  $: api = `${apiHost}/api/event`
  $: src = [
    `${apiHost}/js/script`,
    compat ? 'compat' : undefined,
    hash ? 'hash' : undefined,
    local ? 'local' : undefined,
    'js'
  ].filter(Boolean).join('.')
</script>

<svelte:head>
  {#if enabled}
    <script data-api={api} data-domain={domain.toString()} defer {src}></script>
    <script>
      window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }
    </script>
  {/if}
</svelte:head>
