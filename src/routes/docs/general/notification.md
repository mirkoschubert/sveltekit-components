---
title: Notification Component
layout: component
components: ['Notification', 'NotificationProvider']
---

<script>
  import { notification, Button, Preview } from '$lib/components'
</script>

Before you can use the notification feature, you have to set up the `NotificationProvider` in your `_layout.svelte` file:

```html
<script>
  import { NotificationProvider } from 'svelte-components'
</script>
<NotificationProvider duration={3000} position="bottom-right" />
```

You can set up the `duration` (in ms) and `position` globally.

### Default Notification

<Button
  on:click={() => {
    notification.add({
      title: 'Successfully saved!',
      description: 'This is an example for a notification.',
      type: 'success'
    })
  }}
>Click me!</Button>

### Clickable and Closable Notification

<Button
  on:click={() => {
    notification.add({
      title: 'NOOb warning!',
      description: "You don't know what you're doing! Click here to see how you can get started.",
      href: '/docs/overview/getting-started',
      type: 'warning',
      closable: true
    })
  }}
>Click me!</Button>
