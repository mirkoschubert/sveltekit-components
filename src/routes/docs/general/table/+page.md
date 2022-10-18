---
title: Table Component
layout: component
components: ['table']
---

<script>
  import { Table, Preview } from '$lib/components'
</script>

Velit mollit veniam occaecat nisi deserunt. Adipisicing officia consectetur pariatur eu do minim sint do minim. Esse officia sit sit excepteur esse. Aliqua quis excepteur exercitation amet esse proident eiusmod minim occaecat ipsum proident non. Ut mollit laborum mollit adipisicing aute Lorem. Labore mollit enim cupidatat nisi est.

### Default Table

<Table
  title="Default Table"
  description = "This is a description."
  headers={[
    {id: 'name', name: 'Name'},
    {id: 'protocol', name: 'Protocol'},
    {id: 'port', name: 'Port'},
    {id: 'rule', name: 'Rule'},
  ]}
  rows={[
    {
      id: 'a',
      name: 'Load Balancer 1',
      protocol: 'HTTP',
      port: '3000',
      rule: 'test'
    },
    {
      id: 'b',
      name: 'Load Balancer 2',
      protocol: 'HTTPS',
      port: '5000',
      rule: 'test'
    },
  ]}
>
</Table>
