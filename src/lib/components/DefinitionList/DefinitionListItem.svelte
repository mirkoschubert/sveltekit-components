<script lang="ts">
  export let title: string = ''
  export let description: string = ''
</script>

<div class="item">
  <dt>{title}</dt>
  <dd><slot>{description}</slot></dd>
</div>
