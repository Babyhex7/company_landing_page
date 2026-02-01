# 🚀 Step-by-Step Development Guide

> **Start Date:** February 1, 2026  
> **Total Duration:** 14 days  
> **Current Phase:** Ready to Start

---

## 📅 Development Timeline

```
Week 1: Backend & Foundation
├── Day 1-2: Strapi Setup
├── Day 3-4: Frontend Setup + Design System
└── Day 5-7: Core Components

Week 2: Integration & Polish
├── Day 8-10: Homepage Sections
├── Day 11-12: Dynamic Pages + Integration
└── Day 13-14: Animations + Testing + Deploy
```

---

# WEEK 1: BACKEND & FOUNDATION

## 🗓️ DAY 1 (Feb 1, 2026) - Strapi Backend Setup

### ✅ Checklist Hari Ini:
- [ ] Install Strapi
- [ ] Configure database
- [ ] Create all content types
- [ ] Configure media library
- [ ] Test API endpoints

---

### 📝 STEP 1: Install Strapi

```bash
# Buka terminal di folder project
cd c:\Users\mybook_bagas\Magang\GENERAL_PORTFOLIO\company_landing_page

# Create Strapi project
npx create-strapi-app@latest strapi-backend --quickstart

# Tunggu sampai install selesai dan browser otomatis terbuka
# Jika tidak, buka: http://localhost:1337/admin
```

**Output yang diharapkan:**
- Folder `strapi-backend` terbuat
- Strapi admin panel terbuka di browser
- Diminta create admin user

---

### 📝 STEP 2: Create Admin User

