<script lang="ts">
  import { TextInput } from '$lib/components'
  import { MailIcon } from 'svelte-feather-icons'

</script>

<TextInput type="email" {...$$restProps}>
  <svelte:fragment slot="input-icon">
    <div class="form-element-icon">
      <MailIcon size="16" />
    </div>
  </svelte:fragment>
</TextInput>