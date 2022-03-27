---
title: Button Component
layout: component
components: ['Button']
---

<script>
  import { Button, Preview } from '$lib/components'
</script>

Excepteur occaecat est velit veniam eu occaecat culpa. Ut fugiat ad Lorem pariatur pariatur ea est deserunt exercitation. Occaecat fugiat qui aute nulla dolore.

### Default Button

<Button size="lg">Test</Button>
<Button size="md">Test</Button>
<Button size="sm">Test</Button>

### Dark Button

<Button type="dark" size="lg">Test</Button>
<Button type="dark" size="md">Test</Button>
<Button type="dark" size="sm">Test</Button>

### Ghost Button

<Button type="ghost" size="lg">Test</Button>
<Button type="ghost" size="md">Test</Button>
<Button type="ghost" size="sm">Test</Button>

### Selected icon-only, ghost button

Set `selected` to `true` to enable the selected state for an icon-only ghost button.

<FileSource src="/framed/Button/SelectedIconOnlyButton" />
