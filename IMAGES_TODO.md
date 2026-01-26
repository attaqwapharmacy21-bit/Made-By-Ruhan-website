# Image Assets TODO List

This file tracks all the external images that have been migrated to a local image structure.

## Overview
All external image URLs (Unsplash, etc.) have been replaced with local paths using the `/assets/images/` directory structure. Fallback images are configured to use placeholder service if local files fail to load.

---

## 📁 Directory Structure
```
assets/
├── images/
│   ├── products/          # Product grid images (300x220px)
│   └── blog/              # Blog post images (500x300px)
├── techgear-team.jpg      # About section team photo (500x400px)
└── store-location-map.jpg # Contact section map image (500x350px)
```

---

## 🛒 Product Images (12 items)
Location: `/assets/images/products/`
Recommended size: 300x220px

| Filename | Product Name | Category |
|----------|--------------|----------|
| macbook-pro.jpg | MacBook Pro 14" | Laptops |
| dell-xps.jpg | Dell XPS 13 | Laptops |
| iphone-15.jpg | iPhone 15 Pro | Phones |
| galaxy-s24.jpg | Samsung Galaxy S24 | Phones |
| sony-xm5.jpg | Sony WH-1000XM5 | Headphones |
| airpods-max.jpg | AirPods Pro Max | Headphones |
| ipad-pro.jpg | iPad Pro 12.9" | Accessories |
| samsung-monitor.jpg | Samsung Monitor 34" | Accessories |
| asus-rog.jpg | ASUS ROG Laptop | Laptops |
| pixel-8.jpg | Google Pixel 8 | Phones |
| mx-master.jpg | Logitech MX Master | Accessories |
| beats-studio.jpg | Beats Studio Pro | Headphones |

**Status:** ⏳ Waiting for local images

---

## 📝 Blog Images (6 items)
Location: `/assets/images/blog/`
Recommended size: 500x300px

| Filename | Blog Post Title | Category |
|----------|-----------------|----------|
| best-laptops.jpg | Best Laptops for 2024 | Guides |
| earbuds-comparison.jpg | Wireless Earbuds Comparison | Reviews |
| 5g-phones.jpg | 5G Phones Worth Your Money | Tech News |
| gaming-setup.jpg | Gaming Setup Guide 2024 | Guides |
| monitor-features.jpg | Monitor Features Explained | Educational |
| keyboard-switches.jpg | Keyboard Switches Deep Dive | Guides |

**Status:** ⏳ Waiting for local images

---

## 🌐 Static Images (2 items)
Location: `/assets/images/`
Root level

| Filename | Section | Size |
|----------|---------|------|
| techgear-team.jpg | About Us | 500x400px |
| store-location-map.jpg | Contact | 500x350px |

**Status:** ⏳ Waiting for local images

---

## 🔄 Fallback Strategy
All `<img>` tags now include an `onerror` handler that falls back to placeholder service:
```html
<img src="/assets/images/filename.jpg" 
     alt="description"
     onerror="this.src='https://via.placeholder.com/[size]/1a1a2e/00ff88?text=[label]'">
```

This ensures:
- ✅ Images display correctly if local files exist
- ✅ Graceful fallback to colored placeholder if local file fails
- ✅ No broken image icons

---

## 📋 Implementation Notes
1. All external URLs (Unsplash, Placeholder) have been removed from the primary source
2. Each image has a corresponding fallback URL configured
3. Local image rendering happens through template literals in `script.js`
4. Cart items also use the same fallback structure
5. No layout, styling, or functionality has been changed

---

## ✅ Checklist
- [x] Identified all external image URLs
- [x] Created local directory structure
- [x] Replaced URLs with local paths
- [x] Added fallback handlers to all images
- [x] Added TODO comments in code
- [ ] Add actual image files to directories
- [ ] Test image loading in browser
- [ ] Verify fallbacks work correctly

---

## 🎯 Next Steps
1. Collect or create images for the following directories:
   - `/assets/images/products/` - 12 product images
   - `/assets/images/blog/` - 6 blog post images
   - `/assets/images/` - 2 static images

2. Ensure images match the recommended dimensions
3. Optimize images for web (compress, use modern formats)
4. Test all images load correctly without triggering fallbacks
5. Update this file when images are added

---

**Last Updated:** January 26, 2026
**Version:** 1.0 - Initial migration from external URLs to local paths
