# My NextJS Learnings and Practices

## Setup and Run

Setup installed using command

```powershell
# With starter template page
npx create-next-app nextjs-blog --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
```

Run project using command

```powershell
npm run dev
# or
yarn dev
```

Project will be started serving locally on http://localhost:3000

# Docs

- [Documentation](https://nextjs.org/docs): Find in-depth information about Next.js features and API.
- [Learn](https://nextjs.org/learn/basics/create-nextjs-app): Learn about Next.js in interactive course with quizzes.
- [Examples](https://github.com/vercel/next.js/tree/master/examples): Discover and deploy boilerplate example Next.js projects.
- [Deploy](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app): Instantly deploy your Next.js site to a public URL with Vercel.

# Learnings

## Navigate Between pages

In Next.js we create pages using the integrated `file system routing`. Pages exist inside `/pages`.When a file is added to the `pages` directory it's automatically available as a route.

- **Different Patterns to define files inside `pages` directory along with `routes`:**
- **Index Routes**
  - `pages/index.js` is associated with the `/` route.
  - `pages/blog/index.js` is associated with the `/blog` route.
- **Nested Routes**
  - `pages/blog/first-post.js` is associated with the `/blog/first-post` route.
  - `pages/dashboard/settings/username.js` is associated with the `/dashboard/settings/username` route.
- **Dynamic Route Segment**
  - `pages/blog/[slug].js` is associated with the `/blog/:slug` (`/blog/hello-world`) route.
  - `pages/[username]/settings.js` is associated with the `/:username/settings` (`/foo/settings`) route.
  - `pages/post/[...all].js` is associated with the `/post/*` (`/post/2020/id/title`) route.

When linking between pages on websites, you use the `<a>` HTML tag.

In Next.js, you use the `Link` Component from `next/link` to wrap the `<a>` tag. `<Link>` allows you to do client-side navigation to a different page in the application.
