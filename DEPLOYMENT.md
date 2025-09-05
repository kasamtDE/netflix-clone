# Netflix Clone - Netlify Deployment Guide

## 🚀 Quick Deploy to Netlify

Your Netflix clone is now ready for deployment to Netlify! Here's how to deploy it:

### Method 1: Deploy via Netlify Dashboard (Recommended)

1. **Prepare your repository:**
   - Push your code to GitHub, GitLab, or Bitbucket
   - Make sure all files are committed and pushed

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com) and sign in
   - Click "New site from Git"
   - Connect your repository
   - Netlify will automatically detect the build settings from `netlify.toml`

3. **Set up environment variables:**
   - In your Netlify dashboard, go to Site settings > Environment variables
   - Add the following variables (copy from `.env.example`):
     ```
     REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
     REACT_APP_AUTH_DOMAIN=your_project_id.firebaseapp.com
     REACT_APP_PROJECT_ID=your_project_id
     REACT_APP_STORAGE_BUCKET=your_project_id.appspot.com
     REACT_APP_MESSAGIN_SENDER_ID=your_messaging_sender_id
     REACT_APP_APP_ID=your_app_id
     REACT_APP_MEASUREMENT_ID=your_measurement_id
     REACT_APP_API_KEY=your_tmdb_api_key
     ```

4. **Deploy:**
   - Click "Deploy site"
   - Wait for the build to complete
   - Your site will be live at `https://your-site-name.netlify.app`

### Method 2: Deploy via Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod --dir=build
   ```

## 🔧 Required API Keys

### Firebase Setup
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use existing one
3. Enable Authentication (Email/Password)
4. Get your config from Project Settings > General > Your apps
5. Add the config values to your environment variables

### The Movie Database (TMDB) Setup
1. Go to [TMDB](https://www.themoviedb.org/settings/api)
2. Create an account and request an API key
3. Add the API key to your environment variables

## 📁 Project Structure

```
netflix-clone/
├── public/
│   ├── index.html          # Main HTML file
│   ├── manifest.json       # PWA manifest
│   ├── robots.txt          # SEO robots file
│   └── _redirects          # Netlify SPA redirects
├── src/
│   ├── components/         # React components
│   ├── contexts/           # React contexts
│   ├── fixtures/           # Static data
│   └── ...
├── netlify.toml            # Netlify configuration
├── .env.example            # Environment variables template
└── package.json            # Dependencies and scripts
```

## 🛠️ Build Configuration

The project is configured with:
- **Build Command:** `npm run build`
- **Publish Directory:** `build`
- **Node Version:** 18
- **SPA Redirects:** Configured for React Router

## 🔍 Troubleshooting

### Common Issues:

1. **Build fails:**
   - Check that all environment variables are set
   - Ensure all dependencies are installed (`npm install`)

2. **404 errors on refresh:**
   - The `_redirects` file should handle this automatically
   - If not, check Netlify redirects in Site settings

3. **API calls not working:**
   - Verify environment variables are set correctly
   - Check browser console for CORS errors
   - Ensure API keys are valid

4. **Firebase authentication not working:**
   - Check Firebase project configuration
   - Verify domain is added to authorized domains in Firebase Console

## 🚀 Performance Optimizations

The build includes:
- Code splitting and lazy loading
- Optimized bundle size
- Gzip compression
- Static asset optimization

## 📱 Features

- ✅ Responsive design
- ✅ Multi-language support (German/English)
- ✅ Firebase authentication
- ✅ Movie browsing with TMDB API
- ✅ Netflix-like UI/UX
- ✅ PWA ready

## 🔄 Continuous Deployment

Once connected to Git:
- Every push to main branch triggers automatic deployment
- Preview deployments for pull requests
- Rollback to previous deployments if needed

## 📞 Support

If you encounter any issues:
1. Check the build logs in Netlify dashboard
2. Verify environment variables are set correctly
3. Test locally with `npm start` first
4. Check browser console for errors

---

**Happy Deploying! 🎉**
