# Repository Setup Instructions

Due to PowerShell issues with Unicode characters in the directory path, please run these commands manually in your terminal:

## Step 1: Navigate to the project directory
```bash
cd "E:\MISHAEL WORK\𝐍𝐨𝐫𝐭𝐡 𝐑𝐢𝐟𝐭 𝐕𝐚𝐥𝐥𝐞𝐲 𝐅𝐢𝐞𝐥𝐝"
```

## Step 2: Initialize Git repository
```bash
git init
```

## Step 3: Add files to staging
```bash
git add .
```

## Step 4: Make initial commit
```bash
git commit -m "Initial commit: Add README and gitignore"
```

## Step 5: Create GitHub repository
1. Go to GitHub.com
2. Click "New repository"
3. Name it "north-rift-valley-field" (or your preferred name)
4. Don't initialize with README (we already have one)
5. Click "Create repository"

## Step 6: Add remote origin
```bash
git remote add origin https://github.com/YOUR_USERNAME/north-rift-valley-field.git
```

## Step 7: Push to GitHub
```bash
git branch -M main
git push -u origin main
```

## Alternative: Use GitHub CLI (if installed)
```bash
gh repo create north-rift-valley-field --public --source=. --remote=origin --push
```

Replace `YOUR_USERNAME` with your actual GitHub username.
