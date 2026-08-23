# RTLH GitHub Pages setup

This project is set up as a Vite React site so it can be published to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

## Deploy to GitHub Pages

1. Push this project to a GitHub repository.
2. In the repository settings, go to Pages and set the source to `GitHub Actions`.
3. The included GitHub Actions workflow will build and deploy on pushes to `main`.
4. If you are using a project site instead of a custom domain, your site will be published at:
   `https://<your-username>.github.io/<your-repository-name>/`

If you want to use a custom domain, point your DNS records to GitHub Pages and set the custom domain in GitHub Pages settings.
