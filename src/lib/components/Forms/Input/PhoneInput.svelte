<script lang="ts">
  import { TextInput } from '$lib/components'
  import { PhoneIcon } from 'svelte-feather-icons'

</script>

<TextInput type="tel" {...$$restProps}>
  <svelte:fragment slot="input-icon">
    <div class="text-input-icon">
      <PhoneIcon size="16" />
    </div>
  </svelte:fragment>
</TextInput>