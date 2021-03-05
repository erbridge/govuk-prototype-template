<!-- TODO: Replace this heading with your project name -->

# GOV.UK Prototype Template

A prototype using the
[GOV.UK Design System](https://design-system.service.gov.uk/).

This project uses [Svelte](https://svelte.dev/), a superset of HTML, making
working with it feel familiar if you've done any web development before. It's
built with [Sapper](https://sapper.svelte.dev/) for mostly effortless routing,
server-side rendering, and static site generation. If you don't use any dynamic
server-side logic, you don't need to run a server!

<!-- TODO: Delete from here... -->

## Creating a project

### Using GitHub templates

You can create a new project as a GitHub repository from this template.

Click on "Use this template" in this repository on GitHub to create a new
project repository initialized by the template.

### Using `degit`

[`degit`](https://github.com/Rich-Harris/degit) is a scaffolding tool that lets
you create a clean directory from a repository.

To create a new project locally, you can run

```bash
npx degit "github:erbridge/govuk-prototype-template#main" my-app
```

Replace `my-app` with the path where you wish to create the project.

## Configure the project

Search the entire project for `TODO`s and resolve them to set this template up
for your own project.

<!-- TODO: ...to here -->

## Getting started

### Set the project up

Install the dependencies:

```bash
npm install
```

Build the dependencies:

```bash
npm run build
```

### Running the project

Run the project in development mode:

```bash
npm run dev
```

This starts the development server on [localhost:3000](http://localhost:3000).

### Making changes to the project

While running in development mode, you can make changes to most of the project
and have it update live in your browser without restarting the process.

If you need help working with [Sapper](https://sapper.svelte.dev/) or
[Svelte](https://svelte.dev/), consult their documentation.

#### Using TypeScript

This project supports TypeScript as an optional feature. If you don't want to
write TypeScript, you can still write plain, untyped JavaScript as normal.

To opt in to TypeScript, add `lang="ts"` to your `<script>` tags in Svelte
files, and use the `.ts` file extensions for modules.

`@sapper` dependencies are resolved through `src/node_modules/@sapper`, which is
created during the build. You, therefore, need to run or build the project once
to avoid warnings about missing dependencies.

## Using the directory structure

Sapper expects to find two directories in the root of your project — `src` and
`static`.

### `src`

The [`src`](src) directory contains the entry points for your app — `client.ts`,
`server.ts` and (optionally) a `service-worker.ts` — along with a
`template.html` file and a `routes` directory.

#### src/routes

This is the heart of your application. There are two kinds of routes — _pages_,
and _server routes_.

**Pages** are Svelte components written in `.svelte` files. When a user first
visits the application, they are served a server-rendered version of the route
in question, plus some JavaScript that "hydrates" the page and initializes a
client-side router. From that point forward, navigating to other pages is
handled entirely on the client for a fast, app-like feel. (Sapper preloads and
caches the code for these subsequent pages so navigation is instantaneous.)

**Server routes** are modules written in `.js` or `.ts` files that export
functions corresponding to HTTP methods. Each function receives Express
`request` and `response` objects as arguments, plus a `next` function. This is
useful for creating a JSON API, for example.

There are three rules for naming the files that define your routes:

- A file called `src/routes/about.svelte` corresponds to the `/about` route. A
  file called `src/routes/blog/[slug].svelte` corresponds to the `/blog/:slug`
  route, in which case `params.slug` is available to the route
- The file `src/routes/index.svelte` (or `src/routes/index.ts`) corresponds to
  the root of your app. `src/routes/about/index.svelte` is treated the same as
  `src/routes/about.svelte`.
- Files and directories with a leading underscore do _not_ create routes. This
  allows you to colocate helper modules and components with the routes that
  depend on them — for example you could have a file called
  `src/routes/_helpers/datetime.ts` and it would _not_ create a
  `/_helpers/datetime` route.

#### `src/node_modules/images`

Images added to `src/node_modules/images` can be imported into your code using
`import "images/<filename>"`. They are given a dynamically generated filename
containing a hash, allowing for efficient caching and serving the images on a
CDN.

#### `src/node_modules/@sapper`

This directory is managed by Sapper and generated when building. It contains all
the code you import from `@sapper` modules.

### `static`

The [`static`](static) directory contains static assets that should be served
publicly. Files in this directory are available directly under the root URL, eg
`static/image.jpg` is available as `/image.jpg`.

The default [`service-worker.ts`](src/service-worker.ts) will preload and cache
these files, by retrieving a list of `files` from the generated manifest:

```ts
import { files } from "@sapper/service-worker";
```

If you have static files you don't want to cache, you should exclude them from
this list after importing it (and before passing it to `cache.addAll`).

Static files are served using [sirv](https://github.com/lukeed/sirv).

## Configuring the bundler

Sapper uses [rollup.js](https://rollupjs.org/guide/en/) to provide
code-splitting and dynamic imports, as well as compiling your Svelte components.
You can edit the configuration files to add whatever plugins you'd like.

## Running in production

### With a server

To start a production version of your app, run `npm run build && npm start`.
This disables live reloading and activates the appropriate bundler plugins.

### Without a server

If you're not using a database, auth, or any other dynamic, server-side code,
you can probably generate and use a static site. Run `npm run export` to
generate the site. The result will be available from `__sapper__/export`, and
you can run it with `npx serve __sapper__/export` or deploy it to your choice of
static site host.

Due to how Sapper creates exports, you need to either ensure all of your pages
are reachable via links from your index page, or set the
[`--entry` flag](https://sapper.svelte.dev/docs#How_it_works) in the `export`
script in `package.json`.

For more information, see the
[Sapper documentation on exporting](https://sapper.svelte.dev/docs#Exporting).

## Using external components

When using Svelte components installed from npm, such as
[@sveltejs/svelte-virtual-list](https://github.com/sveltejs/svelte-virtual-list),
Svelte needs the original component source (rather than any precompiled
JavaScript that ships with the component). This allows the component to be
rendered server-side, and also keeps your client-side app smaller.

Because of that, it's essential that the bundler doesn't treat the package as an
_external dependency_. You can either modify the `external` option under
`server` in [rollup.config.js](rollup.config.js) or, more simply, install the
package to `devDependencies` rather than `dependencies`, which will cause it to
get bundled (and therefore compiled) with your app:

```bash
npm install --save-dev @sveltejs/svelte-virtual-list
```

## Troubleshooting

### Using Windows and WSL2?

If your project lives outside the WSL root directory,
[this limitation](https://github.com/microsoft/WSL/issues/4169) is known to
cause live-reloading to fail. See
[this issue](https://github.com/sveltejs/sapper/issues/1150) for details.

## Licencing

The code and content of this repository that originated in the
[template](https://github.com/erbridge/govuk-prototype-template) it was created
from is covered by the
[Climate Strike (MIT) License 1.0](https://github.com/erbridge/govuk-prototype-template/blob/main/LICENCE).
That means that it may not be used by companies that rely on fossil fuel
extraction as their primary means of revenue.
