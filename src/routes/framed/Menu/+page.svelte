<script>
  import { Content, Section, Header, HeaderLeft, HeaderLogo, Menu, MenuSection, MenuItem } from '$lib/components'
  import { ApertureIcon } from 'svelte-feather-icons'
</script>

<Header isSticky>
  <HeaderLeft>
    <HeaderLogo>
      <ApertureIcon size="32" />
    </HeaderLogo>
  </HeaderLeft>
</Header>
<div class="wrapper">
  <Menu>
    <MenuSection label="Section 1">
      <MenuItem label="Item 1.1" href="" />
      <MenuItem label="Item 1.2 with Tag" href="" tag="Tag" />
    </MenuSection>
    <MenuSection label="Section 2">
      <MenuItem label="Item 2.1 disabled" href="" disabled />
    </MenuSection>
  </Menu>
  <Content>
    <Section>Content</Section>
  </Content>
</div>