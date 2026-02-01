'use strict';

/**
 * team-member router
 * Mendefinisikan endpoint URL untuk team-member API
 * GET /api/team-members - ambil semua team members
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::team-member.team-member');
