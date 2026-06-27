# The Daily Prophet — Aditya Verma's Resume

A Harry Potter-themed résumé built as a single-page React app, styled to look like a wizarding newspaper front page.

## Stack

- **React 19** + **TypeScript**
- **Vite 8** (dev server + build)
- Plain CSS — no UI library, all newspaper layout hand-crafted

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Adding a Profile Photo

In `src/App.tsx`, set the `PHOTO_SRC` constant to your image path:

```ts
const PHOTO_SRC = '/photo.jpg'   // place the file in /public
```

Leave it as an empty string to show the placeholder box.

## Build

```bash
npm run build     # outputs to dist/
npm run preview   # preview the production build locally
```

## Lint

```bash
npm run lint
```
