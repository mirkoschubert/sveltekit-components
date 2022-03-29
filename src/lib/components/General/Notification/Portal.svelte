<script lang="ts">
	import { portal } from '$lib/actions/portal'
	export let target: string | Element = 'body'
</script>

<div
	use:portal={target}
	data-steeze-portal
	style="position: absolute; top: 0px; left: 0px; z-index: 2147483647;"
>
	<slot />
</div>