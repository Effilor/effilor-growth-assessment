# Effilor Growth Assessment - Quick Start Guide

Get your assessment deployed in **10 minutes** by following these steps.

---

## Step 1: Prepare Your Files (2 minutes)

Ensure you have all required files:

```
✅ index.html
✅ effilor-logo.jpg
✅ api/send-email.js
✅ README.md
✅ QUICK_START.md (this file)
✅ TESTING_CHECKLIST.md
✅ package.json
✅ .gitignore
```

---

## Step 2: Create GitHub Repository (3 minutes)

### Option A: Using GitHub Web Interface

1. Go to https://github.com/new
2. Repository name: `growth-assessment` (or your preferred name)
3. Set to **Public** or **Private** (your choice)
4. **Do NOT** initialize with README (we have our own files)
5. Click **Create repository**

### Option B: Using GitHub Desktop

1. Open GitHub Desktop
2. File → New Repository
3. Name: `growth-assessment`
4. Click **Create Repository**

---

## Step 3: Upload Files to GitHub (2 minutes)

### Using GitHub Web Interface:

1. On your new repository page, click **uploading an existing file**
2. Drag and drop ALL files:
   - `index.html`
   - `effilor-logo.jpg`
   - `README.md`
   - `QUICK_START.md`
   - `TESTING_CHECKLIST.md`
   - `package.json`
   - `.gitignore`
3. Create `api` folder by clicking "Create new file"
4. Type `api/send-email.js` in the name field
5. Paste the contents of `send-email.js`
6. Commit changes

### Using Git Command Line:

```bash
git init
git add .
git commit -m "Initial commit - Growth Assessment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/growth-assessment.git
git push -u origin main
```

### Using GitHub Desktop:

1. Add files to your local repository folder
2. Commit changes with message "Initial commit - Growth Assessment"
3. Click **Publish repository**

---

## Step 4: Deploy to Vercel (2 minutes)

### First Time Vercel User:

1. Go to https://vercel.com/signup
2. Sign up with your GitHub account
3. Authorize Vercel to access your repositories

### Deploy Your Assessment:

1. Go to https://vercel.com/new
2. Click **Import Git Repository**
3. Select your `growth-assessment` repository
4. Configure project:
   - **Framework Preset**: Other
   - **Build Command**: Leave EMPTY
   - **Output Directory**: Leave EMPTY
   - **Install Command**: Leave default
5. Click **Deploy**
6. Wait 1-2 minutes for deployment to complete

---

## Step 5: Configure SendGrid (2 minutes)

### Get SendGrid API Key:

1. Log in to https://sendgrid.com
2. Go to **Settings** → **API Keys**
3. Click **Create API Key**
4. Name: `Effilor Growth Assessment`
5. Permissions: **Full Access** (or at minimum **Mail Send**)
6. Click **Create & View**
7. **COPY THE KEY** (you won't see it again!)

### Add to Vercel:

1. In your Vercel project, go to **Settings** → **Environment Variables**
2. Click **Add New**
3. Key: `SENDGRID_API_KEY`
4. Value: Paste your SendGrid API key
5. Check all environments: **Production**, **Preview**, **Development**
6. Click **Save**

### IMPORTANT: Redeploy

1. Go to **Deployments** tab
2. Click the three dots (•••) on the latest deployment
3. Click **Redeploy**
4. Environment variables only work after redeployment!

---

## Step 6: Test Your Assessment (1 minute)

1. Visit your Vercel deployment URL (e.g., `growth-assessment.vercel.app`)
2. Complete the assessment with test data
3. Submit the email form
4. Check **shankar.ramamurthy@effilor.com** inbox (or spam folder)
5. Verify email arrives with complete data

---

## Common Issues & Solutions

### ❌ Logo not displaying
**Solution**: Ensure `effilor-logo.jpg` is in repository root (not in a subfolder)

### ❌ Email not sending
**Solution**: 
1. Verify SendGrid API key is correct
2. Make sure you **redeployed** after adding environment variable
3. Check Vercel function logs: Settings → Functions → Click on function

### ❌ API returns 404
**Solution**: 
1. Verify file is `api/send-email.js` (correct spelling)
2. Check folder structure in GitHub
3. Redeploy

### ❌ Vercel tries to run build
**Solution**: Create `vercel.json` in root:
```json
{
  "buildCommand": null,
  "outputDirectory": null,
  "installCommand": "npm install"
}
```

---

## Verification Checklist

Before declaring success, verify:

- [ ] Assessment loads at your Vercel URL
- [ ] Logo displays correctly
- [ ] All 28 questions work
- [ ] Progress bar updates
- [ ] Results page shows correct scores
- [ ] Email form works
- [ ] Email actually arrives at shankar.ramamurthy@effilor.com
- [ ] Email contains all submission data
- [ ] Works on mobile device

---

## Next Steps

1. **Test thoroughly** using [TESTING_CHECKLIST.md](TESTING_CHECKLIST.md)
2. **Share URL** with Effilor partners for feedback
3. **Monitor** email submissions
4. **Optional**: Set up custom domain in Vercel

---

## Need Help?

**Email**: shankar.ramamurthy@effilor.com

**Check Logs**:
- Vercel: Settings → Functions → View function logs
- Browser: Open Developer Console (F12) → Console tab

**Common Questions**:
- How to change recipient email? Edit `api/send-email.js`, line with `to:` field
- How to customize colors? Replace `#6B3D7A` throughout `index.html`
- How to add questions? Edit `questions` array in `index.html`

---

## Deployment Time: ~10 minutes

If it takes longer, you're probably overthinking it! 😊

**Remember**: The key to success is completing ALL steps including the redeploy after adding environment variables.
