---
title: List Component
layout: component
components: ['List', 'ListItem']
---

<script>
  import { List, ListItem, Preview } from '$lib/components'
</script>

Et Lorem et veniam amet et aliquip. Esse veniam ut tempor aute commodo ex exercitation veniam esse in et. Fugiat laboris commodo ipsum incididunt pariatur cupidatat sunt quis aliqua.

### Unordered List

Set the `type` to `unordered` or leave it blank to render a unordered list.

<List type="unordered">
  <ListItem>Eiusmod tempor commodo est velit irure irure eu sit anim.</ListItem>
  <ListItem>Eiusmod tempor commodo est velit irure irure eu sit anim.</ListItem>
</List>

### Ordered List

Set the `type` to `ordered` to render a ordered list.

<List type="ordered">
  <ListItem>Eiusmod tempor commodo est velit irure irure eu sit anim.</ListItem>
  <ListItem>Eiusmod tempor commodo est velit irure irure eu sit anim.</ListItem>
</List>

### List with Links

Use the `href` and `title` attribute to set a link. External links automatically open in a new tab.

<List>
  <ListItem href="https://svelte.dev/" title="Svelte">Svelte</ListItem>
  <ListItem href="https://kit.svelte.dev/" title="SvelteKit">SvelteKit</ListItem>
</List>

### Nested List

You can nest multiple lists, even unordered and ordered ones. Use the `nested` attribute to identify the nested list.

<List type="ordered">
  <ListItem>
    List Item 1
    <List nested>
      <ListItem>List Item 1.1</ListItem>
      <ListItem>List Item 1.2</ListItem>
    </List>
  </ListItem>
  <ListItem>List Item 2</ListItem>
</List>
