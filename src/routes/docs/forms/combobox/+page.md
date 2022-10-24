---
title: ComboBox Component
layout: component
components: ['Form', 'ComboBox']
---

<script>
  import { Form, ComboBox, Preview } from '$lib/components'
</script>

Velit mollit veniam occaecat nisi deserunt. Adipisicing officia consectetur pariatur eu do minim sint do minim. Esse officia sit sit excepteur esse. Aliqua quis excepteur exercitation amet esse proident eiusmod minim occaecat ipsum proident non. Ut mollit laborum mollit adipisicing aute Lorem. Labore mollit enim cupidatat nisi est.

### Default ComboBox

<Form on:submit>
  <ComboBox
    name="combobox"
    label="ComboBox"
    placeholder="Please select one item"
    items={[
      { id: "0", text: "Slack" },
      { id: "1", text: "Email" },
      { id: "2", text: "Fax"},
    ]}
  />
</Form>

### With Selected ID

<Form on:submit>
  <ComboBox
    name="combobox"
    label="ComboBox"
    placeholder="Please select one item"
    selectedId="1"
    items={[
      { id: "0", text: "Slack" },
      { id: "1", text: "Email" },
      { id: "2", text: "Fax"},
    ]}
  />
</Form>

### With Description

<Form on:submit>
  <ComboBox
    name="combobox"
    label="ComboBox"
    placeholder="Please select one item"
    description="Tell me how I can contact you"
    items={[
      { id: "0", text: "Slack" },
      { id: "1", text: "Email" },
      { id: "2", text: "Fax"},
    ]}
  />
</Form>

### Disabled Items

<Form on:submit>
  <ComboBox
    name="combobox"
    label="ComboBox"
    placeholder="Please select one item"
    description="Tell me how I can contact you"
    items={[
      { id: "0", text: "Slack" },
      { id: "1", text: "Email" },
      { id: "2", text: "Fax", disabled: true},
    ]}
  />
</Form>

### Direction

<Form on:submit>
  <ComboBox
    name="combobox"
    label="ComboBox"
    placeholder="Please select one item"
    description="Tell me how I can contact you"
    direction="top"
    items={[
      { id: "0", text: "Slack" },
      { id: "1", text: "Email" },
      { id: "2", text: "Fax", disabled: true},
    ]}
  />
</Form>

### Required State

<Form on:submit>
  <ComboBox
    required
    name="combobox"
    label="ComboBox"
    placeholder="Please select one item"
    description="Tell me how I can contact you"
    items={[
      { id: "0", text: "Slack" },
      { id: "1", text: "Email" },
      { id: "2", text: "Fax", disabled: true},
    ]}
  />
</Form>

### Disabled State

<Form on:submit>
  <ComboBox
    disabled
    name="combobox"
    label="ComboBox"
    placeholder="Please select one item"
    description="Tell me how I can contact you"
    items={[
      { id: "0", text: "Slack" },
      { id: "1", text: "Email" },
      { id: "2", text: "Fax", disabled: true},
    ]}
  />
</Form>

### Warning State

<Form on:submit>
  <ComboBox
    warning
    warningText="You'll be warned!"
    name="combobox"
    label="ComboBox"
    placeholder="Please select one item"
    description="Tell me how I can contact you"
    items={[
      { id: "0", text: "Slack" },
      { id: "1", text: "Email" },
      { id: "2", text: "Fax", disabled: true},
    ]}
  />
</Form>

### Invalid State

<Form on:submit>
  <ComboBox
    invalid
    invalidText="This field is invalid"
    name="combobox"
    label="ComboBox"
    placeholder="Please select one item"
    description="Tell me how I can contact you"
    items={[
      { id: "0", text: "Slack" },
      { id: "1", text: "Email" },
      { id: "2", text: "Fax", disabled: true},
    ]}
  />
</Form>
