---
title: Toggle Component
layout: component
components: ['Form', 'Toggle']
---

<script>
  import { Form, Toggle, Preview } from '$lib/components'
</script>

Velit mollit veniam occaecat nisi deserunt. Adipisicing officia consectetur pariatur eu do minim sint do minim. Esse officia sit sit excepteur esse. Aliqua quis excepteur exercitation amet esse proident eiusmod minim occaecat ipsum proident non. Ut mollit laborum mollit adipisicing aute Lorem. Labore mollit enim cupidatat nisi est.

### Default Toggle

<Form on:submit>
  <Toggle name="toggle1" label="Notifications" />
</Form>

### Checked Toggle

<Form on:submit>
  <Toggle checked name="toggle2" label="Notifications" />
</Form>

### Inline Toggle

<Form on:submit>
  <Toggle inline name="toggle3" label="Notifications" />
</Form>

### Hidden Label

<Form on:submit>
  <Toggle hideLabel name="toggle4" label="Notifications" />
</Form>

### Custom Toggle Labels

<Form on:submit>
  <Toggle name="toggle5" label="Notifications" onLabel="Yes" offLabel="No" />
</Form>

### Small Toggle (Inline)

<Form on:submit>
  <Toggle size="sm" inline name="toggle6" label="Notifications" />
</Form>

### Required State

<Form on:submit>
  <Toggle required name="toggle7" label="Notifications" />
</Form>

### Disabled State

<Form on:submit>
  <Toggle disabled name="toggle8" label="Notifications" />
</Form>
