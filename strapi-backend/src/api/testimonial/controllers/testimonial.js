'use strict';

/**
 * testimonial controller
 * Menghandle semua request API untuk testimonials
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::testimonial.testimonial');
