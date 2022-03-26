<script lang="ts">

  export let id: string = 'content'

</script>

<main
  {id}
  class="content"
  {...$$restProps}
>
  <slot />
</main>