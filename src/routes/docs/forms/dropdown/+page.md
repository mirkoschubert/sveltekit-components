---
title: Dropdown Component
layout: component
components: ['Form', 'Dropdown']
---

<script>
  import { Form, Dropdown, Preview } from '$lib/components'
</script>

Velit mollit veniam occaecat nisi deserunt. Adipisicing officia consectetur pariatur eu do minim sint do minim. Esse officia sit sit excepteur esse. Aliqua quis excepteur exercitation amet esse proident eiusmod minim occaecat ipsum proident non. Ut mollit laborum mollit adipisicing aute Lorem. Labore mollit enim cupidatat nisi est.

### Default Dropdown

<Form on:submit>
  <Dropdown
    name="dropdown1"
    label="Contact"
    items={[
      { id: "0", text: "Slack" },
      { id: "1", text: "Email" },
      { id: "2", text: "Fax" },
    ]}
  />
</Form>

### With Selected ID

<Form on:submit>
  <Dropdown
    name="dropdown2"
    label="Contact"
    selectedId="1"
    items={[
      { id: "0", text: "Slack" },
      { id: "1", text: "Email" },
      { id: "2", text: "Fax" },
    ]}
  />
</Form>

### With Description

<Form on:submit>
  <Dropdown
    name="dropdown3"
    label="Contact"
    description="Tell me how I can contact you"
    selectedId="0"
    items={[
      { id: "0", text: "Slack" },
      { id: "1", text: "Email" },
      { id: "2", text: "Fax" },
    ]}
  />
</Form>

### Disabled Items

<Form on:submit>
  <Dropdown
    name="dropdown4"
    label="Contact"
    description="Tell me how I can contact you"
    selectedId="0"
    items={[
      { id: "0", text: "Slack" },
      { id: "1", text: "Email" },
      { id: "2", text: "Fax", disabled: true },
    ]}
  />
</Form>

### Format item display text

<Form on:submit>
  <Dropdown
    name="dropdown5"
    label="Contact"
    description="Tell me how I can contact you"
    selectedId="0"
    items={[
      { id: "0", text: "Slack" },
      { id: "1", text: "Email" },
      { id: "2", text: "Fax" },
    ]}
    itemToString={(item) => {
      return item.text + " (" + item.id + ")";
    }}
  />
</Form>

### Direction

<Form on:submit>
  <Dropdown
    name="dropdown6"
    label="Contact"
    description="Tell me how I can contact you"
    selectedId="0"
    direction="top"
    items={[
      { id: "0", text: "Slack" },
      { id: "1", text: "Email" },
      { id: "2", text: "Fax" },
    ]}
  />
</Form>

### Inline

<Form on:submit>
  <Dropdown
    inline
    name="dropdown7"
    label="Contact"
    description="Tell me how I can contact you"
    selectedId="0"
    items={[
      { id: "0", text: "Slack" },
      { id: "1", text: "Email" },
      { id: "2", text: "Fax" },
    ]}
  />
</Form>

### Required State

<Form on:submit>
  <Dropdown
    required
    name="dropdown8"
    label="Contact"
    description="Tell me how I can contact you"
    selectedId="0"
    items={[
      { id: "0", text: "Slack" },
      { id: "1", text: "Email" },
      { id: "2", text: "Fax" },
    ]}
  />
</Form>

### Disabled State

<Form on:submit>
  <Dropdown
    disabled
    name="dropdown9"
    label="Contact"
    description="Tell me how I can contact you"
    selectedId="0"
    items={[
      { id: "0", text: "Slack" },
      { id: "1", text: "Email" },
      { id: "2", text: "Fax" },
    ]}
  />
</Form>

### Warning State

<Form on:submit>
  <Dropdown
    warning
    warningText="You'll be warned!"
    name="dropdown10"
    label="Contact"
    description="Tell me how I can contact you"
    selectedId="0"
    items={[
      { id: "0", text: "Slack" },
      { id: "1", text: "Email" },
      { id: "2", text: "Fax" },
    ]}
  />
</Form>

### Invalid State

<Form on:submit>
  <Dropdown
    invalid
    invalidText="This field is invalid"
    name="dropdown11"
    label="Contact"
    description="Tell me how I can contact you"
    selectedId="0"
    items={[
      { id: "0", text: "Slack" },
      { id: "1", text: "Email" },
      { id: "2", text: "Fax" },
    ]}
  />
</Form>
