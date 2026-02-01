'use strict';

/**
 * about-page router
 * Endpoint untuk about page single type
 * GET /api/about-page - ambil konten about page
 * PUT /api/about-page - update konten about page
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::about-page.about-page');
