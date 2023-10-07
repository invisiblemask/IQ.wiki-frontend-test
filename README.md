## IQ.wiki Frontend Test

This repository contains a nextjs application of an Instagram clone home page.

## Table of Contents
- Installation
- Usage
- Project Structure
- Dependencies

## Installation
To run the application locally, please follow these steps:

1. Clone the repository
```bash
git clone https://github.com/invisiblemask/lendsqr-fe-test.git
```
2. Navigate to the project directory:
```bash
cd iq.wiki-frontend-test
```
3. Install the dependencies:
```bash
npm install
```
4. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Feel free to explore and interact with the application to understand its functionality better.

## Project Structure

The project structure follows a standard Next.js application structure, with the main files and directories as follows:

```bash
lendsqr-frontend-test
├── public
│   ├── icons
│   │   └── ...
│   │   ├── images
│   │   │   └── ...
│   └── ...
├── src
│   ├── app
│   │   ├── constants
│   │   │   └── index.tsx
│   │   ├── types
│   │   │   └── index.d.ts
│   │   └── ...
│   │   └── layout.tsx
│   │   └── page.tsx
│   │   └── provider.tsx
│   ├── components
│   │   ├── BottomNavigation.tsx
│   │   ├── Carousel.tsx
│   │   ├── Feed.tsx
│   │   └── ...
├── .gitignore
├── README.md
├── next.config.js
├── package.json
└── tsconfig.json
```

## Technologies Used
The project is built with the following technologies:

- Next.js: A React framework for building server-side rendered and static web applications.
- TypeScript: A typed superset of JavaScript that improves code quality and developer productivity.
- Chakra UI: A simple, modular, and accessible component library that gives you the building blocks to build your React applications.
- Tailwind CSS: A popular CSS framework that provides more flexibility and features for styling.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.


## Dependencies
The application relies on the following dependencies (included in the `package.json` file):

- next
- react
- react-dom
- typescript
- axios
- @types/node
- @types/react
- @types/react-dom
- @chakra-ui/icons
- @chakra-ui/next-js
- @chakra-ui/react
- @emotion/react
- @emotion/styled
- framer-motion
- eslint
- eslint-config-next
