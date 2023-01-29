# A statically generated portfolio site using Next.js, Markdown, and TypeScript

The personal site starter creates a site that includes:

- professional information
- links to your online presence
- ability to subscribe
- blog posts with social sharing
- responsiveness for mobile

You can see a demo here:  

[https://jacoborshalick.me](https://jacoborshalick.me/)

This project incoporates aspects of the following templates:

- [blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter)
- [Next-JS-Landing-Page-Starter-Template](https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template)

Blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## Demo

[https://jacoborshalick.me](https://jacoborshalick.me/)

## Performance

The site gets a near perfect [Lighthouse](https://developer.chrome.com/en/docs/lighthouse/) score so you can expect your site to be extremely performant.

![Lighthouse Score](https://raw.githubusercontent.com/jorshali/personal-site-starter/main/public/assets/images/lighthouse_score.png "Lighthouse score for https://jacoborshalick.me")

## Deploy with AWS Amplify

You can deploy the `personal-site-starter` using [AWS Amplify](https://aws.amazon.com/amplify/).  A complete tutorial can be found here:

[Host a portfolio site with Next.js and AWS in under 30 minutes](https://jacoborshalick.me/posts/nextjs-and-aws-amplify-host-a-personal-blog-in-under-30-minutes)


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

Now you can simply run:

```bash
npm run dev
```

Your personal site should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/jorshali/personal-site-starter/discussions).

# Enabling subcribers

You can use the [aws-subscribers](https://github.com/jorshali/aws-subscribers) project to store subscribers in AWS.  You can find a tutorial to integrate the `aws-subscribers` project here:

[Start tracking subscribers in AWS in under 30 minutes](https://jacoborshalick.me/posts/build-a-subscriber-rest-api-on-aws-in-under-30-minutes)

# Notes

`personal-site-starter` uses [Tailwind CSS](https://tailwindcss.com) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3).
