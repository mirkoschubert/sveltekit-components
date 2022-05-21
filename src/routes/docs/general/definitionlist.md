---
title: DefinitionList Component
layout: component
components: ['DefinitionList', 'DefinitionListItem']
---

<script>
  import { DefinitionList, DefinitionListItem, Preview } from '$lib/components'
</script>

Cillum nulla dolore cupidatat nulla laboris exercitation nulla exercitation tempor nisi incididunt est. Cillum tempor in ad eu velit. Ipsum reprehenderit anim commodo occaecat laboris velit ullamco laborum id. Non est duis do enim laboris labore Lorem deserunt occaecat cupidatat cillum excepteur. Ad excepteur commodo id fugiat proident.

### DefinitionList

<DefinitionList>
  <DefinitionListItem title="Title 1" description="Description" />
  <DefinitionListItem title="Title 2" description="Description" />
</DefinitionList>

### DefinitionList with Items Prop

<DefinitionList
  items={[
    { title: 'Title 1', description: 'Description 1' },
    { title: 'Title 2', description: 'Description 2' },
  ]}
/>
