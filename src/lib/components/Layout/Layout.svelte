<script lang="ts">
  import type { LayoutOptionsType } from '$lib/types'

  export let options: LayoutOptionsType = { theme: 'dark' }

</script>

<div
  class="theme {options.theme}"
  class:fixed-sidenav={options.sidenav && options.sidenav === 'fixed'}
  class:fixed-header={options.header && options.header === 'fixed'}
  class:has-footer={options.footer || false}
>
  <slot />
</div>