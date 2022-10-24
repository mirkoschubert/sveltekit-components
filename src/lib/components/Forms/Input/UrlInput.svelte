<script lang="ts">
  import { TextInput } from '$lib/components'
  import { LinkIcon } from 'svelte-feather-icons'

</script>

<TextInput type="url" {...$$restProps}>
  <svelte:fragment slot="input-icon">
    <div class="form-element-icon input-icon">
      <LinkIcon size="16" />
    </div>
  </svelte:fragment>
</TextInput>