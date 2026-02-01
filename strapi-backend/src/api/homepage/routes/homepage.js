"use strict";

/**
 * homepage router
 * Endpoint untuk homepage single type
 * GET /api/homepage - ambil konten homepage
 * PUT /api/homepage - update konten homepage
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::homepage.homepage");
