'use strict';

/**
 * category router
 * Mendefinisikan endpoint URL untuk category API
 * GET /api/categories - ambil semua categories
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::category.category');
