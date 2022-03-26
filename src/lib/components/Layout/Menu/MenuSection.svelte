<script lang="ts">
  export let label: string = ''
</script>

<div class="menu-section">
  <div class="menu-label">
    <span class="label">{label}</span>
    <slot name="label-suffix" />
  </div>
  <div class="menu-section-items">
    <slot />
  </div>
</div>