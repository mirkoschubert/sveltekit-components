# SvelteKit Components

`sveltekit-components` is an opinionated UI kit with dozens of components dedicated to SvelteKit. For more information please visit the [Demo & Documentation](https://sveltekit-components.mirkoschubert.com) App!

<p align="center"><a href="https://www.buymeacoffee.com/musikuss" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a></p>

**WARNING:** This library is an **early alpha** and under heavy development! Things might break in the future - please use it with care!

## Installation

If you want to create a new project just type the following commands in your command line:

```bash
# create a new project in my-app
npm init svelte@next my-app

# go to the project folder and install the dependencies
cd my-app && npm install

# start the development server
npm run dev
```

To install the library just type:

```bash
npm install -D sveltekit-components
```

You can also use `yarn` or `pnpm` of course.

## Usage

### Import the CSS/ SASS

To use the library you first have to import the main CSS file. Please note that you can only use the SASS files at the moment. Make sure that SASS preprocessing is up and running!

Open or create your `__layout.svelte` file and import the main SASS file in the `<script>` part.

```js
  import 'sveltekit-components/sass/main.sass'
```

### Install the Providers

If you want to use the `Theme` or `Notification` feature you should initialize the corresponding Providers in the `__layout.svelte` as well:

```js
  <script>
    import { ThemeProvider, NotificationProvider } from 'sveltekit-components'
  <script>

  <ThemeProvider fromSystem />
  <NotificationProvider duration={3000} position="top-right" closable="true" />
```

### Using the Library Stores

A few of the components are using their own stores. For example, if you want to send a notification to the `NotificationProvider` you have to import the notification store:

```js
  <script>
    import { Button } from 'sveltekit-components'
  </script>

  <Button
    on:click={() => {
      notification.add({
        title: 'Example',
        description: 'This is an example',
        type: 'success'
      })
    }}
  >
    Click me!
  </Button>
```

## License & Contribution

This software is licensed under the MIT License.

To contribute please fork the project and start a pull request once you're ready!
