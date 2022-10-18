<script>
  import { Button, Modal } from '$lib/components'

  let opened = false
</script>

<Button on:click={() => (opened = true)}>Open</Button>
<Modal bind:opened>Ad velit laboris cupidatat sint est.</Modal>