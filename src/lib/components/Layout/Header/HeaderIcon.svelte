<script lang="ts">
  import { Link } from '$lib/components'
  export let href: string = '/'
  export let title: string = ''
  export let type: 'dark' | 'default' = 'default'
</script>

<div class="header-icon" {...$$restProps}>
  <Link {type} {href} {title}>
    <slot />
  </Link>
</div>