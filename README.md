# Are we headless yet?

This is the source code to [AreWeHeadlessYet's website](https://areweheadlessyet.wagtail.org) frontend built upon [Next.js](https://nextjs.org/).

The backend is available on the [Wagtail's website source code](https://github.com/wagtail/wagtail.org/tree/main/wagtailio/areweheadlessyet).

## Getting Started

First, you need to run the backend where the data is pulled from. See [wagtail.org's README](https://github.com/wagtail/wagtail.org) to setup a local server.

This build assumes the server will be accessible at the following url: `http://0.0.0.0:8000/`. Update the `.env.development` file to costumize this behavior.

Next, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The site is hosted on Vercel, and is automatically deployed by pushing to the main branch.

Vercel also provides a preview link whenever a new branch is pushed or modified.

## License

[MIT](https://github.com/wagtail/areweheadlessyet/blob/main/LICENSE)

## Thanks

[![Powered by Vercel](https://raw.githubusercontent.com/wagtail/areweheadlessyet/main/.github/powered-by-vercel.svg?sanitize=true)](https://vercel.com/?utm_source=wagtail&utm_campaign=oss)
