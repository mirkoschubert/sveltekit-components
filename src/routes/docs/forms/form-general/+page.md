---
title: Form Component
layout: component
components: ['Form', 'FormGroup', 'TextInput', 'PasswordInput', 'Button']
---

<script>
  import { Form, FormGroup, TextInput, PasswordInput, Button, Preview } from '$lib/components'
</script>

Velit mollit veniam occaecat nisi deserunt. Adipisicing officia consectetur pariatur eu do minim sint do minim. Esse officia sit sit excepteur esse. Aliqua quis excepteur exercitation amet esse proident eiusmod minim occaecat ipsum proident non. Ut mollit laborum mollit adipisicing aute Lorem. Labore mollit enim cupidatat nisi est.

### Default Form

<Form on:submit>
  <FormGroup legend="Login Form">
    <TextInput
      label="User Name"
      autocomplete="username"
      placeholder="John Doe"
      description="Please enter your name!"
    />
    <PasswordInput
      name="password"
      label="Password"
      placeholder="123456"
      description="Please enter a secure password!"
    />
  </FormGroup>
  <Button>Login</Button>
</Form>
