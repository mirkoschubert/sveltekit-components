<script lang="ts">
	import { browser } from '$app/environment'
	import { Theme } from '$lib/stores/theme'
	export let fromSystem = false
	if (fromSystem) {
		Theme.fromSystem()
	}
	$: {
		if (browser) {
			if ($Theme.isDark) {
				document.documentElement.className = 'dark'
			} else {
				document.documentElement.className = 'light'
			}
		}
	}
</script>