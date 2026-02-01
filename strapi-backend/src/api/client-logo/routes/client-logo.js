"use strict";

/**
 * client-logo router
 * Mendefinisikan endpoint URL untuk client-logo API
 * GET /api/client-logos - ambil semua client logos
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::client-logo.client-logo");
