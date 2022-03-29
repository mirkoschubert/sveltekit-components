<script lang="ts">
  import { VolumeIcon, Volume1Icon, Volume2Icon, VolumeXIcon } from 'svelte-feather-icons'

  export let volume: number = 100
</script>

<div class="options">
  <button class="volume">
    {#if volume > 80}
      <Volume2Icon size="24" />
    {:else if volume > 50}
      <Volume1Icon size="24" />
    {:else if volume > 20}
      <VolumeIcon size="24" />
    {:else}
      <VolumeXIcon size="24" />
    {/if}
  </button>
</div>