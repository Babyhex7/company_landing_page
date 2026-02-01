'use strict';

/**
 * project router
 * Mendefinisikan endpoint URL untuk project API
 * GET /api/projects - ambil semua projects
 * GET /api/projects/:id - ambil satu project
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::project.project');