Di browser yang terbuka (http://localhost:1337/admin):

```
First name:     Admin
Last name:      User
Email:          admin@company.com
Password:       Admin123!@#  (simpan di password manager)
Confirm:        Admin123!@#
```

**Klik "Let's start"**

---

### 📝 STEP 3: Configure Database (SQLite → PostgreSQL) [OPSIONAL]

**Untuk Development bisa skip ini, pakai SQLite default**

Jika mau pakai PostgreSQL:

```bash
cd strapi-backend
npm install pg
```

Edit `config/database.js`:
```javascript
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'password'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
```

---

### 📝 STEP 4: Create Content Types

#### 4.1 Create "Service" Content Type

1. Di Strapi Admin → **Content-Type Builder** (sidebar kiri)
2. Klik **"Create new collection type"**
3. Display name: `Service`
4. Klik **Continue**

**Add Fields:**

| Field Name | Type | Settings |
|------------|------|----------|
| `title` | Text | Short text, Required |
| `slug` | UID | Attached to: title, Required |
| `description` | Text | Long text |
| `content` | Rich text | Full, with images |
| `icon` | Text | Short text |
| `image` | Media | Single image |
| `features` | JSON | - |
| `order` | Number | Integer, Default: 0 |
| `featured` | Boolean | Default: false |

**Klik "Save"** → Strapi akan restart

---

#### 4.2 Create "Project" Content Type

1. **Content-Type Builder** → **Create new collection type**
2. Display name: `Project`

**Add Fields:**

| Field Name | Type | Settings |
|------------|------|----------|
| `title` | Text | Required |
| `slug` | UID | Attached to: title, Required |
| `description` | Text | Long text |
| `content` | Rich text | Full |
| `image` | Media | Single image, Required |
| `gallery` | Media | Multiple images |
| `category` | Text | Short text |
| `client` | Text | Short text |
| `website` | Text | Short text |
| `technologies` | JSON | - |
| `featured` | Boolean | Default: false |
| `date` | Date | Type: date |

**Save**

---

#### 4.3 Create "Testimonial" Content Type

Display name: `Testimonial`

| Field Name | Type | Settings |
|------------|------|----------|
| `quote` | Text | Long text, Required |
| `author_name` | Text | Required |
| `author_position` | Text | - |
| `author_company` | Text | - |
| `author_image` | Media | Single image |
| `rating` | Number | Integer, Min: 1, Max: 5 |
| `featured` | Boolean | Default: false |
| `order` | Number | Integer, Default: 0 |

**Save**

---

#### 4.4 Create "Team Member" Content Type

Display name: `Team Member`

| Field Name | Type | Settings |
|------------|------|----------|
| `name` | Text | Required |
| `position` | Text | Required |
| `bio` | Text | Long text |
| `image` | Media | Single image, Required |
| `social_links` | JSON | - |
| `order` | Number | Integer, Default: 0 |
| `featured` | Boolean | Default: false |

**Save**

---

#### 4.5 Create "Blog Post" Content Type

Display name: `Blog Post`

| Field Name | Type | Settings |
|------------|------|----------|
| `title` | Text | Required |
| `slug` | UID | Attached to: title, Required |
| `excerpt` | Text | Long text |
| `content` | Rich text | Full |
| `cover_image` | Media | Single image, Required |
| `category` | Text | Short text |
| `published_at` | Date | Type: datetime |
| `read_time` | Number | Integer (minutes) |
| `tags` | JSON | - |

**Save**

---

#### 4.6 Create "Client Logo" Content Type

Display name: `Client Logo`

| Field Name | Type | Settings |
|------------|------|----------|
| `name` | Text | Required |
| `logo` | Media | Single image, Required |
| `website` | Text | Short text |
| `order` | Number | Integer, Default: 0 |

**Save**

---

### 📝 STEP 5: Create Single Types

#### 5.1 Create "Homepage" Single Type

1. **Content-Type Builder** → **Create new single type**
2. Display name: `Homepage`

**Add Fields:**

| Field Name | Type | Settings |
|------------|------|----------|
| `hero_title` | Text | Required |
| `hero_subtitle` | Text | Long text |
| `hero_image` | Media | Single image |
| `hero_cta_text` | Text | Default: "Get Started" |
| `hero_cta_link` | Text | Default: "/contact" |
| `services_title` | Text | Default: "What We Do" |
| `services_subtitle` | Text | - |
| `portfolio_title` | Text | Default: "Our Works" |
| `testimonials_title` | Text | Default: "What Clients Say" |
| `cta_title` | Text | Default: "Ready to Start?" |
| `cta_subtitle` | Text | - |
| `cta_button_text` | Text | Default: "Get Started" |

**Save**

---

#### 5.2 Create "Site Setting" Single Type

Display name: `Site Setting`

| Field Name | Type | Settings |
|------------|------|----------|
| `site_name` | Text | Required, Default: "Company Name" |
| `tagline` | Text | - |
| `logo` | Media | Single image |
| `logo_dark` | Media | Single image |
| `contact_email` | Email | - |
| `contact_phone` | Text | - |
| `contact_address` | Text | Long text |
| `working_hours` | Text | - |
| `social_links` | JSON | - |
| `footer_text` | Text | - |

**Save**

---

### 📝 STEP 6: Configure API Permissions

1. **Settings** (sidebar) → **Users & Permissions Plugin** → **Roles**
2. Klik **Public**
3. Expand semua content types dan centang:
   - `find` (untuk semua)
   - `findOne` (untuk semua)
4. **Save**

**Tested permissions:**
- Service: find, findOne ✅
- Project: find, findOne ✅
- Testimonial: find, findOne ✅
- Team Member: find, findOne ✅
- Blog Post: find, findOne ✅
- Client Logo: find, findOne ✅
- Homepage: find ✅
- Site Setting: find ✅

---

### 📝 STEP 7: Add Sample Data

#### 7.1 Fill Homepage Content

1. **Content Manager** → **Homepage** (Single Types)
2. Fill in:

```
Hero Title:          We Build Digital Experiences That Matter
Hero Subtitle:       Transform your ideas into reality with cutting-edge web solutions. 
                     We create modern, responsive, and performant applications.
Hero CTA Text:       Get Started
Hero CTA Link:       /contact

Services Title:      What We Do
Services Subtitle:   Transform your ideas into reality

Portfolio Title:     Our Works

Testimonials Title:  What Clients Say

CTA Title:           Ready to Start Your Project?
CTA Subtitle:        Let's build something amazing together
CTA Button Text:     Get Started
```

3. Upload **Hero Image** (atau skip dulu)
4. **Save** → **Publish**

---

#### 7.2 Fill Site Settings

1. **Content Manager** → **Site Setting**

```
Site Name:           TechCorp Solutions
Tagline:             Building Tomorrow's Technology Today
Contact Email:       hello@techcorp.com
Contact Phone:       +1 (555) 123-4567
Contact Address:     123 Tech Street, Silicon Valley, CA 94025
Working Hours:       Mon-Fri: 9:00 AM - 6:00 PM PST
Footer Text:         © 2026 TechCorp Solutions. All rights reserved.
```

**Social Links (JSON):**
```json
{
  "facebook": "https://facebook.com/techcorp",
  "twitter": "https://twitter.com/techcorp",
  "linkedin": "https://linkedin.com/company/techcorp",
  "instagram": "https://instagram.com/techcorp",
  "github": "https://github.com/techcorp"
}
```

**Save** → **Publish**

---

#### 7.3 Add Sample Services (3 samples)

**Service 1:**
```
Title:        Web Development
Description:  Custom web applications built with modern technologies
Icon:         code  (or icon name dari icon library)
Features:     ["Responsive Design", "Fast Performance", "SEO Optimized"]
Order:        1
Featured:     ✅ true
```
**Save** → **Publish**

**Service 2:**
```
Title:        Mobile Apps
Description:  Native and cross-platform mobile applications
Icon:         smartphone
Features:     ["iOS & Android", "React Native", "Flutter"]
Order:        2
Featured:     ✅ true
```
**Save** → **Publish**

**Service 3:**
```
Title:        UI/UX Design
Description:  Beautiful and intuitive user interfaces
Icon:         palette
Features:     ["User Research", "Prototyping", "Design Systems"]
Order:        3
Featured:     ✅ true
```
**Save** → **Publish**

---

#### 7.4 Add Sample Projects (2 samples)

**Project 1:**
```
Title:        E-commerce Platform
Description:  Modern online shopping experience
Category:     Web
Client:       ShopCo
Website:      https://example.com
Technologies: ["React", "Node.js", "MongoDB"]
Featured:     ✅ true
Date:         2026-01-15
```
**Save** → **Publish**

**Project 2:**
```
Title:        Mobile Banking App
Description:  Secure and fast banking on the go
Category:     Mobile
Client:       BankCorp
Technologies: ["React Native", "Firebase", "Stripe"]
Featured:     ✅ true
Date:         2025-12-20
```
**Save** → **Publish**

---

#### 7.5 Add Sample Testimonials (2 samples)

**Testimonial 1:**
```
Quote:              Working with TechCorp has been an absolute pleasure. They delivered 
                    beyond our expectations and the results speak for themselves.
Author Name:        John Doe
Author Position:    CEO
Author Company:     ShopCo
Rating:             5
Featured:           ✅ true
Order:              1
```
**Save** → **Publish**

**Testimonial 2:**
```
Quote:              The team's expertise and dedication transformed our vision into reality. 
                    Highly recommend their services!
Author Name:        Jane Smith
Author Position:    CTO
Author Company:     BankCorp
Rating:             5
Featured:           ✅ true
Order:              2
```
**Save** → **Publish**

---

### 📝 STEP 8: Test API Endpoints

Buka browser atau Postman, test endpoints:

```
✅ http://localhost:1337/api/services
✅ http://localhost:1337/api/projects
✅ http://localhost:1337/api/testimonials
✅ http://localhost:1337/api/team-members
✅ http://localhost:1337/api/blog-posts
✅ http://localhost:1337/api/client-logos
✅ http://localhost:1337/api/homepage
✅ http://localhost:1337/api/site-setting
```

**Expected Response:**
```json
{
  "data": [...],
  "meta": {...}
}
```

---

### ✅ DAY 1 COMPLETED!

**What we built:**
- ✅ Strapi backend running
- ✅ 6 collection types created
- ✅ 2 single types created
- ✅ API permissions configured
- ✅ Sample data populated
- ✅ API tested and working

**Next:** Day 2 - Frontend Setup

---

## 🗓️ DAY 2 (Feb 2, 2026) - Strapi Finalization + Frontend Init

### ✅ Checklist Hari Ini:
- [ ] Add more sample data
- [ ] Configure media settings
- [ ] Setup Astro project
- [ ] Install dependencies
- [ ] Configure Tailwind CSS

---

### 📝 STEP 1: Add More Sample Data to Strapi

#### 1.1 Add More Services (Total 6)

**Service 4:**
```
Title:        Cloud Solutions
Description:  Scalable cloud infrastructure and deployment
Icon:         cloud
Features:     ["AWS", "Azure", "Docker", "Kubernetes"]
Order:        4
Featured:     ✅ true
```

**Service 5:**
```
Title:        AI & Machine Learning
Description:  Intelligent solutions powered by AI
Icon:         brain
Features:     ["TensorFlow", "PyTorch", "NLP", "Computer Vision"]
Order:        5
Featured:     ✅ true
```

**Service 6:**
```
Title:        Consulting
Description:  Strategic technology consulting
Icon:         users
Features:     ["Digital Transformation", "Tech Stack Selection", "Architecture Design"]
Order:        6
Featured:     ✅ true
```

---

#### 1.2 Add Team Members (4 samples)

**Team 1:**
```
Name:           Sarah Johnson
Position:       CEO & Founder
Bio:            Visionary leader with 15+ years in tech
Social Links:   {"linkedin": "https://linkedin.com/in/sarah", "twitter": "https://twitter.com/sarah"}
Order:          1
Featured:       ✅ true
```

**Team 2:**
```
Name:           Michael Chen
Position:       CTO
Bio:            Full-stack architect and tech enthusiast
Social Links:   {"linkedin": "https://linkedin.com/in/michael", "github": "https://github.com/michael"}
Order:          2
Featured:       ✅ true
```

**Team 3:**
```
Name:           Emily Rodriguez
Position:       Lead Designer
Bio:            Award-winning UI/UX designer
Social Links:   {"linkedin": "https://linkedin.com/in/emily", "dribbble": "https://dribbble.com/emily"}
Order:          3
Featured:       ✅ true
```

**Team 4:**
```
Name:           David Kim
Position:       Senior Developer
Bio:            Full-stack developer specializing in React
Social Links:   {"linkedin": "https://linkedin.com/in/david", "github": "https://github.com/david"}
Order:          4
Featured:       ✅ true
```

---

#### 1.3 Add Client Logos (6 samples)

```
1. Name: Google,    Order: 1
2. Name: Microsoft, Order: 2
3. Name: Apple,     Order: 3
4. Name: Amazon,    Order: 4
5. Name: Meta,      Order: 5
6. Name: Netflix,   Order: 6
```

(Images bisa skip dulu atau pakai placeholder)

---

#### 1.4 Add Blog Posts (3 samples)

**Blog 1:**
```
Title:          How to Build Modern Web Applications in 2026
Excerpt:        Learn the latest trends and best practices for web development
Category:       Technology
Published At:   2026-01-28T10:00:00.000Z
Read Time:      8
Tags:           ["web", "react", "astro", "tutorial"]
```

**Blog 2:**
```
Title:          10 UI Design Trends to Watch This Year
Excerpt:        Stay ahead with these cutting-edge design trends
Category:       Design
Published At:   2026-01-25T10:00:00.000Z
Read Time:      6
Tags:           ["design", "ui", "trends", "2026"]
```

**Blog 3:**
```
Title:          Scaling Your Startup: Tech Infrastructure Guide
Excerpt:        Essential infrastructure decisions for growing startups
Category:       Business
Published At:   2026-01-20T10:00:00.000Z
Read Time:      10
Tags:           ["startup", "infrastructure", "cloud", "scaling"]
```

**Save & Publish all**

---

### 📝 STEP 2: Configure Media Settings

1. **Settings** → **Media Library**
2. Set max file size: `50 MB`
3. Enable responsive images: ✅
4. Allowed file types: `jpg, jpeg, png, gif, svg, webp`

---

### 📝 STEP 3: Initialize Astro Project

```bash
# Kembali ke root folder
cd c:\Users\mybook_bagas\Magang\GENERAL_PORTFOLIO\company_landing_page

# Create Astro project
npm create astro@latest astro-frontend

# Pilihan saat prompted:
# - How would you like to start? → Empty
# - Install dependencies? → Yes
# - TypeScript? → Yes, strict
# - Git? → Yes
```

**Wait for installation...**

---

### 📝 STEP 4: Install Dependencies

```bash
cd astro-frontend

# Install Tailwind CSS
npx astro add tailwind
# Confirm: Yes to all

# Install additional packages
npm install motion
npm install @astrojs/sitemap

# Install icons (optional)
npm install lucide-astro
```

---

### 📝 STEP 5: Configure Tailwind CSS

Edit `tailwind.config.mjs`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366F1',
          light: '#818CF8',
          dark: '#4F46E5',
        },
        secondary: {
          DEFAULT: '#8B5CF6',
          light: '#A78BFA',
          dark: '#7C3AED',
        },
        accent: {
          DEFAULT: '#06B6D4',
          light: '#22D3EE',
          dark: '#0891B2',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(99, 102, 241, 0.3)',
      },
    },
  },
  plugins: [],
}
```

---

### 📝 STEP 6: Setup Environment Variables

Create `.env` file:

```bash
# Di astro-frontend folder
echo STRAPI_URL=http://localhost:1337 > .env
echo SITE_URL=http://localhost:4321 >> .env
```

---

### 📝 STEP 7: Create Strapi API Helper

Create file: `src/lib/strapi.ts`

```typescript
const STRAPI_URL = import.meta.env.STRAPI_URL || 'http://localhost:1337';

interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export async function fetchAPI<T>(
  endpoint: string,
  params?: Record<string, string>
): Promise<StrapiResponse<T>> {
  const url = new URL(`/api${endpoint}`, STRAPI_URL);
  
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  const response = await fetch(url.toString());
  
  if (!response.ok) {
    throw new Error(`Strapi API error: ${response.status}`);
  }

  return response.json();
}

// Helper functions
export const getServices = () => fetchAPI('/services?populate=*');
export const getProjects = () => fetchAPI('/projects?populate=*');
export const getTestimonials = () => fetchAPI('/testimonials?populate=*');
export const getTeamMembers = () => fetchAPI('/team-members?populate=*');
export const getBlogPosts = () => fetchAPI('/blog-posts?populate=*');
export const getClientLogos = () => fetchAPI('/client-logos?populate=*');
export const getHomepage = () => fetchAPI('/homepage?populate=*');
export const getSiteSettings = () => fetchAPI('/site-setting?populate=*');
```

---

### 📝 STEP 8: Test Astro Development

```bash
# Di astro-frontend folder
npm run dev
```

Open: http://localhost:4321

**Should see:** Astro welcome page ✅

---

### ✅ DAY 2 COMPLETED!

**What we built:**
- ✅ More sample data in Strapi
- ✅ Strapi fully configured
- ✅ Astro project initialized
- ✅ Tailwind CSS configured
- ✅ Strapi API helper created
- ✅ Dev server running

**Next:** Day 3 - Design System & Components

---

## 🗓️ DAY 3 (Feb 3, 2026) - Design System & Base Components

### ✅ Checklist Hari Ini:
- [ ] Setup global styles
- [ ] Create design tokens
- [ ] Build Button component
- [ ] Build Card component
- [ ] Build Input component
- [ ] Build Badge component
- [ ] Build Container component

---

### 📝 STEP 1: Setup Global Styles

Create `src/styles/global.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Import fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@700;800&family=Space+Grotesk:wght@400;700&display=swap');

