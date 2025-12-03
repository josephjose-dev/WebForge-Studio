# Folder Structure Explanation

This document explains the organization and purpose of each folder and file in the Modern Business website project.

## 📁 Root Directory

```
web/
├── app/                    # Next.js App Router directory
├── components/             # React components directory
├── public/                 # Static assets directory (created when needed)
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── postcss.config.mjs     # PostCSS configuration
├── next.config.mjs        # Next.js configuration
├── .eslintrc.json         # ESLint configuration
├── .gitignore            # Git ignore rules
├── README.md             # Project documentation
└── FOLDER_STRUCTURE.md   # This file
```

---

## 📂 `/app` Directory

The `app` directory is the **App Router** directory in Next.js 14. This is where you define routes, layouts, and pages.

### Files:

- **`layout.tsx`**: 
  - Root layout component that wraps all pages
  - Contains the HTML structure (`<html>`, `<body>`)
  - Defines global metadata (title, description)
  - Imports global CSS styles

- **`page.tsx`**: 
  - The home page component (route: `/`)
  - Imports and renders all section components
  - This is what users see when they visit your website

- **`globals.css`**: 
  - Global CSS stylesheet
  - Imports Tailwind CSS directives (`@tailwind base`, `@tailwind components`, `@tailwind utilities`)
  - Contains custom CSS variables and animations
  - Applies base styles to the entire application

---

## 📂 `/components` Directory

This directory contains all reusable React components. Each component is a separate file that can be imported and used in pages or other components.

### Components:

- **`Navbar.tsx`**: 
  - Navigation bar component (fixed at top)
  - Contains links to all sections
  - Responsive mobile menu
  - Uses client-side interactivity (`"use client"`)

- **`Hero.tsx`**: 
  - Hero/landing section component
  - First section users see
  - Contains main headline, description, and call-to-action buttons
  - Full-screen gradient background

- **`Services.tsx`**: 
  - Services showcase section
  - Displays 6 service cards in a grid layout
  - Each card has an icon, title, and description

- **`Pricing.tsx`**: 
  - Pricing plans section
  - Shows 3 pricing tiers (Starter, Professional, Enterprise)
  - Features comparison list for each plan
  - Highlights the "Most Popular" plan

- **`Gallery.tsx`**: 
  - Image gallery section
  - Grid layout of 6 images
  - Uses Unsplash placeholder images
  - Hover effects on images

- **`Contact.tsx`**: 
  - Contact form and information section
  - Two-column layout: contact info and form
  - Form handling with React state (`"use client"`)
  - Contact details (address, phone, email)

---

## 📂 `/public` Directory

This directory is for static assets that can be referenced directly:
- Images (`.jpg`, `.png`, `.svg`, etc.)
- Fonts
- Icons
- Other static files

**Note**: Files in `/public` are served from the root URL. For example, `/public/logo.png` is accessible at `/logo.png`.

Currently, the gallery uses external Unsplash images, but you can add your own images here.

---

## ⚙️ Configuration Files

### **`package.json`**
- Lists all project dependencies (React, Next.js, TypeScript, etc.)
- Defines npm scripts:
  - `npm run dev` - Start development server
  - `npm run build` - Build for production
  - `npm run start` - Start production server
  - `npm run lint` - Run ESLint

### **`tsconfig.json`**
- TypeScript compiler configuration
- Defines path aliases (`@/*` maps to root directory)
- Sets compilation options and includes/excludes

### **`tailwind.config.ts`**
- Tailwind CSS configuration
- Defines which files Tailwind should scan for classes
- Custom theme extensions (colors, fonts, etc.)

### **`postcss.config.mjs`**
- PostCSS configuration
- Processes CSS with Tailwind and Autoprefixer

### **`next.config.mjs`**
- Next.js configuration
- Custom webpack settings, redirects, headers, etc.

### **`.eslintrc.json`**
- ESLint configuration for code quality
- Uses Next.js recommended rules

### **`.gitignore`**
- Tells Git which files/folders to ignore
- Includes `node_modules/`, `.next/`, build files, etc.

---

## 🔄 How It All Works Together

1. **Entry Point**: When a user visits your site, Next.js starts with `app/layout.tsx`
2. **Layout**: The layout wraps everything and applies global styles
3. **Page**: `app/page.tsx` is rendered, which imports all section components
4. **Components**: Each component (`Hero`, `Services`, etc.) renders its section
5. **Styling**: Tailwind CSS classes are processed and applied
6. **Routing**: Next.js handles routing automatically based on file structure

---

## 📝 Key Concepts

### **App Router vs Pages Router**
- This project uses the **App Router** (Next.js 13+)
- Files in `/app` automatically become routes
- `page.tsx` = a route/page
- `layout.tsx` = shared layout for routes

### **Client vs Server Components**
- By default, components are **Server Components** (faster, no JavaScript sent to client)
- Add `"use client"` at the top for **Client Components** (needed for interactivity like `useState`, `onClick`, etc.)
- `Navbar.tsx` and `Contact.tsx` are Client Components because they use state/interactivity

### **Path Aliases**
- `@/components/...` = `./components/...`
- Defined in `tsconfig.json` for cleaner imports

---

## 🚀 Next Steps

To customize this website:

1. **Replace placeholder content**: Edit text in component files
2. **Add your images**: Place images in `/public` and reference them
3. **Modify colors**: Update Tailwind classes or extend theme in `tailwind.config.ts`
4. **Add more sections**: Create new components in `/components` and import in `page.tsx`
5. **Add more pages**: Create new folders in `/app` with their own `page.tsx`

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)










