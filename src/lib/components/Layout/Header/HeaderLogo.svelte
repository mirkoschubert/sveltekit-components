<script lang="ts">
  import { Link } from '$lib/components'
  export let title: string = undefined
  export let image: string = undefined
</script>

<div class="header-logo" {...$$restProps}>
  <Link href="/" {title}>
    <slot>
      {#if image}
        <img class="image" src={image} alt={title} />
      {/if}
      {#if title}
        <span class="title">{title}</span>
      {/if}
    </slot>
  </Link>
</div>
