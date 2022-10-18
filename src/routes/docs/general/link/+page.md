---
title: Link Component
layout: component
components: ['Link']
---

<script>
  import { Link, Preview } from '$lib/components'
  import { HomeIcon } from 'svelte-feather-icons'
</script>

Ullamco nisi nisi do incididunt laboris cillum. Mollit nostrud et dolore et sunt minim ea ullamco ipsum sit excepteur ut laborum. Cupidatat ut laboris nostrud velit tempor est nulla aliquip. Lorem aliqua quis proident consectetur excepteur aliqua excepteur. Ea minim sit laborum adipisicing enim tempor nostrud laboris. Eiusmod sint tempor dolor officia mollit nostrud sunt cillum quis enim deserunt adipisicing amet.

### Default Link

<Link href="https://mirkoschubert.de" name="mirkoschubert.de" />

### Dark Link

<Link type="dark" href="https://mirkoschubert.de" name="mirkoschubert.de" />

### Internal Link

<Link href="/docs/components/image" name="Image Component" />

### Link with Icon

<Link href="https://mirkoschubert.de" title="mirkoschubert.de">
  <HomeIcon size="32" />
</Link>
