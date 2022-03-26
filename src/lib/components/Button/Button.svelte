<script lang="ts">
  export let type: 'default' | 'dark' | 'ghost' = 'default'
  export let size: 'sm' | 'md' | 'lg' = 'md'
  export let title: string = ''
  export let icon: boolean = false
  export let href: string = undefined

  const scale = { sm: 1, md: 1.5, lg: 2 }

  $: t = type ? ' btn-' + type : ''
  $: s = size ? ' btn-' + size : ''
</script>

{#if href !== undefined}
  <a class="btn{s}{t}" {href} {title} target={href.startsWith('http') ? '_blank' : ''}>
    {#if icon}
      <span class="icon">
        <slot name="icon" />
      </span>
    {/if}
    <span class="title">
      <slot>{title}</slot>
    </span>
  </a>
  {:else}
  <button class="btn{s}{t}">
    {#if icon}
    <span class="icon">
      <slot name="icon" />
    </span>
    {/if}
    <span class="title">
      <slot>{title}</slot>
    </span>
  </button>
{/if}
