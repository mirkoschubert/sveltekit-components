<script lang="ts">

  let hovering: boolean = false

  export let current: number = 0
  export let duration: number = 0

  const convert = (d: number) => {
    d = Number(d)
    var h = Math.floor(d / 3600)
    var m = Math.floor(d % 3600 / 60)
    var s = Math.floor(d % 3600 % 60)

    var hd = h > 0 ? String(h).padStart(2, '0') + ':' : ''
    var md = m >= 0 ? String(m).padStart(2, '0') + ':' : ''
    var sd = s >= 0 ? String(s).padStart(2, '0') : ''
    return hd + md + sd
  }
</script>

<div class="progress">
  <div class="time">{convert(current)}</div>
  <div class="progress-bar">
    {#if hovering}
      <div class="hover"></div>
    {/if}
    <progress value={current} max={duration} />
  </div>
  <div class="time-left">{convert(duration - current)}</div>
</div>