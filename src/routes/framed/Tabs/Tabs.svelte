<script>
  import { Tabs, Tab, TabContent } from '$lib/components'
</script>

<Tabs>
  <Tab label="Tab 1" />
  <Tab label="Tab 2" />
  <Tab label="Tab 3 disabled" disabled />
  <svelte:fragment slot="content">
    <TabContent id="tab1">
      <p>Tab 1 Content</p>
    </TabContent>
    <TabContent id="tab2">
      <p>Tab 2 Content</p>      
    </TabContent>
    <TabContent id="tab3">
      <p>You shouldn't see this!</p>
    </TabContent>
  </svelte:fragment>
</Tabs>