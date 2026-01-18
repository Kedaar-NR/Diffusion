# Diffusion

Terminal-style marketing site for Diffusion, built with React, TypeScript, Vite, and Tailwind v4.

## Getting started

- `npm install`
- `npm run dev` to start the app with HMR
- `npm run build` for a production bundle
- `npm run preview` to serve the built assets locally
- `npm run lint` to check formatting and basic correctness

## Project layout

- `src/App.tsx` – routing shell
- `src/components/Terminal.tsx` – animated terminal experience
- `src/pages/Privacy.tsx` and `src/pages/Terms.tsx` – legal pages
- `src/index.css` – global theme and Tailwind layer

## Notes

- Tailwind v4 is configured via `@import "tailwindcss"` in `src/index.css`.
- Session state is kept in `sessionStorage` so returning visitors see a consistent terminal history.
- Assets live in `/public` to keep paths simple in a static deploy.
