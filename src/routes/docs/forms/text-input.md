---
title: TextInput Component
layout: component
components: ['Form', 'FormGroup', 'TextInput', 'EmailInput', 'PhoneInput', 'UrlInput', 'PasswordInput']
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
    description="Please enter your name!"
  />
</Form>

### EmailInput

<Form on:submit>
  <EmailInput
    name="email"
    label="Email"
    placeholder="john@doe.com"
    description="Please enter your email address!"
  />
</Form>

### PhoneInput

<Form on:submit>
  <PhoneInput
    name="phone"
    label="Phone"
    placeholder="+49 1234 1234567"
    description="Please enter your phone number!"
  />
</Form>

### UrlInput

<Form on:submit>
  <UrlInput
    name="url"
    label="Website"
    placeholder="johndoe.com"
    description="Please enter your web URL!"
  />
</Form>

### PasswordInput

<Form on:submit>
  <PasswordInput
    name="password"
    label="Password"
    placeholder="123456"
    description="Please enter a secure password!"
  />
</Form>
