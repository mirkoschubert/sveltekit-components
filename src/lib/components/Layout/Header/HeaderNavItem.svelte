<script lang="ts">
  export let href: string
  export let title: string = ''
</script>

<a
  class="nav-item"
  role="menuitem"
  tabindex="0"
  href={href}
  title={title}
  rel="{$$restProps.target === '_blank' ? 'noopener noreferrer' : undefined}"
>
  <span class="icon">
    <slot name="icon" />
  </span>
  <span class="title">{title}</span>
</a>