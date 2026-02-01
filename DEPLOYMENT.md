# Vercel Deployment Instructions

## Quick Deploy to Vercel

### Step 1: Import Project to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New Project"**
3. Select **Import Git Repository**
4. Choose `vippawar1104/Portfolio` from GitHub
5. Vercel will auto-detect Next.js configuration

### Step 2: Add Environment Variable
**IMPORTANT:** Before deploying, add your Groq API key:

1. In the Vercel project settings, go to **"Environment Variables"**
2. Add the following variable:
   - **Key:** `GROQ_API_KEY`
   - **Value:** `[Your Groq API Key from https://console.groq.com]`
   - **Environment:** Production, Preview, and Development

**Note:** Get your API key from https://console.groq.com/keys

### Step 3: Deploy
1. Click **"Deploy"**
2. Vercel will build and deploy your portfolio
3. Your portfolio will be live at: `https://your-project.vercel.app`

## Alternative: Using Vercel CLI

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# When prompted, add the environment variable in the Vercel dashboard
```

## After Deployment

Your AI Assistant chatbot will work with the Groq API key configured in Vercel environment variables.

**GitHub Repo:** https://github.com/vippawar1104/Portfolio

## Portfolio Features Deployed:
✅ Dark theme with radial gradient background
✅ Liquid-glass effects
✅ Comprehensive experience details
✅ Updated skills (removed Flutter/Dart, added Streamlit/FastAPI)
✅ AI Assistant powered by Llama 3.3 70B via Groq
