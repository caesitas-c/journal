# The Outermost Town (Vite + React + TS + Tailwind)

This project packages your Claude artifact into a deployable web app.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:5173

## Build
```bash
npm run build
npm run preview
```

## Deploy (Vercel: recommended)
1. Push this folder to a new GitHub repository.
2. Go to https://vercel.com → New Project → Import your repo → Deploy.
3. You'll get https://<something>.vercel.app immediately.
4. Add a custom domain in Vercel if you have one.

## Deploy (GitHub Pages)
If you deploy under a repo subpath, uncomment the `base` option in `vite.config.ts` to `/<repo-name>/`.
Then configure a GitHub Actions Pages workflow.
