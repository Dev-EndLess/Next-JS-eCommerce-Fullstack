# E-Commerce Demo build with NextJS/Sanity/Stripe

[![N|Netlify](https://i.postimg.cc/K8S32p9W/Logo-formation-nextjs-200x175-1.png)](https://www.netlify.com/)

[Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). 👈

```sh
npx create-next-app@latest
```

## Getting Started

First, run the development server 👈

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Backend is managment with [Sanity.io](https://www.sanity.io/) 

[![N|NextJS](https://i.postimg.cc/N0N1B72r/116-1166936-sanity-io-logo-png-transparent-png.png)](https://nextjs.org/)

## To get started, run this in your command line:

Step 1: Install npm package 👈

```sh
npm create sanity@latest -- --template clean --create-project "Sanity Project" --dataset production
```

Step 2: Enter the Studio's directory 👈

```sh
cd sanity-project
```

Step 3: Run this command within the Studio's folder 👈

```sh
npm run dev
```

This will build the studio application and start a local development server so you can run the app in your browser. Once the build is complete, you can head over to http://localhost:3333.

# Payment are managment with [Stripe](https://stripe.com/) 

[![S|Stripe](https://i.postimg.cc/fLG5Qj1f/stripe-background-image-750x400.png)](https://stripe.com/it)

Prebuilt Checkout page: https://stripe.com/docs/checkout/quickstart

## Setup the Server

Install the Stripe libraries
Install the packages and import them in your code. Alternatively, if you’re starting from scratch and need a package.json file, download the project files using the link in the code editor.

Install the libraries 👈

```sh
npm install --save stripe @stripe/stripe-js next
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.





