## React App

This project is a React + Vite application with a custom homepage and an EC2 deployment workflow for publishing the app to an Apache web server.

## Features

- React 19 + Vite
- Local development with `npm run dev`
- Production build with `npm run build`
- Preview build with `npm run preview`
- EC2 deployment pipeline via GitHub Actions

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build the app for production:
   ```bash
   npm run build
   ```

## Deployment

The workflow in `.github/workflows/deploy.yml` deploys the app to an EC2 instance whenever changes are pushed to the `main` branch.


## Project structure

- `src/` – React application source files
- `public/` – static assets
- `.github/workflows/` – deployment automation