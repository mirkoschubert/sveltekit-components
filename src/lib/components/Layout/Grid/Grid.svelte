<script lang="ts">

  export let columns: number = 3
  export let gap: string = '0'
</script>

<div class="grid col-{columns}" style:gap>
  <slot />
</div>

<style lang="sass" global>
  .grid
    display: grid
    grid-template-columns: 1fr

  @include tablet
    .col-2,
    .col-3,
    .col-4,
    .col-5,
    .col-6
      grid-template-columns: repeat(2, minmax(300px, 1fr))

  @include landscape
    .col-3,
    .col-4,
    .col-5,
    .col-6
      grid-template-columns: repeat(3, minmax(300px, 1fr))

  @include desktop
    .col-4
      grid-template-columns: repeat(4, minmax(200px, 1fr))

    .col-5
      grid-template-columns: repeat(5, minmax(200px, 1fr))

    .col-6
      grid-template-columns: repeat(6, minmax(200px, 1fr))

      
      
</style>