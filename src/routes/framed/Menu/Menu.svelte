<script>
  import { Menu, MenuSection, MenuItem } from '$lib/components'
</script>

<Menu>
  <MenuSection label="Section 1">
    <MenuItem label="Item 1.1" href="" />
    <MenuItem label="Item 1.2 with Tag" href="" tag="Tag" />
  </MenuSection>
  <MenuSection label="Section 2">
    <MenuItem label="Item 2.1 disabled" href="" disabled />
  </MenuSection>
</Menu>