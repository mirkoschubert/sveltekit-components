---
title: Form Component
layout: component
components: ['Form', 'FormGroup', 'TextInput', 'EmailInput', 'PhoneInput', 'PasswordInput', 'TextArea', 'CheckBox', 'Button']
---

<script>
  import { Form, FormGroup, TextInput, EmailInput, PhoneInput, PasswordInput, TextArea, CheckBox, Button, Preview } from '$lib/components'
</script>

Velit mollit veniam occaecat nisi deserunt. Adipisicing officia consectetur pariatur eu do minim sint do minim. Esse officia sit sit excepteur esse. Aliqua quis excepteur exercitation amet esse proident eiusmod minim occaecat ipsum proident non. Ut mollit laborum mollit adipisicing aute Lorem. Labore mollit enim cupidatat nisi est.

### Login Form

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

### Contact Form

<Form on:submit>
  <FormGroup legend="Contact Form">
    <TextInput
      label="Name"
      name="name"
      autocomplete="name"
      placeholder="John Doe"
    />
    <EmailInput
      label="Email"
      name="email"
      placeholder="john@doe.com"
    />
    <PhoneInput
      label="Phone"
      name="phone"
      placeholder="+49 1234 1234567"
    />
    <TextArea
      label="Message"
      name="message"
      placeholder="I want to know more about your product."
      maxLength=200
    />
    <CheckBox name="gdpr">
      Yes, I have taken note of the <a href="/docs/forms/form-general">Privacy Policy</a> and agree that the
      data I have provided may be collected and stored electronically. My data will
      only be used strictly for the purpose of processing and responding to my request.
    </CheckBox>
    <Button>Send</Button>
  </FormGroup>
</Form>
