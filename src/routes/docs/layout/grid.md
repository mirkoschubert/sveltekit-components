---
title: Grid Component
layout: component
components: ['Grid', 'GridItem']
---

<script>
  import { Grid, GridItem, Preview } from '$lib/components'
</script>

Enim sit dolore officia do nulla excepteur amet. Anim nostrud irure occaecat velit adipisicing exercitation deserunt amet ut. Et cupidatat ut Lorem laborum voluptate dolore dolore consectetur aute. Magna culpa velit Lorem exercitation ea enim sit nostrud voluptate aute occaecat. Enim tempor sunt cillum magna aute non adipisicing irure sunt veniam irure exercitation esse.

## Examples

### Default Grid

The default grid has `4` columns and no gap. It's fully responsive and reduces the columns depending on the display size.

<Grid>
  <GridItem>Ut sint et est duis exercitation.</GridItem>
  <GridItem>Culpa sit sunt aliquip commodo eiusmod consectetur reprehenderit aute ex non commodo duis occaecat consequat.</GridItem>
  <GridItem>Do pariatur dolore adipisicing consectetur.</GridItem>
  <GridItem>Eu dolor ex est nostrud commodo cupidatat minim laborum consectetur laboris ipsum.</GridItem>
  <GridItem>Reprehenderit ipsum nulla dolore commodo quis ea sit excepteur veniam anim pariatur anim eu.</GridItem>
  <GridItem>Nulla et duis nostrud velit ad non elit ipsum occaecat.</GridItem>
  <GridItem>Commodo laborum veniam sunt incididunt laboris sint.</GridItem>
</Grid>

### Columns, Gaps and Spans

You can set the number of columns between `1` and `6` and set any CSS size for the gap. Grid Items can have a column span between `1` and `6` and a row span between `1` and `3`.

<Grid columns="3" gap="1.5rem">
  <GridItem colSpan="3">Ut sint et est duis exercitation.</GridItem>
  <GridItem>Culpa sit sunt aliquip commodo eiusmod consectetur reprehenderit aute ex non commodo duis occaecat consequat.</GridItem>
  <GridItem>Do pariatur dolore adipisicing consectetur.</GridItem>
  <GridItem rowSpan="2">Eu dolor ex est nostrud commodo cupidatat minim laborum consectetur laboris ipsum.</GridItem>
  <GridItem>Reprehenderit ipsum nulla dolore commodo quis ea sit excepteur veniam anim pariatur anim eu.</GridItem>
  <GridItem>Nulla et duis nostrud velit ad non elit ipsum occaecat.</GridItem>
  <GridItem>Commodo laborum veniam sunt incididunt laboris sint.</GridItem>
</Grid>
