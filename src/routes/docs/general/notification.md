---
title: Notification Component
layout: component
components: ['Notification', 'NotificationProvider']
---

<script>
  import { Notify, NotificationProvider, Button, Preview } from '$lib/components'
</script>

Laborum quis proident non quis minim quis nulla nulla sint cillum duis commodo. Velit tempor elit ipsum officia ex voluptate enim. Pariatur cillum Lorem dolore magna fugiat mollit proident mollit pariatur aliquip qui. Cillum mollit anim veniam ullamco commodo ex voluptate in culpa pariatur cupidatat. Consequat do sunt nisi laborum pariatur cupidatat Lorem velit.

### Default Notification

<Button
  on:click={() => {
    Notify.show({
      title: 'Successfully saved!',
      description: 'This is an example for a notification.',
      type: 'success'
    })
  }}
>Click me!</Button>
<NotificationProvider duration={5000} position="top-right" closable={true} />

### Clickable Notification

<Button
  on:click={() => {
    Notify.show({
      title: 'NOOb warning!',
      description: "You don't know what you're doing! Click here to see how you can get started.",
      href: '/docs/overview/getting-started',
      type: 'warning'
    })
  }}
>Click me!</Button>
