<script lang="ts">
  export let content: string = ''
</script>

<div class="description">
  <slot>
    {content}
  </slot>
</div>