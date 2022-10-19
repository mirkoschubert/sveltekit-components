---
title: TextInput Component
layout: component
components: ['Form', 'TextInput', 'EmailInput', 'PhoneInput', 'UrlInput', 'PasswordInput']
---

<script>
  import { Form, TextInput, EmailInput, PhoneInput, UrlInput, PasswordInput, Preview } from '$lib/components'
</script>

Velit mollit veniam occaecat nisi deserunt. Adipisicing officia consectetur pariatur eu do minim sint do minim. Esse officia sit sit excepteur esse. Aliqua quis excepteur exercitation amet esse proident eiusmod minim occaecat ipsum proident non. Ut mollit laborum mollit adipisicing aute Lorem. Labore mollit enim cupidatat nisi est.

### Default TextInput

<Form on:submit>
  <TextInput
    name="username"
    label="User Name"
    autocomplete="username"
    placeholder="John Doe"
  />
</Form>

### EmailInput

<Form on:submit>
  <EmailInput
    name="email"
    label="Email"
    placeholder="john@doe.com"
  />
</Form>

### PhoneInput

<Form on:submit>
  <PhoneInput
    name="phone"
    label="Phone"
    placeholder="+49 1234 1234567"
  />
</Form>

### UrlInput

<Form on:submit>
  <UrlInput
    name="url"
    label="Website"
    placeholder="johndoe.com"
  />
</Form>

### PasswordInput

<Form on:submit>
  <PasswordInput
    name="password"
    label="Password"
    placeholder="123456"
  />
</Form>

### Hidden Label

<Form on:submit>
  <TextInput
    hideLabel
    name="color1"
    label="Favorite Color"
    placeholder="Red"
  />
</Form>

### With Description

<Form on:submit>
  <TextInput
    name="color2"
    label="Favorite Color"
    placeholder="Green"
    description="Choose your favorite color wisely!"
  />
</Form>

### Required State

<Form on:submit>
  <TextInput
    required
    name="color3"
    label="Favorite Color"
    placeholder="Blue"
  />
</Form>

### Disabled State

<Form on:submit>
  <TextInput
    disabled
    name="color4"
    label="Favorite Color"
    placeholder="Red"
  />
</Form>

### Warning State

<Form on:submit>
  <TextInput
    warning
    warningText="Only blue, green and red are allowd."
    name="color5"
    label="Favorite Color"
    placeholder="Pink"
  />
</Form>

### Invalid State

<Form on:submit>
  <TextInput
    invalid
    invalidText="Bluna is not a color!"
    name="color6"
    label="Favorite Color"
    placeholder="Bluna"
  />
</Form>
