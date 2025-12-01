# Digital Card - Personal Business Card

Personal developer landing page built with Astro and Tailwind CSS.

🌐 **Live Site:** [https://mrgovor64.github.io/digital-card](https://mrgovor64.github.io/digital-card)

## 🚀 Tech Stack

- [Astro](https://astro.build) - Static site generator
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- TypeScript - Type safety

## 📦 Project Structure

```
/
├── public/
│   ├── images/          # Profile images and badges
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── icons/       # SVG icon components
│   ├── pages/
│   │   └── index.astro  # Main page
│   └── styles/
│       └── global.css   # Global styles
└── package.json
```

## 🛠️ Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions.

### Setup GitHub Pages:

1. Go to your repository settings on GitHub
2. Navigate to **Pages** section
3. Under **Source**, select **Deploy from a branch**
4. Select branch: `gh-pages` and folder: `/ (root)`
5. Push to `main` branch - the workflow will automatically build and deploy to `gh-pages` branch

The site will be available at: `https://mrgovor64.github.io/digital-card`

## 📝 License

Personal project - All rights reserved.