@layer base {
  * {
    @apply border-border;
  }
  
  body {
    @apply bg-white text-slate-900 font-sans antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-heading font-bold;
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Selection color */
  ::selection {
    @apply bg-primary/20 text-primary-dark;
  }
}

@layer components {
  /* Glassmorphism */
  .glass {
    @apply bg-white/10 backdrop-blur-md border border-white/20;
  }

  .glass-dark {
    @apply bg-slate-900/80 backdrop-blur-md border border-white/10;
  }

  /* Container */
  .container {
    @apply max-w-7xl mx-auto px-6 md:px-8;
  }

  /* Gradient text */
  .gradient-text {
    @apply bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent;
  }

  /* Animate on scroll base */
  .animate-on-scroll {
    @apply opacity-0 translate-y-8 transition-all duration-700 ease-out;
  }

  .animate-on-scroll.visible {
    @apply opacity-100 translate-y-0;
  }
}

@layer utilities {
  /* Hide scrollbar */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

### 📝 STEP 2: Create Base Layout

Create `src/layouts/BaseLayout.astro`:

```astro
---
interface Props {
  title: string;
  description?: string;
  image?: string;
}

const { 
  title = "TechCorp Solutions - Building Tomorrow's Technology",
  description = "Transform your ideas into reality with cutting-edge web solutions.",
  image = "/og-image.jpg"
} = Astro.props;

const canonicalURL = new URL(Astro.url.pathname, Astro.site);
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="canonical" href={canonicalURL} />
    
    <!-- Primary Meta Tags -->
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={canonicalURL} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={canonicalURL} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    
    <!-- Fonts preload -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  </head>
  <body>
    <slot />
    
    <style is:global>
      @import '../styles/global.css';
    </style>
  </body>
</html>
```

---

### 📝 STEP 3: Create Button Component

Create `src/components/common/Button.astro`:

```astro
---
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  class?: string;
}

const { 
  variant = 'primary',
  size = 'md',
  href,
  class: className = ''
} = Astro.props;

const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

const variants = {
  primary: 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/50 hover:scale-105 focus:ring-primary',
  secondary: 'bg-white text-slate-900 border-2 border-slate-200 hover:border-primary hover:text-primary focus:ring-primary',
  outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
  ghost: 'text-slate-700 hover:bg-slate-100 hover:text-primary focus:ring-slate-200'
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
};

const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

const Tag = href ? 'a' : 'button';
---

<Tag href={href} class={classes}>
  <slot />
</Tag>
```

---

### 📝 STEP 4: Create Card Component

Create `src/components/common/Card.astro`:

```astro
---
interface Props {
  variant?: 'default' | 'glass' | 'gradient';
  hover?: boolean;
  class?: string;
}

const { 
  variant = 'default',
  hover = true,
  class: className = ''
} = Astro.props;

const baseStyles = 'rounded-2xl overflow-hidden transition-all duration-300';

const variants = {
  default: 'bg-white border border-slate-200 shadow-sm',
  glass: 'glass shadow-lg',
  gradient: 'bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10'
};

const hoverStyles = hover ? 'hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]' : '';

const classes = `${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`;
---

<div class={classes}>
  <slot />
</div>
```

---

### 📝 STEP 5: Create Container Component

Create `src/components/common/Container.astro`:

```astro
---
interface Props {
  class?: string;
}

const { class: className = '' } = Astro.props;
---

<div class={`max-w-7xl mx-auto px-6 md:px-8 ${className}`}>
  <slot />
</div>
```

---

### 📝 STEP 6: Create Badge Component

Create `src/components/common/Badge.astro`:

```astro
---
interface Props {
  variant?: 'primary' | 'secondary' | 'accent' | 'gray';
  class?: string;
}

const { 
  variant = 'primary',
  class: className = ''
} = Astro.props;

const variants = {
  primary: 'bg-primary/10 text-primary border-primary/20',
  secondary: 'bg-secondary/10 text-secondary border-secondary/20',
  accent: 'bg-accent/10 text-accent border-accent/20',
  gray: 'bg-slate-100 text-slate-700 border-slate-200'
};

const classes = `inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border ${variants[variant]} ${className}`;
---

<span class={classes}>
  <slot />
</span>
```

---

### 📝 STEP 7: Create Section Title Component

Create `src/components/common/SectionTitle.astro`:

```astro
---
interface Props {
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  class?: string;
}

const { 
  subtitle,
  align = 'center',
  class: className = ''
} = Astro.props;

const alignClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right'
};
---

<div class={`space-y-4 mb-12 ${alignClasses[align]} ${className}`}>
  {subtitle && (
    <p class="text-sm font-semibold text-primary uppercase tracking-wider">
      {subtitle}
    </p>
  )}
  <h2 class="text-4xl md:text-5xl font-bold text-slate-900">
    <slot />
  </h2>
</div>
```

---

### 📝 STEP 8: Test Components

Update `src/pages/index.astro`:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Container from '../components/common/Container.astro';
import Button from '../components/common/Button.astro';
import Card from '../components/common/Card.astro';
import Badge from '../components/common/Badge.astro';
import SectionTitle from '../components/common/SectionTitle.astro';
---

<BaseLayout title="Component Test">
  <Container class="py-20 space-y-12">
    
    <SectionTitle subtitle="Testing">
      Design System Components
    </SectionTitle>

    <!-- Buttons -->
    <div class="space-y-4">
      <h3 class="text-2xl font-bold">Buttons</h3>
      <div class="flex flex-wrap gap-4">
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="ghost">Ghost Button</Button>
      </div>
    </div>

    <!-- Cards -->
    <div class="space-y-4">
      <h3 class="text-2xl font-bold">Cards</h3>
      <div class="grid md:grid-cols-3 gap-6">
        <Card variant="default">
          <div class="p-6">
            <h4 class="text-xl font-bold mb-2">Default Card</h4>
            <p class="text-slate-600">This is a default card component</p>
          </div>
        </Card>
        <Card variant="glass">
          <div class="p-6">
            <h4 class="text-xl font-bold mb-2">Glass Card</h4>
            <p class="text-slate-600">This is a glass card component</p>
          </div>
        </Card>
        <Card variant="gradient">
          <div class="p-6">
            <h4 class="text-xl font-bold mb-2">Gradient Card</h4>
            <p class="text-slate-600">This is a gradient card component</p>
          </div>
        </Card>
      </div>
    </div>

    <!-- Badges -->
    <div class="space-y-4">
      <h3 class="text-2xl font-bold">Badges</h3>
      <div class="flex flex-wrap gap-3">
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="accent">Accent</Badge>
        <Badge variant="gray">Gray</Badge>
      </div>
    </div>

  </Container>
</BaseLayout>
```

**Test:** http://localhost:4321

---

### ✅ DAY 3 COMPLETED!

**What we built:**
- ✅ Global styles configured
- ✅ Base Layout created
- ✅ Button component (4 variants)
- ✅ Card component (3 variants)
- ✅ Badge component
- ✅ Container component
- ✅ Section Title component
- ✅ Components tested

**Next:** Day 4 - Layout Components (Header, Footer, Navigation)

---

**🎯 Progress: 21% (3/14 days)**

Lanjut ke Day 4? 🚀
