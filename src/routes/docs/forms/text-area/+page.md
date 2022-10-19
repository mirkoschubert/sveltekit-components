---
title: TextArea Component
layout: component
components: [ 'Form', 'TextArea' ]
---

<script>
  import { Form, TextArea, Preview } from '$lib/components'
</script>

Velit mollit veniam occaecat nisi deserunt. Adipisicing officia consectetur pariatur eu do minim sint do minim. Esse officia sit sit excepteur esse. Aliqua quis excepteur exercitation amet esse proident eiusmod minim occaecat ipsum proident non. Ut mollit laborum mollit adipisicing aute Lorem. Labore mollit enim cupidatat nisi est.

### Default TextArea

<Form on:submit>
  <TextArea
    name="message"
    label="Message"
    placeholder="Please enter your message"
  />
</Form>

### Hide Label

<Form on:submit>
  <TextArea
    hideLabel
    name="message"
    label="Message"
    placeholder="Please enter your message"
  />
</Form>

### With Description

<Form on:submit>
  <TextArea
    name="message"
    label="Message"
    placeholder="Please enter your message"
    description="Describe your problem, but stay objective!"
  />
</Form>

### With Character Counter

<Form on:submit>
  <TextArea
    name="message"
    label="Message"
    placeholder="Please enter your message"
    description="Describe your problem, but stay objective!"
    maxLength=100
  />
</Form>

### Required State

<Form on:submit>
  <TextArea
    required
    name="message"
    label="Message"
    placeholder="Please enter your message"
    description="Describe your problem, but stay objective!"
  />
</Form>

### Disabled State

<Form on:submit>
  <TextArea
    disabled
    name="message"
    label="Message"
    placeholder="Please enter your message"
    description="Describe your problem, but stay objective!"
  />
</Form>

### Warning State

<Form on:submit>
  <TextArea
    warning
    warningText="This is your last warning!"
    name="message"
    label="Message"
    placeholder="Please enter your message"
    description="Describe your problem, but stay objective!"
  />
</Form>

### Invalid State

<Form on:submit>
  <TextArea
    invalid
    invalidText="Your message is invalid!"
    name="message"
    label="Message"
    placeholder="Please enter your message"
    description="Describe your problem, but stay objective!"
  />
</Form>
