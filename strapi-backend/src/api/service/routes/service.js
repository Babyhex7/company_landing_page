"use strict";

/**
 * service router
 * Mendefinisikan endpoint URL untuk service API
 * GET /api/services - ambil semua services
 * GET /api/services/:id - ambil satu service
 * POST /api/services - buat service baru
 * PUT /api/services/:id - update service
 * DELETE /api/services/:id - hapus service
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::service.service");
