<script lang="ts">
	import { Theme } from '$lib/stores/theme'
  import { MoonIcon, SunIcon } from 'svelte-feather-icons'
</script>

<button
	class="theme-toggle"
	aria-label="toggle dark/light theme"
	on:click={() => {
		Theme.toggle()
	}}
>
  {#if $Theme.isDark}
    <SunIcon size="24" />
  {:else}
    <MoonIcon size="24" />
  {/if}
</button>
