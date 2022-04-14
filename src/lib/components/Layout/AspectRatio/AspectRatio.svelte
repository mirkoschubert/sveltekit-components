<script lang="ts">
  import type { AspectRatioType } from '$lib/types'
  
  export let ratio: AspectRatioType = '4x3'
</script>

<div
  class="aspect-ratio"
  class:r1x1={ratio === '1x1'}
  class:r4x3={ratio === '4x3'}
  class:r3x2={ratio === '3x2'}
  class:r16x9={ratio === '16x9'}
  class:r2x1={ratio === '2x1'}
  class:r21x9={ratio === '21x9'}
  class:r3x4={ratio === '3x4'}
  class:r2x3={ratio === '2x3'}
  class:r9x16={ratio === '9x16'}
  class:r1x2={ratio === '1x2'}
  class:r9x21={ratio === '9x21'}
  {...$$restProps}
>
  <div class="inner">
    <slot />
  </div>
</div>