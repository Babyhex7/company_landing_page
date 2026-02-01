'use strict';

/**
 * site-setting router
 * Endpoint untuk site settings single type
 * GET /api/site-setting - ambil site settings
 * PUT /api/site-setting - update site settings
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::site-setting.site-setting');
