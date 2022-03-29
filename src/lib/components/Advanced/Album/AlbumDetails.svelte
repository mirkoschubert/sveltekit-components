<script lang="ts">
  import type { AlbumType } from '$lib/types'

  import { Card, DefinitionList, DefinitionListItem, Tag, Button } from '$lib/components'



  export let album: AlbumType = undefined
</script>

<Card>
  <svelte:fragment slot="content">
    <!-- <CardHeading title={album.title} /> -->
    <DefinitionList>
      <DefinitionListItem title="Published" description={album.published} />
      <DefinitionListItem title="Format" description={album.type} />
      <DefinitionListItem title="Genres">
        {#each album.genres as genre}
          <Tag title={genre} size="sm" />
        {/each}
      </DefinitionListItem>
    </DefinitionList>
  </svelte:fragment>
  <svelte:fragment slot=buttons>
    {#each album.urls as item }
      <Button title={item.type} url={item.url} />
    {/each}
  </svelte:fragment>
</Card>