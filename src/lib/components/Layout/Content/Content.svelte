<script lang="ts">

  export let id: string = 'content'
  export let centered:boolean = false
</script>

<main
  {id}
  class="content"
  class:centered
  {...$$restProps}
>
  <slot />
</main>