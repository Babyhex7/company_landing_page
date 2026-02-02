/**
 * Seed data yang dijalankan saat Strapi bootstrap
 */

const sampleData = {
  // Categories
  categories: [
    {
      name: "Web Development",
      description: "Web applications and websites",
      color: "#6366F1",
    },
    {
      name: "Mobile Apps",
      description: "iOS and Android applications",
      color: "#8B5CF6",
    },
    {
      name: "Design",
      description: "UI/UX and branding projects",
      color: "#06B6D4",
    },
    {
      name: "E-commerce",
      description: "Online stores and marketplaces",
      color: "#10B981",
    },
    {
      name: "SaaS",
      description: "Software as a Service platforms",
      color: "#F59E0B",
    },
  ],

  // Services
  services: [
    {
      title: "Web Development",
      slug: "web-development",
      description:
        "Custom web applications built with modern technologies and best practices",
      content:
        "We create robust, scalable web applications using the latest frameworks like React, Next.js, and Node.js.",
      icon: "code",
      features: [
        "Responsive Design",
        "Fast Performance",
        "SEO Optimized",
        "Modern UI/UX",
      ],
      order: 1,
      featured: true,
    },
    {
      title: "Mobile App Development",
      slug: "mobile-app-development",
      description:
        "Native and cross-platform mobile applications for iOS and Android",
      content:
        "Build stunning mobile apps that work seamlessly across all devices.",
      icon: "smartphone",
      features: [
        "iOS & Android",
        "React Native",
        "Flutter",
        "Push Notifications",
      ],
      order: 2,
      featured: true,
    },
    {
      title: "UI/UX Design",
      slug: "ui-ux-design",
      description: "Beautiful and intuitive user interfaces that users love",
      content:
        "Our design team creates engaging user experiences backed by research and testing.",
      icon: "palette",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
      ],
      order: 3,
      featured: true,
    },
    {
      title: "Cloud Solutions",
      slug: "cloud-solutions",
      description: "Scalable cloud infrastructure and deployment services",
      content: "Deploy your applications on reliable cloud platforms.",
      icon: "cloud",
      features: ["AWS", "Azure", "Google Cloud", "Docker"],
      order: 4,
      featured: true,
    },
    {
      title: "AI & Machine Learning",
      slug: "ai-machine-learning",
      description: "Intelligent solutions powered by artificial intelligence",
      content:
        "Leverage the power of AI to automate processes and gain insights.",
      icon: "brain",
      features: [
        "NLP",
        "Computer Vision",
        "Predictive Analytics",
        "ChatGPT Integration",
      ],
      order: 5,
      featured: true,
    },
    {
      title: "Consulting & Strategy",
      slug: "consulting-strategy",
      description: "Expert guidance for your digital transformation journey",
      content:
        "Our consultants help you navigate the complex technology landscape.",
      icon: "briefcase",
      features: [
        "Technology Assessment",
        "Architecture Design",
        "Team Training",
        "Digital Strategy",
      ],
      order: 6,
      featured: true,
    },
  ],

  // Client Logos
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

  // Testimonials
  testimonials: [
    {
      quote:
        "Working with TechCorp has been an absolute pleasure. They delivered beyond our expectations!",
      author_name: "John Doe",
      author_position: "CEO",
      author_company: "ShopCo Inc.",
      rating: 5,
      featured: true,
      order: 1,
    },
    {
      quote:
        "The team's expertise transformed our vision into reality. Highly recommended!",
      author_name: "Jane Smith",
      author_position: "CTO",
      author_company: "BankCorp",
      rating: 5,
      featured: true,
      order: 2,
    },
    {
      quote:
        "Professional, responsive, and incredibly talented. Exceeded all expectations.",
      author_name: "Michael Chen",
      author_position: "Founder",
      author_company: "StartupXYZ",
      rating: 5,
      featured: true,
      order: 3,
    },
    {
      quote:
        "Best development team we have ever worked with. Deliver high-quality work on time.",
      author_name: "Sarah Williams",
      author_position: "Product Manager",
      author_company: "TechStart",
      rating: 5,
      featured: false,
      order: 4,
    },
  ],

  // Team Members
  teamMembers: [
    {
      name: "Sarah Johnson",
      position: "CEO & Founder",
      bio: "Visionary leader with 15+ years of experience in tech industry.",
      email: "sarah@techcorp.com",
      social_linkedin: "https://linkedin.com/in/sarahjohnson",
      order: 1,
      featured: true,
    },
    {
      name: "Michael Chen",
      position: "CTO",
      bio: "Full-stack architect with expertise in scalable systems.",
      email: "michael@techcorp.com",
      social_linkedin: "https://linkedin.com/in/michaelchen",
      order: 2,
      featured: true,
    },
    {
      name: "Emily Rodriguez",
      position: "Lead Designer",
      bio: "Award-winning UI/UX designer focused on creating delightful experiences.",
      email: "emily@techcorp.com",
      social_linkedin: "https://linkedin.com/in/emilyrodriguez",
      order: 3,
      featured: true,
    },
    {
      name: "David Kim",
      position: "Senior Developer",
      bio: "Expert in React, Node.js, and cloud technologies.",
      email: "david@techcorp.com",
      social_linkedin: "https://linkedin.com/in/davidkim",
      order: 4,
      featured: true,
    },
  ],

  // Homepage
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
    cta_subtitle: "Let's build something amazing together.",
    cta_button_text: "Get Started",
    cta_button_link: "/contact",
    stats: JSON.stringify([
      { label: "Projects Completed", value: "150+" },
      { label: "Happy Clients", value: "98%" },
      { label: "Years Experience", value: "10+" },
      { label: "Team Members", value: "25+" },
    ]),
  },

  // Site Setting
  siteSetting: {
    site_name: "TechCorp Solutions",
    tagline: "Building Tomorrow's Technology Today",
    contact_email: "hello@techcorp.com",
    contact_phone: "+1 (555) 123-4567",
    contact_address: "123 Tech Street, Silicon Valley, CA 94025, USA",
    working_hours: "Mon-Fri: 9:00 AM - 6:00 PM PST",
    social_facebook: "https://facebook.com/techcorp",
    social_twitter: "https://twitter.com/techcorp",
    social_instagram: "https://instagram.com/techcorp",
    social_linkedin: "https://linkedin.com/company/techcorp",
    social_github: "https://github.com/techcorp",
    footer_text:
      "We are a team of passionate developers creating exceptional digital experiences.",
    copyright_text: "© 2026 TechCorp Solutions. All rights reserved.",
  },

  // About Page
  aboutPage: {
    title: "About Us",
    subtitle: "Building the future, one line of code at a time",
    story_title: "Our Story",
    story_content:
      "Founded in 2016, TechCorp Solutions began with a simple mission: to help businesses thrive in the digital age.",
    mission_title: "Our Mission",
    mission_content:
      "To empower businesses with innovative technology solutions that drive growth.",
    vision_title: "Our Vision",
    vision_content:
      "To be the leading technology partner for businesses worldwide.",
    team_title: "Meet Our Team",
    team_subtitle: "The talented people behind our success",
    stats: JSON.stringify([
      { label: "Projects Delivered", value: "150+" },
      { label: "Client Satisfaction", value: "98%" },
      { label: "Team Members", value: "25+" },
      { label: "Countries Served", value: "15+" },
    ]),
    values: JSON.stringify([
      { title: "Innovation", description: "We embrace new technologies" },
      { title: "Quality", description: "Excellence in every line of code" },
      { title: "Collaboration", description: "Working together as partners" },
      { title: "Integrity", description: "Honest and transparent always" },
    ]),
  },
};

