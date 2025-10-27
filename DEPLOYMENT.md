# Deployment Guide

Complete guide to deploy the Browser Logger landing page to Cloudflare Pages.

## Quick Deploy (3 Steps)

### Step 1: Create GitHub Repository

```bash
# Go to https://github.com/new
# Fill in:
# - Repository name: ccblt-landing
# - Description: Flashy landing page for Browser Logger
# - Public
# - No template needed
# - Click "Create repository"
```

### Step 2: Push Code to GitHub

```bash
cd /Users/yroc/scripts/ccblt-landing

git remote add origin https://github.com/cfeign/ccblt-landing.git
git branch -M main
git push -u origin main
```

### Step 3: Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Click **Pages** in left sidebar
3. Click **Create application**
4. Click **Connect to Git**
5. Select **GitHub** and authorize
6. Find and select **ccblt-landing** repo
7. Click **Begin setup**
8. Configure build:
   - **Build command:** `bun run build`
   - **Build output directory:** `dist`
   - **Environment variables:** (leave blank)
9. Click **Save and Deploy**

**That's it!** Cloudflare will auto-build and deploy. Check status at https://dash.cloudflare.com/pages

---

## Configure Custom Domain

Once deployed to Cloudflare Pages:

1. Go to your Pages project → **Settings**
2. Click **Domains**
3. Click **Add custom domain**
4. Enter: `ccblt.coryfeign.com`
5. Click **Continue**
6. Add DNS records in your domain registrar:

```
Type: CNAME
Name: ccblt
Value: [YOUR-PAGES-DEPLOYMENT].pages.dev
TTL: Auto
```

(The exact value is shown in Cloudflare)

7. Wait for DNS propagation (5-15 min)
8. Your site is live at https://ccblt.coryfeign.com! 🎉

---

## Manual Deployment with Wrangler

If you prefer manual control:

```bash
# Authenticate with Cloudflare
wrangler login

# Deploy the build
wrangler pages deploy dist

# Or use npm script
bun run deploy
```

---

## GitHub Integration Details

Cloudflare Pages automatically:
- ✅ Watches your repo for changes
- ✅ Triggers builds on push to main
- ✅ Deploys on successful build
- ✅ Keeps build history
- ✅ Provides rollback capability

No additional config needed!

---

## Troubleshooting

### Build fails with "bun not found"

Cloudflare may not have Bun. Use this workaround:

**In Cloudflare Pages build settings:**
```
Build command: npm install -g bun && bun run build
```

Or switch to npm:
```
Build command: npm install && npm run build
```

### Domain not resolving

1. Verify CNAME record is correct
2. Wait for DNS propagation (up to 48 hours)
3. Clear browser cache (Ctrl+Shift+Delete)
4. Use https://mxtoolbox.com/cname.aspx to check DNS

### Site shows "Page not found"

1. Check Cloudflare Pages build logs
2. Verify `dist/index.html` exists locally
3. Run `bun run build` locally to test
4. Redeploy manually if needed

### Want to see build logs?

```bash
# In Cloudflare Pages:
Your project → Deployments → Click any deployment → View build log
```

---

## Environment Variables (Optional)

To add env vars for analytics, tracking, etc.:

1. Cloudflare Pages → Project Settings → Environment Variables
2. Add key/value pairs
3. Redeploy

Example:
```
ANALYTICS_ID = YOUR_ID
SITE_URL = https://ccblt.coryfeign.com
```

---

## Monitoring

### Check Build Status

```bash
# View latest deployments
wrangler pages deployments list

# View specific deployment
wrangler pages deployment info <DEPLOYMENT_ID>
```

### Monitor Performance

1. Cloudflare Dashboard → Pages → Your project
2. **Analyze** tab shows:
   - Traffic (requests per day)
   - Response times
   - Error rates
   - Visitor locations

---

## Rollback

If something breaks:

1. Cloudflare Pages → Your project → Deployments
2. Find previous good deployment
3. Click three dots → **Rollback to this deployment**
4. Done! Site reverts instantly

---

## Continuous Deployment Flow

```
You push code to main
    ↓
GitHub webhook alerts Cloudflare
    ↓
Cloudflare clones repo
    ↓
Cloudflare runs: bun run build
    ↓
Output uploaded to Pages CDN
    ↓
Site live at ccblt.coryfeign.com
    ↓
Available globally on Cloudflare edge (180+ data centers)
```

---

## Performance Tips

Your site is already optimized, but:

1. **Use Cloudflare Analytics** to monitor performance
2. **Minimize images** - currently zero images (good!)
3. **Monitor Core Web Vitals** - should all be green
4. **Cache-busting** - Cloudflare handles this automatically

---

## Updating After Deployment

The workflow is simple:

```bash
# Make changes
# ...edit files...

# Commit and push
git add .
git commit -m "Update landing page"
git push origin main

# That's it! Cloudflare auto-deploys
```

---

## Custom Domain Setup Summary

### Before Deployment:
- ✅ GitHub repo created
- ✅ Cloudflare Pages connected
- ✅ Initial deployment in progress

### After DNS is ready:
```
https://ccblt.coryfeign.com → Your landing page! 🚀
```

---

## Support

- **Cloudflare Docs:** https://developers.cloudflare.com/pages/
- **Astro Docs:** https://docs.astro.build/
- **Wrangler Docs:** https://developers.cloudflare.com/workers/wrangler/

---

**Ready to deploy?** Follow the 3 steps above and you'll be live in minutes! 🎉
