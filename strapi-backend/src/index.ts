import type { Core } from "@strapi/strapi";

// Sample data untuk seed
const sampleData = {
  categories: [
    {
      name: "Web Development",
      slug: "web-development",
      description: "Web applications and websites",
      color: "#6366F1",
    },
    {
      name: "Mobile Apps",
      slug: "mobile-apps",
      description: "iOS and Android applications",
      color: "#8B5CF6",
    },
    {
      name: "Design",
      slug: "design",
      description: "UI/UX and branding projects",
      color: "#06B6D4",
    },
    {
      name: "E-commerce",
      slug: "e-commerce",
      description: "Online stores and marketplaces",
      color: "#10B981",
    },
    {
      name: "SaaS",
      slug: "saas",
      description: "Software as a Service platforms",
      color: "#F59E0B",
    },
  ],
  services: [
    {
      title: "Web Development",
      slug: "web-development",
      description: "Custom web applications built with modern technologies",
      icon: "code",
      features: ["Responsive", "Fast", "SEO"],
      order: 1,
      featured: true,
    },
    {
      title: "Mobile App Development",
      slug: "mobile-app",
      description: "Native and cross-platform mobile apps",
      icon: "smartphone",
      features: ["iOS", "Android", "React Native"],
      order: 2,
      featured: true,
    },
    {
      title: "UI/UX Design",
      slug: "ui-ux-design",
      description: "Beautiful user interfaces that users love",
      icon: "palette",
      features: ["Wireframing", "Prototyping", "Testing"],
      order: 3,
      featured: true,
    },
    {
      title: "Cloud Solutions",
      slug: "cloud-solutions",
      description: "Scalable cloud infrastructure",
      icon: "cloud",
      features: ["AWS", "Azure", "Docker"],
      order: 4,
      featured: true,
    },
    {
      title: "AI & Machine Learning",
      slug: "ai-ml",
      description: "Intelligent AI solutions",
      icon: "brain",
      features: ["NLP", "Computer Vision", "ChatGPT"],
      order: 5,
      featured: true,
    },
    {
      title: "Consulting",
      slug: "consulting",
      description: "Expert digital transformation guidance",
      icon: "briefcase",
      features: ["Strategy", "Architecture", "Training"],
      order: 6,
      featured: true,
    },
  ],
  clientLogos: [
    { name: "Google", order: 1 },
    { name: "Microsoft", order: 2 },
    { name: "Apple", order: 3 },
    { name: "Amazon", order: 4 },
    { name: "Meta", order: 5 },
    { name: "Netflix", order: 6 },
    { name: "Tesla", order: 7 },
    { name: "Spotify", order: 8 },
  ],
  testimonials: [
    {
      quote: "Working with TechCorp has been an absolute pleasure!",
      author_name: "John Doe",
      author_position: "CEO",
      author_company: "ShopCo Inc.",
      rating: 5,
      featured: true,
      order: 1,
    },
    {
      quote:
        "The team transformed our vision into reality. Highly recommended!",
      author_name: "Jane Smith",
      author_position: "CTO",
      author_company: "BankCorp",
      rating: 5,
      featured: true,
      order: 2,
    },
    {
      quote: "Professional and incredibly talented. Exceeded expectations.",
      author_name: "Michael Chen",
      author_position: "Founder",
      author_company: "StartupXYZ",
      rating: 5,
      featured: true,
      order: 3,
    },
    {
      quote: "Best development team we have ever worked with.",
      author_name: "Sarah Williams",
      author_position: "PM",
      author_company: "TechStart",
      rating: 5,
      featured: false,
      order: 4,
    },
  ],
  teamMembers: [
    {
      name: "Sarah Johnson",
      slug: "sarah-johnson",
      position: "CEO & Founder",
      bio: "Visionary leader with 15+ years experience.",
      email: "sarah@techcorp.com",
      order: 1,
      featured: true,
    },
    {
      name: "Michael Chen",
      slug: "michael-chen",
      position: "CTO",
      bio: "Full-stack architect with scalable systems expertise.",
      email: "michael@techcorp.com",
      order: 2,
      featured: true,
    },
    {
      name: "Emily Rodriguez",
      slug: "emily-rodriguez",
      position: "Lead Designer",
      bio: "Award-winning UI/UX designer.",
      email: "emily@techcorp.com",
      order: 3,
      featured: true,
    },
    {
      name: "David Kim",
      slug: "david-kim",
      position: "Senior Developer",
      bio: "Expert in React, Node.js, and cloud.",
      email: "david@techcorp.com",
      order: 4,
      featured: true,
    },
  ],
  homepage: {
    hero_title: "We Build Digital Experiences That Matter",
    hero_subtitle:
      "Transform your ideas into reality with cutting-edge web solutions.",
    hero_cta_text: "Get Started",
    hero_cta_link: "/contact",
    hero_cta_secondary_text: "View Portfolio",
    hero_cta_secondary_link: "/portfolio",
    services_title: "What We Do",
    services_subtitle: "Transform your ideas into reality",
    portfolio_title: "Our Works",
    portfolio_subtitle: "Showcasing our latest projects",
    testimonials_title: "What Clients Say",
    testimonials_subtitle: "Hear from our satisfied clients",
    team_title: "Meet Our Team",
    team_subtitle: "The talented people behind our success",
    blog_title: "Latest Insights",
    blog_subtitle: "Stay updated with the latest trends",
    cta_title: "Ready to Start Your Project?",
    cta_subtitle: "Let us build something amazing together.",
    cta_button_text: "Get Started",
    cta_button_link: "/contact",
  },
  siteSetting: {
    site_name: "TechCorp Solutions",
    tagline: "Building Tomorrow's Technology Today",
    contact_email: "hello@techcorp.com",
    contact_phone: "+1 (555) 123-4567",
    contact_address: "123 Tech Street, Silicon Valley, CA 94025",
    social_facebook: "https://facebook.com/techcorp",
    social_twitter: "https://twitter.com/techcorp",
    social_instagram: "https://instagram.com/techcorp",
    social_linkedin: "https://linkedin.com/company/techcorp",
    footer_text:
      "We are passionate developers creating exceptional digital experiences.",
    copyright_text: "© 2026 TechCorp Solutions. All rights reserved.",
  },
  aboutPage: {
    title: "About Us",
    subtitle: "Building the future, one line of code at a time",
    story_title: "Our Story",
    story_content:
      "Founded in 2016, TechCorp began with a simple mission: help businesses thrive digitally.",
    mission_title: "Our Mission",
    mission_content: "Empower businesses with innovative technology solutions.",
    vision_title: "Our Vision",
    vision_content:
      "Be the leading technology partner for businesses worldwide.",
    team_title: "Meet Our Team",
    team_subtitle: "The talented people behind our success",
  },
};

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    console.log("🌱 Checking if seed data needed...");

    try {
      const existingServices = await strapi
        .documents("api::service.service")
        .findMany();
      if (existingServices.length > 0) {
        console.log("✅ Data already exists, skipping seed.");
        return;
      }

      console.log("🚀 Seeding data...\n");

      // Categories
      for (const item of sampleData.categories) {
        await strapi
          .documents("api::category.category")
          .create({ data: item, status: "published" });
      }
      console.log("✅ Categories created");

      // Services
      for (const item of sampleData.services) {
        await strapi
          .documents("api::service.service")
          .create({ data: item, status: "published" });
      }
      console.log("✅ Services created");

      // Client Logos
      for (const item of sampleData.clientLogos) {
        await strapi
          .documents("api::client-logo.client-logo")
          .create({ data: item, status: "published" });
      }
      console.log("✅ Client Logos created");

      // Testimonials
      for (const item of sampleData.testimonials) {
        await strapi
          .documents("api::testimonial.testimonial")
          .create({ data: item, status: "published" });
      }
      console.log("✅ Testimonials created");

      // Team Members
      for (const item of sampleData.teamMembers) {
        await strapi
          .documents("api::team-member.team-member")
          .create({ data: item, status: "published" });
      }
      console.log("✅ Team Members created");

      // Homepage
      await strapi
        .documents("api::homepage.homepage")
        .create({ data: sampleData.homepage, status: "published" });
      console.log("✅ Homepage created");

      // Site Setting
      await strapi
        .documents("api::site-setting.site-setting")
        .create({ data: sampleData.siteSetting });
      console.log("✅ Site Setting created");

      // About Page
      await strapi
        .documents("api::about-page.about-page")
        .create({ data: sampleData.aboutPage, status: "published" });
      console.log("✅ About Page created");

      console.log("\n🎉 All seed data created successfully!");
    } catch (error) {
      console.error("❌ Seed error:", error);
    }
  },
};
