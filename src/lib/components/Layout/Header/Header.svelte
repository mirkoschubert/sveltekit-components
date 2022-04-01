<script lang="ts">
  import { HeaderLeft, HeaderCenter, HeaderRight, HeaderLogo } from '$lib/components'

  export let isSticky: boolean = false
</script>

<header
  class="header"
  class:sticky={isSticky}
>
  <slot>
    <HeaderLeft>
      <HeaderLogo />
    </HeaderLeft>
    <HeaderCenter>

    </HeaderCenter>
    <HeaderRight>

    </HeaderRight>
  </slot>
</header>
