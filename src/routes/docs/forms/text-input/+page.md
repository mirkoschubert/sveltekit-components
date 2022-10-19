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
  <EmailInput
    hideLabel
    name="email"
    label="Email"
    placeholder="john@doe.com"
  />
</Form>

### With Description

<Form on:submit>
  <EmailInput
    required
    name="email"
    label="Email"
    placeholder="john@doe.com"
    description="Please enter your email address!"
  />
</Form>

### Required State

<Form on:submit>
  <EmailInput
    required
    name="email"
    label="Email"
    placeholder="john@doe.com"
  />
</Form>

### Disabled State

<Form on:submit>
  <EmailInput
    disabled
    name="email"
    label="Email"
    placeholder="john@doe.com"
  />
</Form>

### Warning State

<Form on:submit>
  <EmailInput
    warning
    warningText="Email addresses of GMX and Gmail aren't allowed."
    name="email"
    label="Email"
    placeholder="johndoe@gmail.com"
  />
</Form>

### Invalid State

<Form on:submit>
  <EmailInput
    invalid
    invalidText="You have to enter a working email address!"
    name="email"
    label="Email"
    placeholder="johndoe"
  />
</Form>
