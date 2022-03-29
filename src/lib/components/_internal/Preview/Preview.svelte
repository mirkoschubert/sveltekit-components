<script lang="ts">
  import { Button, CodeSnippet } from '$lib/components'

  export let code: string = ''
  export let codeRaw: string = ''
  export let src: string = ''
  export let framed: boolean = false

</script>

<div class="preview">
  {#if framed}
    <div class="framed-header">
      <span class="notice">Content loaded in an iFrame</span>
      <Button type="dark" size="sm" href={src} target="_blank">Open in new tab</Button>
    </div>
  {/if}
  <div class="preview-viewer" class:framed>
    {#if framed}
      <iframe title={src.split('/').pop()} {src}></iframe>  
    {:else}
      <slot />
    {/if}
  </div>
  <div class="code">
    <CodeSnippet type="multi" code={codeRaw}>
      {@html code}
    </CodeSnippet>
  </div>
</div>