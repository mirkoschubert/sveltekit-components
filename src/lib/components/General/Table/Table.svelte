<script lang="ts">
  import { TableContainer } from '$lib/components'
import Header from '$lib/components/Layout/Header/Header.svelte'
import Row from '$lib/components/Layout/Section/Row.svelte'
import TableBody from './TableBody.svelte';
import TableCell from './TableCell.svelte';
import TableHead from './TableHead.svelte';
import TableHeader from './TableHeader.svelte';
import TableRow from './TableRow.svelte';

  export let headers = []
  export let rows = []
  export let size: 'sm' | 'md' | 'lg' = 'md'
  export let title: string = undefined
  export let description: string = undefined
  export let zebra: boolean = false
  export let sortable: boolean = false
  export let useStaticWidth: boolean = false
</script>


<TableContainer
  title={title}
  description={description}
  useStaticWidth="{useStaticWidth}"
  {...$$restProps}
>
  <table
    class="table"
    class:sm={size === 'sm'}
    class:md={size === 'md'}
    class:lg={size === 'lg'}
    class:zebra={zebra}
    class:sortable={sortable}
  >
    <slot>
      {#if headers.length > 0}        
        <TableHead>
          <TableRow>
            {#each headers as header (header.id)}
              <TableHeader
                id={header.id}
              >
                {header.name}
              </TableHeader>
            {/each}
          </TableRow>
        </TableHead>
      {/if}
      {#if rows.length > 0}
        <TableBody>
          {#each rows as row}
            <TableRow id={row.id}>
              {#each headers as header (header.id)}
                <TableCell>{row[header.id]}</TableCell>
              {/each}
            </TableRow>
          {/each}
        </TableBody>
      {/if}
    </slot>
  </table>
</TableContainer>
