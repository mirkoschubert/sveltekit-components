<script lang="ts">
  import { TextInput } from '$lib/components'
  import { EyeIcon, EyeOffIcon } from 'svelte-feather-icons'

  export let type: 'password' | 'text' = 'password'

</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<TextInput
  {type}
  autocomplete="current-password"
  {...$$restProps}
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
>
  <svelte:fragment slot="input-icon">
    <button
      type="button"
      class="form-element-icon"
      on:click='{() => {
        type = type === 'password' ? 'text' : 'password';
      }}'
    >
      {#if type === 'password'}
        <EyeIcon size="16" />
      {:else if type === 'text'}
        <EyeOffIcon size="16" />
      {/if}
    </button>
  </svelte:fragment>
</TextInput>