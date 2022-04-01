---
  title: Section Component
  layout: component
  components: ['Section', 'Row', 'Column']
---

<script>
  import { Section, Row, Column, GridItem, Preview } from '$lib/components'
</script>

Consequat reprehenderit dolor consectetur elit in reprehenderit velit. Voluptate ad cupidatat sunt eu minim culpa laboris veniam officia. Ea ullamco amet cupidatat ullamco incididunt nostrud pariatur adipisicing aliqua culpa minim eiusmod. Qui do fugiat proident velit consequat sint. Exercitation aliqua et aliqua adipisicing laborum veniam veniam reprehenderit velit ut velit dolor ex. In occaecat sint laboris deserunt laborum do duis fugiat occaecat esse. Aute esse laboris non enim.

## Examples

### Default Section

<Section>Consequat veniam laboris non deserunt.</Section>

### Section with Row and Columns

<Section>
  <Row gap="1rem">
    <Column width="38.2%">In ad sint dolor non eiusmod velit cillum dolore ad do commodo.</Column>
    <Column>Exercitation aliqua duis laborum incididunt eiusmod proident voluptate est consectetur.</Column>
  </Row>
</Section>
