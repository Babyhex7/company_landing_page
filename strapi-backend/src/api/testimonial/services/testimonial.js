'use strict';

/**
 * testimonial service
 * Business logic untuk operasi testimonial
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::testimonial.testimonial');
