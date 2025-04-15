# Hosting Elevated Standards on GitHub Pages - Step by Step Guide

This guide will help you set up Elevated Standards to be hosted on GitHub Pages.

## Option 1: Using GitHub Actions (Recommended)

### Step 1: Push your code to GitHub

1. Create a new repository on GitHub
2. Push your code to the repository:

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to GitHub
git push -u origin main
```

### Step 2: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "Pages" section
4. Under "Build and deployment", select "GitHub Actions" as the source
5. The GitHub Action workflow will automatically build and deploy your site when you push to the main branch

## Option 2: Manual Deployment

If you prefer to deploy manually:

### Step 1: Build the static website

```bash
./build-static.sh
```

### Step 2: Deploy to GitHub Pages manually

1. Create a new branch called `gh-pages`:

```bash
git checkout -b gh-pages
```

2. Copy the contents of the `static-build` directory to the root:

```bash
cp -R static-build/* ./
```

3. Add, commit, and push the changes:

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

4. Configure GitHub Pages:
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to the "Pages" section
   - Under "Build and deployment", select "Deploy from a branch"
   - Select "gh-pages" branch and "/ (root)" as the folder
   - Click "Save"

## Customizing the Base URL

If you're deploying to a project repository (e.g., `username.github.io/repo-name`), you need to update the `base` property in `vite.config.static.ts`:

```typescript
// Before building, update this line:
base: "/your-repo-name/",
```

Then rebuild the project with `./build-static.sh`.

## Testing Your Deployment

Once deployed, your site will be available at:

- For user/organization sites: `https://username.github.io/`
- For project sites: `https://username.github.io/repo-name/`

## Troubleshooting

- If assets are not loading, check that the `base` path in `vite.config.static.ts` is correct
- Check the Actions tab in your GitHub repository for any build errors
- Ensure your repository is public or you have GitHub Pages enabled for private repositories