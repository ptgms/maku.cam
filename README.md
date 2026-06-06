# maku.cam

Marketing website for **maku** — a roll of film, not a camera roll.

Built with **React + Vite**. One component per section, shared components for the
film frame, wordmark, nav, and footer. Deployed to **GitHub Pages** via GitHub Actions.

## Structure

```
maku.cam/
├── index.html              # Vite entry
├── src/
│   ├── App.jsx
│   ├── components/         # Nav, Hero, Concept, Features, MakuPlus, AppIcons, Footer + shared
│   └── assets/             # hashed WebP icons + demo photos
├── public/CNAME            # custom domain (maku.cam)
└── .github/workflows/deploy.yml
```

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Deploy

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes `dist/` to GitHub Pages.

**One-time setup** in the GitHub repo: **Settings → Pages → Build and deployment →
Source → "GitHub Actions"**. The custom domain (`maku.cam`) is configured via the
`public/CNAME` file, which ships in the build output.
