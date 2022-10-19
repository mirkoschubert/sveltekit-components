---
title: RadioButton Component
layout: component
components: ['Form', 'RadioButton', 'RadioButtonGroup']
---

<script>
  import { Form, RadioButton, RadioButtonGroup, Preview } from '$lib/components'
</script>

Velit mollit veniam occaecat nisi deserunt. Adipisicing officia consectetur pariatur eu do minim sint do minim. Esse officia sit sit excepteur esse. Aliqua quis excepteur exercitation amet esse proident eiusmod minim occaecat ipsum proident non. Ut mollit laborum mollit adipisicing aute Lorem. Labore mollit enim cupidatat nisi est.

### Default RadioButton

<Form on:submit>
  <RadioButton id="one" name="one" label="Only one option" />
</Form>

### With HTML Label (Slot)

<Form on:submit>
  <RadioButton id="one" name="one">
    <a href="/docs/forms/RadioButton">Only one option</a>
  </RadioButton>
</Form>

### Required State

<Form on:submit>
  <RadioButton required name="gdpr" label="Only one option" />
</Form>

### Disabled State

<Form on:submit>
  <RadioButton disabled name="gdpr" label="Only one option" />
</Form>

## RadioButtonGroup

Proident qui culpa ullamco sint sunt exercitation veniam exercitation aliquip aliquip labore. Tempor aute ullamco irure eu esse enim aliqua exercitation exercitation qui sit incididunt id. Adipisicing ex aliquip tempor ex. Id ullamco culpa dolor excepteur. Id amet nulla deserunt ex deserunt ex consectetur. Do deserunt ut qui aute anim Lorem ad.

### Default RadioButtonGroup

<Form on:submit>
  <RadioButtonGroup
    title="Languages"
    name="lang"
    data={[
      { id: 'html', label: 'HTML'},
      { id: 'css', label: 'CSS'},
      { id: 'js', label: 'JavaScript'}
    ]}
  />
</Form>

### Horizontal RadioButtonGroup

<Form on:submit>
  <RadioButtonGroup
    horizontal
    title="Languages"
    name="lang"
    data={[
      { id: 'html', label: 'HTML'},
      { id: 'css', label: 'CSS'},
      { id: 'js', label: 'JavaScript'}
    ]}
  />
</Form>

### RadioButtonGroup with Slots

<Form on:submit>
  <RadioButtonGroup
    horizontal
    title="Languages"
  >
    <RadioButton id="html" name="lang" label="HTML" />
    <RadioButton id="css" name="lang" label="CSS" />
    <RadioButton id="js" name="lang" label="JavaScript" />
  </RadioButtonGroup>
</Form>

### Required State

<Form on:submit>
  <RadioButtonGroup
    title="Languages"
    name="lang"
    required
    data={[
      { id: 'html', label: 'HTML'},
      { id: 'css', label: 'CSS'},
      { id: 'js', label: 'JavaScript'}
    ]}
  />
</Form>

### Disabled State

<Form on:submit>
  <RadioButtonGroup
    title="Languages"
    name="lang"
    disabled
    data={[
      { id: 'html', label: 'HTML'},
      { id: 'css', label: 'CSS'},
      { id: 'js', label: 'JavaScript'}
    ]}
  />
</Form>

### Warning State

<Form on:submit>
  <RadioButtonGroup
    title="Languages"
    name="lang"
    warning
    warningText="Select a language you actually know!"
    data={[
      { id: 'html', label: 'HTML'},
      { id: 'css', label: 'CSS'},
      { id: 'js', label: 'JavaScript'}
    ]}
  />
</Form>

### Invalid State

<Form on:submit>
  <RadioButtonGroup
    title="Languages"
    name="lang"
    invalid
    invalidText="You don't know that language!"
    data={[
      { id: 'html', label: 'HTML'},
      { id: 'css', label: 'CSS'},
      { id: 'js', label: 'JavaScript'}
    ]}
  />
</Form>
