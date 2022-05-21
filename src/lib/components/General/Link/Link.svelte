<script lang="ts">
  export let type: 'default' |'dark' = 'default'
  export let href: string = ''
  export let title: string = ''
  export let name: string = ''
  export let external: boolean = false

  $: external = href.startsWith('http')
  $: title = title === '' ? name : title
</script>

<a
  class="link"
  class:dark={type === 'dark'}
  {href}
  {title}
  rel={external ? 'noreferrer noopener': ''}
  target={external ? '_blank' : ''}
  {...$$restProps}
  on:click
>
  <slot>
    {name}
  </slot>
</a>
