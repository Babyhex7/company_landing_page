"use strict";

/**
 * testimonial router
 * Mendefinisikan endpoint URL untuk testimonial API
 * GET /api/testimonials - ambil semua testimonials
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::testimonial.testimonial");
