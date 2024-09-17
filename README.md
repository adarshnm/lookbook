# Lookbook Application

## Overview

This project is a fashion e-commerce lookbook application built using Next.js, Tailwind CSS, and Shadcn UI library. It showcases a series of "looks" consisting of images and videos, allowing users to preview and interact with them. The application includes features like carousel effects, product annotations, and a separate product detail page.

## Features

- **Image/Video Preview**: Images are previewed with a timer/progress bar that completes in 5 seconds. Videos are played till completion, with the option to mute/unmute.
- **Carousel Navigation**: Users can navigate through images/videos using left/right arrows.
- **Look Navigation**: Users can swipe up/down to navigate between different looks.
- **Annotations/Legends**: Images include annotations to highlight specific products.
- **Product Detail Page**: Clicking on a product takes the user to a separate Product Detail Page.

## Tech Stack

- **Next.js**: React framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **ShadcnUI**: UI library for pre-built components.
- **React Swipeable**: For implementing swipe gestures.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3200](http://localhost:3200) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
