# Digital Card — Personal Website

Lightweight personal website for Vladimir Govorukhin, built with Astro and Tailwind CSS.

🌐 **Live site:** [https://vladimir.govorukhin.net](https://vladimir.govorukhin.net)

## 🚀 Tech stack

- [Astro](https://astro.build) — static site generator
- [Tailwind CSS](https://tailwindcss.com) — styling
- TypeScript — static validation
- GitHub Actions — build and deployment

## 📦 Project structure

```text
/
├── public/
│   ├── images/          # Profile image and certification badges
│   ├── scripts/         # Lightweight client-side interactions
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── icons/       # SVG icon components
│   │   └── Layout.astro # Shared metadata and document shell
│   ├── pages/
│   │   ├── index.astro  # Main page
│   │   └── 404.astro    # Not-found page
│   └── styles/
│       └── global.css   # Global styles
└── package.json
```

## 🛠️ Commands

| Command            | Action                                      |
| :----------------- | :------------------------------------------ |
| `npm install`      | Installs dependencies                       |
| `npm run dev`      | Starts the local server at `localhost:4321` |
| `npm run check`    | Runs Astro and TypeScript checks            |
| `npm run build`    | Creates a production build in `./dist/`     |
| `npm run validate` | Runs checks and creates a production build  |
| `npm run preview`  | Previews the production build locally       |

Node.js 24 or newer is required. With `nvm`, run `nvm use` before installing dependencies.

## 🚀 Deployment

The project is automatically validated and deployed to GitHub Pages by GitHub Actions.

### GitHub Pages setup

1. Open the repository settings on GitHub.
2. Navigate to **Pages**.
3. Under **Source**, select **Deploy from a branch**.
4. Select the `gh-pages` branch and `/ (root)` folder.
5. Push to `main`; the workflow validates and deploys the site to `gh-pages`.

The custom domain is stored in `public/CNAME`. Scheduled workflow runs keep date-sensitive content current even when there are no code changes.

## 📝 License

Personal project — all rights reserved.
