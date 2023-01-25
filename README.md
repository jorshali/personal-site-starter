# A statically generated personal site using Next.js, Markdown, and TypeScript

This project incoporates aspects of the following templates:

- [blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter)
- [Next-JS-Landing-Page-Starter-Template](https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template)

Blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## Demo

[https://jacoborshalick.me](https://jacoborshalick.me/)

## Deploy your own

Deploy the example using [AWS Amplify]().

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example https://github.com/jorshali/personal-site-starter personal-site-starter-app
```

```bash
yarn create next-app --example https://github.com/jorshali/personal-site-starter personal-site-starter-app
```

```bash
pnpm create next-app --example https://github.com/jorshali/personal-site-starter personal-site-starter-app
```

Your personal site should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/jorshali/personal-site-starter/discussions).

# Notes

`personal-site-starter` uses [Tailwind CSS](https://tailwindcss.com) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3).
