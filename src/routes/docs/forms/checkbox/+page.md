---
title: CheckBox Component
layout: component
components: ['Form', 'CheckBox']
---

<script>
  import { Form, CheckBox, Preview } from '$lib/components'
</script>

Velit mollit veniam occaecat nisi deserunt. Adipisicing officia consectetur pariatur eu do minim sint do minim. Esse officia sit sit excepteur esse. Aliqua quis excepteur exercitation amet esse proident eiusmod minim occaecat ipsum proident non. Ut mollit laborum mollit adipisicing aute Lorem. Labore mollit enim cupidatat nisi est.

### Default CheckBox

<Form on:submit>
  <CheckBox
    name="gdpr"
    label="Yes, I have taken note of the Privacy Policy and agree that the data I have provided may be collected and stored electronically. My data will only be used strictly for the purpose of processing and responding to my request."
  />
</Form>

### With HTML Label (Slot)

<Form on:submit>
  <CheckBox
    name="gdpr"
  >
    Yes, I have taken note of the <a href="/docs/forms/checkbox">Privacy Policy</a> and agree that the data I have provided may be collected and stored electronically. My data will only be used strictly for the purpose of processing and responding to my request.
  </CheckBox>
</Form>

### Required State

<Form on:submit>
  <CheckBox
    required
    name="gdpr"
    label="Yes, I have taken note of the Privacy Policy and agree that the data I have provided may be collected and stored electronically. My data will only be used strictly for the purpose of processing and responding to my request."
  />
</Form>

### Disabled State

<Form on:submit>
  <CheckBox
    disabled
    name="gdpr"
    label="Yes, I have taken note of the Privacy Policy and agree that the data I have provided may be collected and stored electronically. My data will only be used strictly for the purpose of processing and responding to my request."
  />
</Form>

### Warning State

<Form on:submit>
  <CheckBox
    warning
    warningText="You might want to tick this!"
    name="gdpr"
    label="Yes, I have taken note of the Privacy Policy and agree that the data I have provided may be collected and stored electronically. My data will only be used strictly for the purpose of processing and responding to my request."
  />
</Form>

### Invalid State

<Form on:submit>
  <CheckBox
    invalid
    invalidText="You have to tick this!"
    name="gdpr"
    label="Yes, I have taken note of the Privacy Policy and agree that the data I have provided may be collected and stored electronically. My data will only be used strictly for the purpose of processing and responding to my request."
  />
</Form>
