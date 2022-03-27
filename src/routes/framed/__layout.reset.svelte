<script lang='ts'>
  import { onMount } from 'svelte'

  onMount(() => {
    document.body.classList.add('framed')
    return () => document.body.classList.remove('framed')
  })

  //$: currentTheme = window.location.search.split('?theme=')[1];
  //$: document.documentElement.setAttribute('theme', currentTheme);
</script>

<slot />

<style lang="sass" global>
  body.framed
    min-height: 100vh
    width: 100%
    padding: 1.5rem 1rem
</style>