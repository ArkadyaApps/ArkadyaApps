# Build Instructions for Production Deployment

## Building the Frontend

### Prerequisites
- Node.js 16+ installed
- Yarn package manager

### Step 1: Install Dependencies
```bash
cd /app/frontend
yarn install
```

### Step 2: Create Production Environment File (Optional)
Create `/app/frontend/.env.production`:
```env
# Production Backend URL (update with your actual backend)
REACT_APP_BACKEND_URL=https://your-backend-domain.com

# Disable source maps in production for security
GENERATE_SOURCEMAP=false
```

### Step 3: Build the Application
```bash
cd /app/frontend
yarn build
```

This will create a `build` folder at `/app/frontend/build/` containing:
- `index.html` - Main HTML file
- `static/` - All CSS, JS, and media files
- `asset-manifest.json` - Asset mapping
- `_redirects` - SPA routing configuration
- `_headers` - Security headers

### Step 4: Test Production Build Locally
```bash
# Install serve if not already installed
npm install -g serve

# Serve the build folder
cd /app/frontend
serve -s build -l 3000
```

Open http://localhost:3000 to test the production build.

---

## What Gets Built

### File Structure After Build:
```
build/
├── index.html              # Main HTML file
├── asset-manifest.json     # Asset mapping
├── _redirects             # SPA routing (for Cloudflare Pages)
├── _headers               # Security headers
├── favicon.ico
├── logo192.png
├── logo512.png
├── manifest.json
├── robots.txt
└── static/
    ├── css/
    │   ├── main.[hash].css           # Minified CSS
    │   └── main.[hash].css.map
    ├── js/
    │   ├── main.[hash].js            # Minified JavaScript
    │   ├── main.[hash].js.map
    │   └── [chunk].[hash].js         # Code-split chunks
    └── media/
        └── [images and fonts]
```

### Optimization Applied:
- ✅ CSS minification
- ✅ JavaScript minification
- ✅ Code splitting
- ✅ Tree shaking (unused code removal)
- ✅ Asset optimization
- ✅ Cache busting (content hash in filenames)

---

## Deployment Checklist

### Before Deploying:
- [ ] Update environment variables for production
- [ ] Test build locally with `serve -s build`
- [ ] Verify all links work (internal and external)
- [ ] Check mobile responsiveness
- [ ] Test language switching
- [ ] Verify contact forms/links work
- [ ] Check browser console for errors
- [ ] Test on multiple browsers (Chrome, Firefox, Safari)

### After Deploying:
- [ ] Verify custom domain DNS is configured
- [ ] Test HTTPS certificate
- [ ] Check all pages load correctly
- [ ] Test on mobile devices
- [ ] Verify geolocation detection works
- [ ] Check analytics are tracking
- [ ] Test WhatsApp/LINE links
- [ ] Verify email links work

---

## Common Build Issues

### Issue: Build fails with memory error
**Solution:**
```bash
# Increase Node.js memory limit
NODE_OPTIONS=--max_old_space_size=4096 yarn build
```

### Issue: Missing dependencies
**Solution:**
```bash
# Clean install
rm -rf node_modules yarn.lock
yarn install
yarn build
```

### Issue: Environment variables not working
**Solution:**
- Ensure they start with `REACT_APP_`
- Restart development server after adding
- Rebuild for production

---

## Build Output Size

Typical build sizes:
- **CSS:** ~50-100 KB (minified)
- **JavaScript:** ~200-500 KB (minified, code-split)
- **Images:** Varies (optimize before deploying)
- **Total:** Usually under 1-2 MB

---

## Next Steps

Once built, deploy using one of these methods:

1. **Cloudflare Pages** (Recommended)
   - See `CLOUDFLARE_DEPLOYMENT.md`
   - Free tier with unlimited bandwidth
   - Automatic SSL and CDN

2. **Netlify**
   - Drag and drop `build` folder
   - Similar to Cloudflare Pages

3. **Vercel**
   - Connect Git repository
   - Automatic deployments

4. **Traditional Hosting**
   - Upload `build` folder contents
   - Configure server for SPA routing

---

## Production Environment Variables

Create `.env.production` with:

```env
# Backend API URL
REACT_APP_BACKEND_URL=https://api.arkadyaapps.com

# Disable source maps (security)
GENERATE_SOURCEMAP=false

# Enable production optimizations
NODE_ENV=production
```

---

## Build Performance Tips

1. **Reduce Bundle Size:**
   - Use dynamic imports for large components
   - Remove unused dependencies
   - Use production builds of libraries

2. **Faster Builds:**
   - Use `yarn build` instead of `npm run build`
   - Enable caching in CI/CD
   - Parallelize builds if possible

3. **Optimize Assets:**
   - Compress images before adding to project
   - Use SVG for icons (already done)
   - Lazy load images when possible

---

## Support

If you encounter issues:
1. Check the build logs
2. Verify Node.js version (16+ recommended)
3. Clear cache and rebuild
4. Check for missing dependencies

For deployment-specific issues, see the hosting provider's documentation.