async function seedData(strapi) {
  console.log("🌱 Checking if seed data needed...");

  try {
    // Check if already seeded
    const existingServices = await strapi
      .documents("api::service.service")
      .findMany();
    if (existingServices.length > 0) {
      console.log("✅ Data already exists, skipping seed.");
      return;
    }

    console.log("🚀 Seeding data...\n");

    // 1. Categories
    console.log("🏷️  Creating Categories...");
    for (const item of sampleData.categories) {
      await strapi.documents("api::category.category").create({
        data: item,
        status: "published",
      });
    }
    console.log("✅ Categories created\n");

    // 2. Services
    console.log("🔧 Creating Services...");
    for (const item of sampleData.services) {
      await strapi.documents("api::service.service").create({
        data: item,
        status: "published",
      });
    }
    console.log("✅ Services created\n");

    // 3. Client Logos
    console.log("🏢 Creating Client Logos...");
    for (const item of sampleData.clientLogos) {
      await strapi.documents("api::client-logo.client-logo").create({
        data: item,
        status: "published",
      });
    }
    console.log("✅ Client Logos created\n");

    // 4. Testimonials
    console.log("💬 Creating Testimonials...");
    for (const item of sampleData.testimonials) {
      await strapi.documents("api::testimonial.testimonial").create({
        data: item,
        status: "published",
      });
    }
    console.log("✅ Testimonials created\n");

    // 5. Team Members
    console.log("👥 Creating Team Members...");
    for (const item of sampleData.teamMembers) {
      await strapi.documents("api::team-member.team-member").create({
        data: item,
        status: "published",
      });
    }
    console.log("✅ Team Members created\n");

    // 6. Homepage (Single Type)
    console.log("📄 Creating Homepage...");
    await strapi.documents("api::homepage.homepage").create({
      data: sampleData.homepage,
      status: "published",
    });
    console.log("✅ Homepage created\n");

    // 7. Site Setting (Single Type)
    console.log("⚙️  Creating Site Setting...");
    await strapi.documents("api::site-setting.site-setting").create({
      data: sampleData.siteSetting,
    });
    console.log("✅ Site Setting created\n");

    // 8. About Page (Single Type)
    console.log("ℹ️  Creating About Page...");
    await strapi.documents("api::about-page.about-page").create({
      data: sampleData.aboutPage,
      status: "published",
    });
    console.log("✅ About Page created\n");

    console.log("🎉 All seed data created successfully!");
    console.log("📍 Check: http://localhost:1337/admin\n");
  } catch (error) {
    console.error("❌ Seed error:", error.message);
  }
}

module.exports = seedData;
